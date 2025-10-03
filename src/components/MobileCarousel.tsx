import React, { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight, Target, Eye, Heart } from 'lucide-react';

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
    if (title === "Missão, Visão e Valores") {
      setCurrentIndex((prev) => (prev + 1) % 3);
    } else {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= products.length) {
          return 0;
        }
        return nextIndex;
      });
    }
  };

  const prevSlide = () => {
    if (title === "Missão, Visão e Valores") {
      setCurrentIndex((prev) => (prev - 1 + 3) % 3);
    } else {
      setCurrentIndex((prev) => {
        const prevIndex = prev - 1;
        if (prevIndex < 0) {
          return products.length - 1;
        }
        return prevIndex;
      });
    }
  };

  const renderMissionVisionValues = () => {
    const mvvItems = [
      {
        id: 'mission',
        title: 'Missão',
        content: 'Transformar o transporte veicular oferecendo acessórios automotivos de alta qualidade que unem resistência, funcionalidade e design inteligente, proporcionando segurança e praticidade para quem depende do carro no trabalho, nas viagens e no dia a dia.',
        icon: Target
      },
      {
        id: 'vision',
        title: 'Visão',
        content: 'Ser a principal referência nacional em acessórios automotivos, reconhecida pela excelência em produtos 100% alumínio, inovação contínua e pelo compromisso de fazer com que cada estrada seja percorrida com mais segurança e confiança.',
        icon: Eye
      },
      {
        id: 'values',
        title: 'Valores',
        content: 'Excelência: Qualidade superior em cada produto. Inovação: Desenvolvimento contínuo de produtos e melhorias. Integridade: Transparência em todas as relações.',
        icon: Heart
      }
    ];

    return (
      <div className="overflow-hidden relative">
        <div className="flex space-x-4" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.3s ease-in-out' }}>
          {mvvItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-xrack-red min-w-full">
              <div className="mb-4 text-xrack-red">
                <item.icon size={42} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-xrack-red">{item.title}</h3>
              <p className="leading-relaxed text-sm">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="mb-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex space-x-2">
          <button 
            onClick={prevSlide}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      {title === "Missão, Visão e Valores" ? (
        renderMissionVisionValues()
      ) : (
        <>
          <p className="text-lg mb-6 max-w-4xl">
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
            {/* Products Container */}
            <div className="overflow-hidden">
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
        </>
      )}
    </div>
  );
};

export default MobileCarousel;