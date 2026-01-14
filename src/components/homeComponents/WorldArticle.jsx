import { getArticles } from "../api/ArchiveNews/ArchiveNews"
import { useState, useEffect} from "react"

const WorldArticle = () => {
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
    
    const visibleNews = news.slice(0, 8)

    return(
        <div className="flex flex-col gap-10 mx-auto max-w-[1442px] ">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {visibleNews.map((item) => (
                    <article 
                        key={item.link} 
                        class="group"
                    >
                        <img 
                            alt={item.title} 
                            src={item.image_url || item.source_icon || "/no-image.jpg"}
                            className="h-56 w-full object-cover shadow-xl transition group-hover:grayscale-50"
                        />

                        <div class="p-4">
                            <a href="#">
                                <h3 class="text-lg font-medium text-gray-900">
                                    {item.title}
                                </h3>
                            </a>

                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                {item.description}
                            </p>
                        </div>
                    </article>
                ))}

            </div>
        </div>

    )
}

export default WorldArticle