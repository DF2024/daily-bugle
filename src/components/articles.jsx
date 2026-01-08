import { getArticles } from '../api/ArchiveNews/ArchiveNews'
import { useEffect, useState } from 'react'


const Articles = ()  => {
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


    const featured = news[0];
    const left = news.slice(1, 3);
    const right = news.slice(3, 5);

    const getImage = (item) =>
        item.image_url || item.source_icon || daily;

    return(
        <div className="
            mt-10 mx-auto max-w-[1442px]
            flex flex-col gap-10
            lg:flex-row
        ">

        {/* LEFT */}
        <div className="flex flex-col gap-5 lg:w-1/4">
            {left.map(item => (
            <article key={item.link} className="overflow-hidden font-marriweather shadow-sm hover:shadow-lg">
                <img src={getImage(item)} className="h-56 w-full object-cover" />
                <div className="bg-white p-4 sm:p-6">
                <h3 className="text-xl text-gray-900">{item.title}</h3>
                <time className="text-xs text-gray-500">{item.pubDate}</time>
                </div>
            </article>
            ))}
        </div>

        {/* FEATURED */}
        <article className="flex flex-col gap-7 font-marriweather text-center lg:w-2/4">
            <img
            src={getImage(featured)}
            className="w-full h-64 sm:h-80 lg:h-[520px] object-cover shadow-xl"
            />
            <div className="w-full max-w-xl lg:max-w-[770px] mx-auto p-4 flex flex-col gap-5">
            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-medium">
                {featured.title}
            </h3>
            <p className="line-clamp-3 text-sm text-gray-500">
                {featured.description}
            </p>
            </div>
        </article>

        {/* RIGHT */}
        <div className="flex flex-col gap-5 lg:w-1/4">
            {right.map(item => (
            <article key={item.link} className="overflow-hidden font-marriweather shadow-sm hover:shadow-lg">
                <img src={getImage(item)} className="h-56 w-full object-cover" />
                <div className="bg-white p-4 sm:p-6">
                <h3 className="text-xl text-gray-900">{item.title}</h3>
                <time className="text-xs text-gray-500">{item.pubDate}</time>
                </div>
            </article>
            ))}
        </div>

        </div>

    )
}

export default Articles 