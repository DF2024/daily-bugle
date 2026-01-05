import { useState, useEffect, useRef } from "react";

export default function Hero({ images, autoSlideInterval = 5000 }) {
  const [current, setCurrent] = useState(0);
  const [hover, setHover] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Funciones de navegación
  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [current]);

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current]);

  // Swipe mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) nextSlide(); // swipe izquierda
    if (distance < -50) prevSlide(); // swipe derecha
  };

  return (
    <div
      className="relative w-full mx-auto overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div className="relative h-56 md:h-[640px]">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            {/* Imagen */}
            <img
              src={img}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Texto */}
            <div className="absolute inset-0 flex items-center justify-center z-30 px-4">
              <h2 className="text-white text-2xl md:text-4xl font-bold text-center drop-shadow-lg">
                Tu texto aquí
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Flechas (solo desktop, hover) */}
      <button
        onClick={prevSlide}
        className={`hidden md:flex absolute top-0 left-0 z-40 items-center justify-center h-full px-4 transition-opacity duration-300 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white text-2xl">
          ❮
        </span>
      </button>

      <button
        onClick={nextSlide}
        className={`hidden md:flex absolute top-0 right-0 z-40 items-center justify-center h-full px-4 transition-opacity duration-300 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white text-2xl">
          ❯
        </span>
      </button>
    </div>
  );
}
