
import React from 'react';
import ProductCard from './ProductCard';
import { useEffect, useRef } from "react";

const travessas = [
  {
    id: "smart",
    name: "Smart",
    description: "Travessa Larga Rack de Teto Bagageiro XRack – Premium, segura e resistente.",
    image: "/lovable-uploads/5f46fb45-b668-4467-9d06-a57830b4a821.png", // Atualizado: 1-Preto.png Smart
    category: "travessas"
  },
  {
    id: "style",
    name: "Style",
    description: "Travessa larga de teto, ponteiras e barras 100% alumínio.",
    image: "/lovable-uploads/72bb23d4-4360-4264-b15e-c2b22fc09e46.png", // Atualizado: Nova imagem para Style (preto)
    category: "travessas"
  },
  {
    id: "slim",
    name: "Slim",
    description: "Travessas para máxima capacidade de carga, design avançado.",
    image: "/lovable-uploads/1efb7664-9494-49ec-a7cc-878028d89ea6.png", // 1-Preto.png Slim
    category: "travessas"
  },
  {
    id: "uno-way",
    name: "Uno Way",
    description: "Travessa exclusiva Uno Way. Mais espaço e versatilidade.",
    image: "/lovable-uploads/a0d5274a-0299-457b-821a-4c1e90395898.png", // 1-Preto.png Uno Way
    category: "travessas"
  },
  {
    id: "locker",
    name: "Locker",
    description: "Ponteiras em alumínio, mais reforço e segurança.",
    image: "/lovable-uploads/7fbd5377-eedd-4a41-bbbe-5fd3b589ac3b.png", // 1-Preto.png Locker
    category: "travessas"
  },
  {
    id: "tubular",
    name: "Tubular",
    description: "Travessa tubular 100% alumínio, robustez e facilidade.",
    image: "/lovable-uploads/a795707a-9f81-4016-bfd2-1d52225368ba.png", // 1-Preto.png Tubular
    category: "travessas"
  }
];

const bagageiros = [
  {
    id: "gradeado-501-3-110x90-preto",
    name: "Gradeado 501-3",
    size: "140 x 100 cm",
    description: "Gradeado 501-3 com formato retangular, ideal para bagageiros de médio porte. Construção robusta e acabamento premium.",
    image: "/lovable-uploads/ea232286-bc3d-4d17-aaf3-ef3c5f08a4e1.png",
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
    id: "gradeado-307-2-96x96-preto",
    name: "Gradeado 307-2",
    size: "96 × 96 cm",
    description: "Novo gradeado universal. Resistente e durável. 45kg.",
    image: "/lovable-uploads/bc8a9f53-598f-443e-a034-446bcf3eafa6.png", // Nova imagem do Gradeado 307-2
    category: "bagageiros",
  },
  {
    id: "gradeado-p",
    name: "Gradeado P",
    size: "97 × 81 × 17 cm",
    description: "Bagageiro compacto para veículos pequenos. 45kg.",
    image: "/lovable-uploads/41811073-f47b-44b0-9bae-b53e99916982.png", // Nova imagem do Gradeado P
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
    image: "/lovable-uploads/62c39066-709b-4a70-9321-6144f422f6f4.png", // Nova imagem para Gradeado GG
    category: "bagageiros",
  },
  {
    id: "gradeado-xg",
    name: "Gradeado XG",
    size: "150 × 100 × 11 cm",
    description: "Capacidade máxima para as maiores demandas.",
    image: "/lovable-uploads/62c39066-709b-4a70-9321-6144f422f6f4.png", // Nova imagem para Gradeado XG
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
  }
];

// Horizontal scroll with auto-scroll and manual drag
const useHorizontalScroll = (ref: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const scrollContainer = ref.current;
    if (!scrollContainer) return;

    let isScrolling = false;
    const speedPxPerSecond = 50; // Velocidade otimizada para fluidez
    let animationFrame: number;
    let lastTime = performance.now();

    const scroll = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.016); // 60fps cap
      lastTime = time;

      if (!isScrolling && scrollContainer) {
        scrollContainer.scrollLeft += speedPxPerSecond * dt;
        
        // Reset scroll when reaching the end with smoother transition
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    // Start auto-scroll
    animationFrame = requestAnimationFrame(scroll);

    // Pause on mouse enter, resume on mouse leave
    const handleMouseEnter = () => { isScrolling = true; };
    const handleMouseLeave = () => { isScrolling = false; };

    // Handle manual scroll
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      isScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 2000);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('scroll', handleScroll);

    // Enable manual dragging
    let isDown = false;
    let startX = 0;
    let startScrollLeft = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      isScrolling = true;
      startX = e.pageX - scrollContainer.offsetLeft;
      startScrollLeft = scrollContainer.scrollLeft;
      scrollContainer.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = startScrollLeft - walk;
    };

    const endDrag = () => {
      isDown = false;
      isScrolling = false;
      scrollContainer.style.cursor = 'grab';
    };

    scrollContainer.addEventListener('mousedown', handleMouseDown);
    scrollContainer.addEventListener('mousemove', handleMouseMove);
    scrollContainer.addEventListener('mouseup', endDrag);
    scrollContainer.addEventListener('mouseleave', endDrag);

    return () => {
      cancelAnimationFrame(animationFrame);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        scrollContainer.removeEventListener('scroll', handleScroll);
        scrollContainer.removeEventListener('mousedown', handleMouseDown);
        scrollContainer.removeEventListener('mousemove', handleMouseMove);
        scrollContainer.removeEventListener('mouseup', endDrag);
        scrollContainer.removeEventListener('mouseleave', endDrag);
      }
    };
  }, [ref]);
};

const Products = () => {
  const travessasScrollRef = useRef<HTMLDivElement>(null);
  const bagageirosScrollRef = useRef<HTMLDivElement>(null);
  
  useHorizontalScroll(travessasScrollRef);
  useHorizontalScroll(bagageirosScrollRef);

  const renderHorizontalScroll = (products: any[], scrollRef: React.RefObject<HTMLDivElement>) => {
    // Duplicate products for infinite scroll effect
    const duplicatedProducts = [...products, ...products];
    
    return (
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden pb-4 cursor-grab scrollbar-hide"
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {duplicatedProducts.map((product, index) => (
          <div key={`${product.id}-${index}`} className="flex-shrink-0 w-80">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="produtos" className="xrack-section bg-gray-100">
      <div className="xrack-container">
        <h2 className="section-title">Travessas</h2>
        <p className="text-lg mb-12 max-w-4xl">
          Produtos de alta qualidade desenvolvidos para atender às diversas necessidades do mercado B2B.
        </p>

        {renderHorizontalScroll(travessas, travessasScrollRef)}

        <div className="mt-20">
          <h2 className="section-title">Bagageiros</h2>
          <p className="text-lg mb-12 max-w-4xl">
            Opções versáteis para diferentes tipos de veículos e necessidades de carga.
          </p>

          {renderHorizontalScroll(bagageiros, bagageirosScrollRef)}
        </div>
      </div>
    </section>
  );
};

export default Products;
