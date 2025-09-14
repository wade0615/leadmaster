"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: any[];
  text: {
    title: string;
    title2: string;
    subtitle: string;
  };
  className?: string;
  style?: React.CSSProperties;
}

export default function Carousel({
  images,
  text,
  className = "",
  style,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {/* Image Container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Carousel image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-center text-white z-10">
        <div className="text-center px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-vollkorn">
            {text.title}
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 font-vollkorn">
            {text.title2}
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 z-20"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 z-20"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-white"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
