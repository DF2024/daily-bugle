import { getArticles } from "../api/ArchiveNews/ArchiveNews"
import { useState, useEffect } from "react"

const Opinion = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        getArticles().then(setNews)
    }, [])

    if (!news.length) {
        return (
        <div className="h-56 md:h-[640px] flex items-center justify-center">
            <p className="text-gray-400">Cargando noticias...</p>
        </div>
        );
    }
    
    const featured = news[4]
    const visibleNews = news.slice(0, 3)

    const getImage = (item) =>
    item.image_url || item.source_icon || daily;

    return(
        <div className="flex mx-auto max-w-[1442px] gap-20">
            <div className="flex flex-col gap-13 w-[1500px]">
                {visibleNews.map((item) => (
                    <article 
                        key={item.link}
                        class="flex bg-white transition hover:shadow-xl">
                        <div class="rotate-180 p-2 [writing-mode:vertical-lr]">
                            <time datetime="2022-10-10" class="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase">
                            <span>2022</span>
                            <span class="w-px flex-1 bg-gray-900/10"></span>
                            <span>Oct 10</span>
                            </time>
                        </div>

                        <div class="hidden sm:block sm:basis-56">
                            <img 
                                alt={item.title} 
                                src={item.image_url || item.source_icon || "/no-image.jpg"}
                                class="aspect-square h-full w-full object-cover"/>
                        </div>

                        <div class="flex flex-1 flex-col justify-between">
                            <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                            <a href="#">
                                <h3 class="font-bold text-gray-900 uppercase">
                                {item.title}
                                </h3>
                            </a>

                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                {item.description}
                            </p>
                            </div>

                            <div class="sm:flex sm:items-end sm:justify-end">
                            <a href="#" class="block bg-red-600 px-5 py-3 text-center text-xs font-bold text-gray-200 uppercase transition hover:bg-red-400">
                                Read Opinion
                            </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div>
                <article class="relative overflow-hidden h-[780px] shadow-sm transition hover:shadow-lg">
                    <img 
                        alt={featured.title} 
                        src={getImage(featured)} 
                        class="absolute inset-0 h-full w-full object-cover"
                    />

                    <div class="relative bg-linear-to-t h-[780px] from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                        <div class="p-4 sm:p-6">
                        <time datetime="2022-10-10" class="block text-xs text-white/90"> 10th Oct 2022 </time>

                        <a href="#">
                            <h3 class="mt-0.5 text-lg text-white">{featured.title}</h3>
                        </a>

                        <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                            {featured.description}
                        </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Opinion