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
      <div
        className="
            mx-auto max-w-[1442px]
            flex flex-col gap-12
            lg:flex-row lg:gap-20
        "
        >
        {/* ================= LEFT: NEWS LIST ================= */}
        <div className="flex flex-col gap-10 w-full lg:w-3/5">
            {visibleNews.map((item) => (
            <article
                key={item.link}
                className="
                flex flex-col sm:flex-row
                bg-white transition
                w-full
                hover:shadow-xl
                "
            >
                {/* DATE */}
                <div className="rotate-180 p-2 [writing-mode:vertical-lr] hidden sm:block">
                <time
                    dateTime="2022-10-10"
                    className="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase"
                >
                    <span>2022</span>
                    <span className="w-px flex-1 bg-gray-900/10"></span>
                    <span>Oct 10</span>
                </time>
                </div>

                {/* IMAGE */}
                <div className="hidden sm:block sm:basis-48 lg:basis-56">
                <img
                    alt={item.title}
                    src={item.image_url || item.source_icon || "/no-image.jpg"}
                    className="aspect-square h-full w-full object-cover"
                />
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="#">
                    <h3 className="font-bold text-gray-900 uppercase">
                        {item.title}
                    </h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    {item.description}
                    </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                    <a
                    href="#"
                    className="
                        block bg-red-600 px-5 py-3
                        text-center text-xs font-bold
                        text-gray-200 uppercase transition
                        hover:bg-red-400
                    "
                    >
                    Read Opinion
                    </a>
                </div>
                </div>
            </article>
            ))}
        </div>

        {/* ================= RIGHT: FEATURED ================= */}
        <div className="w-full lg:w-2/5">
            <article
            className="
                relative overflow-hidden
                w-full
                h-80 sm:h-[500px] lg:h-[780px]
                shadow-sm transition hover:shadow-lg
            "
            >
            {/* IMAGE */}
            <img
                alt={featured.title}
                src={getImage(featured)}
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* OVERLAY */}
            <div
                className="
                relative h-full
                bg-linear-to-t
                from-gray-900/60 to-gray-900/30
                pt-24 sm:pt-40 lg:pt-64
                "
            >
                <div className="p-4 sm:p-6">
                <time className="block text-xs text-white/90">
                    10th Oct 2022
                </time>

                <a href="#">
                    <h3 className="mt-1 text-lg sm:text-xl lg:text-2xl text-white">
                    {featured.title}
                    </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm sm:text-base text-white/95">
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