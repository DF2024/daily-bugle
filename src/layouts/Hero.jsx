import { useState } from "react";


const slides = [
  {
    image: "https://wallpapers-clan.com/wp-content/uploads/2025/03/daredevil-in-red-suit-desktop-wallpaper-preview.jpg",
    title: "Explorando la naturaleza",
    date: "4 Enero, 2026",
  },
  {
    image: "https://source.unsplash.com/1600x600/?city",
    title: "Descubriendo la ciudad",
    date: "3 Enero, 2026",
  },
  {
    image: "https://source.unsplash.com/1600x600/?technology",
    title: "Innovación tecnológica",
    date: "2 Enero, 2026",
  },
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    return (
        <div className="relative w-full h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
            <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            >
            <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start p-10 text-white">
                <p className="text-sm mb-2">{slide.date}</p>
                <h2 className="text-4xl md:text-5xl font-bold">{slide.title}</h2>
            </div>
            </div>
        ))}

        {/* Flechas de navegación */}
        <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
            &#10094;
        </button>
        <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
            &#10095;
        </button>
        </div>
  );
}

export default Hero