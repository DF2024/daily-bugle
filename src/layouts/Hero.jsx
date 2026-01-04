import { useState } from "react";
import hero1 from "../assets/images/baxter.jpg";
import hero2 from "../assets/images/avengers.jpg";
import hero3 from "../assets/images/spidermanW.jpg";

const images = [hero1, hero2, hero3];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-[1350px] mx-auto">

        <div className=" relative h-56 md:h-166  overflow-hidden ">
            {images.map((img, index) => (
            <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
                }`}
            >
                <img
                src={img}
                className="w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
                />
            </div>
            ))}
        </div>

        <button
            onClick={prevSlide}
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4"
        >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50">
            ❮
            </span>
        </button>

        <button
            onClick={nextSlide}
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4"
        >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50">
            ❯
            </span>
        </button>
    </div>
  );
}

export default Hero