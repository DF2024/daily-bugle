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
        <div className='flex mt-10 gap-10 mx-auto max-w-[1442px]'>

            <div className="flex flex-col gap-5">
                {left.map((item) => (
                <article
                    key={item.link}
                    className="font-marriweather overflow-hidden shadow-sm transition hover:shadow-lg"
                >
                    <img
                        src={getImage(item)}
                        alt={item.title}
                        className="h-56 w-full object-cover"
                    />
                    <div className="bg-white p-4 sm:p-6">
                    <h3 className="mt-0.5 text-2xl text-gray-900">
                        {item.title}
                    </h3>
                    <time className="block text-xs text-gray-500">
                        {item.pubDate}
                    </time>
                    </div>
                </article>
                ))}
            </div>


            <article className="font-marriweather text-center group flex flex-col gap-7">
                <img
                    src={getImage(featured)}
                    alt={featured.title}
                    className="h-[520px] w-full object-cover shadow-xl transition group-hover:grayscale-50"
                />

                <div className="w-[770px] p-4 flex flex-col gap-5">
                <h3 className="text-5xl font-medium text-gray-900">
                    {featured.title}
                </h3>

                <p className="line-clamp-3 text-sm text-gray-500">
                    {featured.description}
                </p>

                <a
                    href={featured.link}
                    target="_blank"
                    className="group relative inline-block w-[120px] self-center overflow-hidden border border-black px-8 py-3"
                >
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transition-all group-hover:h-full" />
                    <span className="relative text-sm font-medium text-black group-hover:text-white">
                    More
                    </span>
                </a>
                </div>
            </article>

            <div className="flex flex-col gap-5">
                {right.map((item) => (
                <article
                    key={item.link}
                    className="font-marriweather overflow-hidden shadow-sm transition hover:shadow-lg"
                >
                    <img
                    src={getImage(item)}
                    alt={item.title}
                    className="h-56 w-full object-cover"
                    />
                    <div className="bg-white p-4 sm:p-6">
                    <h3 className="mt-0.5 text-2xl text-gray-900">
                        {item.title}
                    </h3>
                    <time className="block text-xs text-gray-500">
                        {item.pubDate}
                    </time>
                    </div>
                </article>
                ))}
            </div>

        </div>
    )
}

export default Articles 