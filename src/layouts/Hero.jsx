import { useState, useEffect, useRef } from "react";
import { getLatestNews } from "../api/LastestNews/LastestNews";

export default function Hero({ autoSlideInterval = 5000 }) {
  const [current, setCurrent] = useState(0);
  const [hover, setHover] = useState(false);
  const [news, setNews] = useState([]);

  const touchStartX = useRef(0);

  useEffect(() => {
    getLatestNews().then(setNews);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? news.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === news.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => { 
    const handleKeyDown = (e) => { 
        if (e.key === "ArrowLeft") 
          prevSlide(); 

        if (e.key === "ArrowRight") 
          nextSlide(); }; 

        window.addEventListener("keydown", handleKeyDown); 
        return () => window.removeEventListener("keydown", handleKeyDown); 
        
    }, [current]);

  useEffect(() => {
    if (hover || news.length === 0) return;

    const interval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(interval);
  }, [hover, news.length, autoSlideInterval]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const distance =
      touchStartX.current - e.changedTouches[0].clientX;

    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };

  if (!news.length) {
    return (
      <div className="h-56 md:h-[640px] flex items-center justify-center">
        <p className="text-gray-400">Cargando noticias...</p>
      </div>
    );
  }

  return (
    <div
      className="relative w-full mx-auto overflow-hidden max-w-[1442px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative h-86 md:h-[640px]">
        {news.map((item, index) => (
          <div
            key={item.link}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current
                ? "opacity-100 z-20"
                : "opacity-0 z-10"
            }`}
          >
            <img
              src={item.image_url || item.source_icon || "/no-image.jpg"}
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex flex-col items-center gap-4 justify-center z-30 px-4">
              <h2 className="text-white text-2xl w-100 md:text-3xl md:w-200 font-marriweather font-bold text-center drop-shadow-lg line-clamp-3">
                {item.title}
              </h2>
              <p
                className="text-white font-garamond text-xl"
              >{item.pubDate}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Flechas */}
      <button
        onClick={prevSlide}
        className={`hidden md:flex absolute top-0 left-0 z-40 items-center justify-center h-full px-4 transition-opacity duration-300 
          ${ hover ? "opacity-100" : "opacity-0" }`}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white text-2xl"> 
          ❮ 
        </span>
      </button>

      <button 
        onClick={nextSlide} 
        className={`hidden md:flex absolute top-0 right-0 z-40 items-center justify-center h-full px-4 transition-opacity duration-300 
        ${ hover ? "opacity-100" : "opacity-0" }`} 
        > 
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white text-2xl"> ❯ </span> 
      </button>
    </div>
  );
}
