import React, { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileCarousel from './MobileCarousel';

const travessas = [
  {
    id: "locker",
    name: "Locker",
    description: "Ponteiras em alumínio, mais reforço e segurança.",
    image: "/lovable-uploads/7fbd5377-eedd-4a41-bbbe-5fd3b589ac3b.png",
    category: "travessas"
  },
  {
    id: "slim",
    name: "Slim",
    description: "Travessas para máxima capacidade de carga, design avançado.",
    image: "/lovable-uploads/1efb7664-9494-49ec-a7cc-878028d89ea6.png",
    category: "travessas"
  },
  {
    id: "smart",
    name: "Smart",
    description: "Travessa Larga Rack de Teto Bagageiro XRack – Premium, segura e resistente.",
    image: "/lovable-uploads/5f46fb45-b668-4467-9d06-a57830b4a821.png",
    category: "travessas"
  },
  {
    id: "style",
    name: "Style",
    description: "Travessa larga de teto, ponteiras e barras 100% alumínio.",
    image: "/lovable-uploads/72bb23d4-4360-4264-b15e-c2b22fc09e46.png",
    category: "travessas"
  },
  {
    id: "tubular",
    name: "Tubular",
    description: "Travessa tubular 100% alumínio, robustez e facilidade.",
    image: "/lovable-uploads/a795707a-9f81-4016-bfd2-1d52225368ba.png",
    category: "travessas"
  },
  {
    id: "uno-way",
    name: "Uno Way",
    description: "Travessa exclusiva Uno Way. Mais espaço e versatilidade.",
    image: "/lovable-uploads/a0d5274a-0299-457b-821a-4c1e90395898.png",
    category: "travessas"
  }
];

const bagageiros = [
  {
    id: "gradeado-307-2-96x96-preto",
    name: "Gradeado 307-2",
    size: "96 × 96 cm",
    description: "Novo gradeado universal. Resistente e durável. 45kg.",
    image: "/lovable-uploads/bc8a9f53-598f-443e-a034-446bcf3eafa6.png",
    category: "bagageiros",
  },
  {
    id: "gradeado-307-c-140x100-preto",
    name: "Gradeado 307-C",
    size: "140 × 100 cm",
    description: "Gradeado premium para bagageiros grandes. Design moderno e funcional.",
    image: "/lovable-uploads/a44e5f48-edbf-4eb3-96ad-1f86da1a9d03.png",
    category: "bagageiros",
  },
  {
    id: "gradeado-501-3-110x90-preto",
    name: "Gradeado 501-3",
    size: "140 x 100 cm",
    description: "Gradeado 501-3 com formato retangular, ideal para bagageiros de médio porte. Construção robusta e acabamento premium.",
    image: "/lovable-uploads/ea232286-bc3d-4d17-aaf3-ef3c5f08a4e1.png",
    category: "bagageiros",
  },
  {
    id: "gradeado-511-127x96-preto",
    name: "Gradeado 511",
    size: "160 × 110 cm, 127 × 96 cm",
    description: "Gradeado 511 de alta resistência para bagageiros grandes. Design robusto e funcional com acabamento premium.",
    image: "/lovable-uploads/d6622302-a80c-4f93-bac1-b8070e86802a.png",
    category: "bagageiros",
  },
  {
    id: "gradeado-514-127x96-preto",
    name: "Gradeado 514",
    size: "127 × 96 cm, 160 × 110 cm",
    description: "Gradeado 514 premium para transporte seguro. Construção robusta em material resistente com design aerodinâmico.",
    image: "/lovable-uploads/eff89411-167e-49da-9e1e-ef69374bb624.png",
    category: "bagageiros",
  },
  {
    id: "gradeado-539-96x90-preto",
    name: "Gradeado 539",
    size: "96 × 90 cm, 127 x 96 cm, 160 x 110 cm",
    description: "Gradeado 539 compacto e funcional para cargas médias. Material resistente com design moderno e fixação segura.",
    image: "/lovable-uploads/de4e7a24-e550-4586-bc7b-b4a05b04a8bf.png",
    category: "bagageiros",
  },
  {
    id: "gradeado-544-127x96-preto",
    name: "Gradeado 544",
    size: "127 × 96 cm, 160 x 110 cm",
    description: "Gradeado 544 premium para transporte seguro. Design aerodinâmico e construção robusta em material resistente.",
    image: "/lovable-uploads/6ef11061-44fb-4e3d-8371-34ee89465107.png",
    category: "bagageiros",
  },
  {
    id: "gradeado-548-127x96-preto",
    name: "Gradeado 548",
    size: "127 × 96 cm",
    description: "Gradeado 548 premium para transporte seguro de cargas. Construção robusta em material resistente com design aerodinâmico.",
    image: "/lovable-uploads/4ff6a7e8-1dc5-4c2e-9d65-e058cae27713.png",
    category: "bagageiros",
  },
  {
    id: "gradeado-d52-132x104-preto",
    name: "Gradeado D-52",
    size: "132 × 104 cm",
    description: "Gradeado D-52 premium para máxima capacidade de carga. Design robusto e funcional com sistema de fixação reforçado.",
    image: "/lovable-uploads/64d44c0f-82bc-454d-862a-c7c95d23fabb.png",
    category: "bagageiros",
  },
  {
    id: "gradeado-d59-127x96-preto",
    name: "Gradeado D-59",
    size: "127 × 96 cm",
    description: "Gradeado D-59 premium com design aerodinâmico e construção robusta. Ideal para transporte seguro de cargas com máxima durabilidade.",
    image: "/lovable-uploads/559fe3ed-c74d-4558-98ad-a1ff818c9f81.png",
    category: "bagageiros",
  },
  {
    id: "gradeado-g",
    name: "Gradeado G",
    size: "110 × 90 × 11 cm",
    description: "Para SUVs e cargas grandes. Segurança garantida.",
    image: "/lovable-uploads/9badf46e-b01f-4925-a5d0-fc1019a54998.png",
    category: "bagageiros",
  },
  {
    id: "gradeado-gg",
    name: "Gradeado GG",
    size: "120 × 100 × 11 cm",
    description: "Bagageiro extra grande para frota pesadas.",
    image: "/lovable-uploads/62c39066-709b-4a70-9321-6144f422f6f4.png",
    category: "bagageiros",
  },
  {
    id: "gradeado-m",
    name: "Gradeado M",
    size: "100 × 80 × 12 cm",
    description: "Frota urbana: robustez, leveza e fácil instalação.",
    image: "/lovable-uploads/9badf46e-b01f-4925-a5d0-fc1019a54998.png",
    category: "bagageiros",
  },
  {
    id: "gradeado-p",
    name: "Gradeado P",
    size: "97 × 81 × 17 cm",
    description: "Bagageiro compacto para veículos pequenos. 45kg.",
    image: "/lovable-uploads/41811073-f47b-44b0-9bae-b53e99916982.png",
    category: "bagageiros",
  },
  {
    id: "gradeado-xg",
    name: "Gradeado XG",
    size: "150 × 100 × 11 cm",
    description: "Capacidade máxima para as maiores demandas.",
    image: "/lovable-uploads/62c39066-709b-4a70-9321-6144f422f6f4.png",
    category: "bagageiros",
  }
];

interface InfiniteCarouselProps {
  products: any[];
  title: string;
}

const InfiniteProductCarousel = ({ products, title }: InfiniteCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [perView, setPerView] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Duplicate products for infinite scroll
  const infiniteProducts = [...products, ...products];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll functionality - moves items to the right every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const itemsToMove = isMobile ? 1 : 3;
        const nextIndex = prev + itemsToMove;
        // Reset smoothly when reaching the end
        if (nextIndex >= products.length) {
          setTimeout(() => setCurrentIndex(0), 50);
          return products.length - itemsToMove;
        }
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [products.length, isPaused, isMobile]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const itemsToMove = isMobile ? 1 : 3;
      const nextIndex = prev + itemsToMove;
      if (nextIndex >= products.length) {
        return 0;
      }
      return nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const itemsToMove = isMobile ? 1 : 3;
      const prevIndex = prev - itemsToMove;
      if (prevIndex < 0) {
        return Math.max(0, products.length - itemsToMove);
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
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft size={isMobile ? 20 : 24} className="text-xrack-red" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
        >
          <ChevronRight size={isMobile ? 20 : 24} className="text-xrack-red" />
        </button>

        {/* Products Container */}
        <div className="overflow-hidden mx-6 md:mx-12">
          <div 
            ref={carouselRef}
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / (isMobile ? 1 : 3))}%)`,
            }}
          >
            {infiniteProducts.map((product, index) => {
              // Show partial next card for visual effect on desktop, not on mobile
              const isPartiallyVisible = !isMobile && index === currentIndex + 3;
              
              return (
                <div 
                  key={`${product.id}-${index}`} 
                  className={`flex-shrink-0 px-2 md:px-3 ${
                    isMobile 
                      ? 'w-full' 
                      : isPartiallyVisible 
                        ? 'w-1/6' 
                        : 'w-1/3'
                  } relative`}
                >
                  {isPartiallyVisible && (
                    <div className="absolute inset-0 bg-gradient-to-l from-white via-white/70 to-transparent z-10 pointer-events-none" />
                  )}
                  <ProductCard product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section id="produtos" className="xrack-section bg-gray-100">
      <div className="xrack-container px-4 md:px-8">
        <InfiniteProductCarousel products={travessas} title="Travessas" />

        {/* Compatibility Check Button */}
        <div className="text-center mb-20">
          <Link 
            to="/verificar-compatibilidade"
            className="inline-flex items-center bg-xrack-red text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-red-700 transition-colors text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <Search size={20} className="mr-3" />
            Verificar Compatibilidade
          </Link>
          <p className="text-gray-600 mt-3 text-xs md:text-sm">
            Encontre o produto ideal para seu veículo
          </p>
        </div>

        <InfiniteProductCarousel products={bagageiros} title="Bagageiros" />
      </div>
    </section>
  );
};

export default Products;