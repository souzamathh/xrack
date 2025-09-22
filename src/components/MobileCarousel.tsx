import React, { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MobileCarouselProps {
  products: any[];
  title: string;
}

const MobileCarousel = ({ products, title }: MobileCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Duplicate products for infinite scroll
  const infiniteProducts = [...products, ...products];

  // Auto-scroll functionality - moves 1 item to the right every 4 seconds on mobile
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        // Reset smoothly when reaching the end
        if (nextIndex >= products.length) {
          setTimeout(() => setCurrentIndex(0), 50);
          return products.length - 1;
        }
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [products.length, isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      if (nextIndex >= products.length) {
        return 0;
      }
      return nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - 1;
      if (prevIndex < 0) {
        return products.length - 1;
      }
      return prevIndex;
    });
  };

  return (
    <div className="mb-20">
      <h2 className="section-title">{title}</h2>
      <p className="text-lg mb-12 max-w-4xl">
        {title === "Travessas" 
          ? "Produtos de alta qualidade desenvolvidos para atender às diversas necessidades do mercado B2B."
          : "Opções versáteis para diferentes tipos de veículos e necessidades de carga."
        }
      </p>

      <div 
        className="relative"
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft size={20} className="text-xrack-red" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
        >
          <ChevronRight size={20} className="text-xrack-red" />
        </button>

        {/* Products Container */}
        <div className="overflow-hidden mx-8">
          <div 
            ref={carouselRef}
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {infiniteProducts.map((product, index) => (
              <div 
                key={`${product.id}-${index}`} 
                className="flex-shrink-0 w-full px-2"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCarousel;