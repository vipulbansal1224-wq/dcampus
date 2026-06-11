"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const defaultImages = [
  "/dcc-banner-2023.jpg",
  "/new-banner-design3.jpg",
  "/3344.jpg",
  "/212.jpg"
];

export default function ImageSlider({ images = defaultImages }: { images?: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-[#182B45]">
      {images.map((src, index) => (
        <div
          key={index}
          className={\bsolute inset-0 transition-opacity duration-1000 ease-in-out \\}
        >
          <Image
            src={src}
            alt={\Slide \\}
            fill
            className="object-fill"
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Navigation Dots (Only show if more than 1 image) */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={\w-3 h-3 rounded-full transition-all \\}
              aria-label={\Go to slide \\}
            />
          ))}
        </div>
      )}
    </div>
  );
}
