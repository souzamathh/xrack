
import React, { useRef, useEffect } from 'react';
import ProductCard from './ProductCard';

const travessas = [
  {
    id: 'smart',
    name: "Smart",
    description: "Travessa Larga Rack de Teto Bagageiro – Segurança, Resistência e Design Premium",
    image: "/lovable-uploads/5f46fb45-b668-4467-9d06-a57830b4a821.png", // Atualizado: 1-Preto.png Smart
    category: "travessas"
  },
  {
    id: "style",
    name: "Style",
    description: "Travessa larga de teto 100% alumínio e fixação premium sem furos.",
    image: "/lovable-uploads/72bb23d4-4360-4264-b15e-c2b22fc09e46.png", // Atualizado: Nova imagem para Style (preto)
    category: "travessas"
  },
  {
    id: "slim",
    name: "Slim",
    description: "Kit par de travessas leves, resistência máxima e instalação sem adaptação.",
    image: "/lovable-uploads/1efb7664-9494-49ec-a7cc-878028d89ea6.png", // 1-Preto.png Slim
    category: "travessas"
  },
  {
    id: "uno-way",
    name: "Uno Way",
    description: "Travessa exclusiva Uno Way, capacidade até 45kg, fácil instalação.",
    image: "/lovable-uploads/a0d5274a-0299-457b-821a-4c1e90395898.png", // 1-Preto.png Uno Way
    category: "travessas"
  },
  {
    id: "locker",
    name: "Locker",
    description: "Travessa com ponteiras de alumínio e perfil aerodinâmico reforçado.",
    image: "/lovable-uploads/7fbd5377-eedd-4a41-bbbe-5fd3b589ac3b.png", // 1-Preto.png Locker
    category: "travessas"
  },
  {
    id: "tubular",
    name: "Tubular",
    description: "Travessa tubular, alumínio, fácil instalação e máxima resistência.",
    image: "/lovable-uploads/a795707a-9f81-4016-bfd2-1d52225368ba.png", // 1-Preto.png Tubular
    category: "travessas"
  }
];

const bagageiros = [
  {
    id: 'gradeado-501-3-110x90-preto',
    name: 'Gradeado 501-3',
    description: 'Gradeado com formato retangular, ideal para bagageiros de médio porte. Construção robusta e acabamento premium',
    dimensions: '140 × 100 cm',
    image: '/lovable-uploads/ea232286-bc3d-4d17-aaf3-ef3c5f08a4e1.png',
    category: 'bagageiros'
  },
  {
    id: 'gradeado-307-c-140x100-preto',
    name: 'Gradeado 307-C',
    description: 'Gradeado premium para bagageiros grandes. Design moderno e funcional',
    dimensions: '127 x 96 cm, 140 × 100 cm',
    image: '/lovable-uploads/a44e5f48-edbf-4eb3-96ad-1f86da1a9d03.png',
    category: 'bagageiros'
  },
  {
    id: 'gradeado-307-2-96x96-preto',
    name: 'Gradeado 307-2',
    description: 'Novo gradeado - resistente e durável',
    dimensions: '96 × 96 cm',
    image: '/lovable-uploads/bc8a9f53-598f-443e-a034-446bcf3eafa6.png',
    category: 'bagageiros'
  },
  {
    id: 'gradeado-p',
    name: 'Bagageiro Gradeado P',
    description: 'Ideal para cargas leves',
    dimensions: '97 × 81 × 17 cm',
    image: '/lovable-uploads/41811073-f47b-44b0-9bae-b53e99916982.png',
    category: 'bagageiros'
  },
  {
    id: 'gradeado-m',
    name: 'Bagageiro Gradeado M',
    description: 'Tamanho médio, versatilidade máxima',
    dimensions: '100 × 80 × 12 cm',
    image: '/lovable-uploads/9badf46e-b01f-4925-a5d0-fc1019a54998.png',
    category: 'bagageiros'
  },
  {
    id: 'gradeado-g',
    name: 'Bagageiro Gradeado G',
    description: 'Para cargas maiores',
    dimensions: '110 × 90 × 11 cm',
    image: '/lovable-uploads/9badf46e-b01f-4925-a5d0-fc1019a54998.png',
    category: 'bagageiros'
  },
  {
    id: 'gradeado-gg',
    name: 'Bagageiro Gradeado GG',
    description: 'Extra grande para máxima capacidade',
    dimensions: '120 × 100 × 11 cm',
    image: '/lovable-uploads/62c39066-709b-4a70-9321-6144f422f6f4.png',
    category: 'bagageiros'
  },
  {
    id: 'gradeado-xg',
    name: 'Bagageiro Gradeado XG',
    description: 'O maior da linha',
    dimensions: '150 × 100 × 11 cm',
    image: '/lovable-uploads/62c39066-709b-4a70-9321-6144f422f6f4.png',
    category: 'bagageiros'
  },
  {
    id: 'gradeado-511-127x96-preto',
    name: 'Gradeado 511',
    description: 'Bagageiro gradeado - alta qualidade',
    dimensions: '127 × 96 cm, 160 x 110 cm',
    image: '/lovable-uploads/56860209-742f-4f99-b202-646a1802ee81.png',
    category: 'bagageiros'
  },
  {
    id: 'gradeado-514-127x96-preto',
    name: 'Gradeado 514',
    description: 'Gradeado premium para transporte seguro. Construção robusta em material resistente com design aerodinâmico',
    dimensions: '127 × 96 cm, 160 × 110 cm',
    image: '/lovable-uploads/eff89411-167e-49da-9e1e-ef69374bb624.png',
    category: 'bagageiros'
  },
  {
    id: 'gradeado-539-96x90-preto',
    name: 'Gradeado 539',
    description: 'Bagageiro gradeado - design compacto',
    dimensions: '96 × 90 cm, 127 x 96 cm, 160 x 110 cm',
    image: '/lovable-uploads/de4e7a24-e550-4586-bc7b-b4a05b04a8bf.png',
    category: 'bagageiros'
  },
  {
    id: 'gradeado-544-127x96-preto',
    name: 'Gradeado 544',
    description: 'Gradeado premium para transporte seguro. Design aerodinâmico e construção robusta em material resistente',
    dimensions: '127 × 96 cm, 160 × 110 cm',
    image: '/lovable-uploads/6ef11061-44fb-4e3d-8371-34ee89465107.png',
    category: 'bagageiros'
  },
  {
    id: 'gradeado-548-127x96-preto',
    name: 'Gradeado 548',
    description: 'Gradeado premium para transporte seguro de cargas. Construção robusta em material resistente com design aerodinâmico',
    dimensions: '127 × 96 cm',
    image: '/lovable-uploads/4ff6a7e8-1dc5-4c2e-9d65-e058cae27713.png',
    category: 'bagageiros'
  },
  {
    id: 'gradeado-d52-132x104-preto',
    name: 'Gradeado D-52',
    description: 'Gradeado premium para máxima capacidade de carga. Design robusto e funcional com sistema de fixação reforçado',
    dimensions: '132 × 104 cm',
    image: '/lovable-uploads/64d44c0f-82bc-454d-862a-c7c95d23fabb.png',
    category: 'bagageiros'
  },
  {
    id: 'gradeado-d59-127x96-preto',
    name: 'Gradeado D-59',
    description: 'Gradeado premium com design aerodinâmico e construção robusta. Ideal para transporte seguro de cargas com máxima durabilidade',
    dimensions: '127 × 96 cm',
    image: '/lovable-uploads/559fe3ed-c74d-4558-98ad-a1ff818c9f81.png',
    category: 'bagageiros'
  }
];

// Horizontal scroll with auto-scroll and manual drag
const useHorizontalScroll = (ref: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const scrollContainer = ref.current;
    if (!scrollContainer) return;

    let isScrolling = false;
    let scrollSpeed = 1.5; // Velocidade otimizada para fluidez
    let animationFrame: number;

    const scroll = () => {
      if (!isScrolling && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        
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
    const handleScroll = () => {
      isScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 2000);
    };

    let scrollTimeout: NodeJS.Timeout;

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('scroll', handleScroll);

    // Enable manual dragging
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      isScrolling = true;
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      scrollContainer.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      isDown = false;
      isScrolling = false;
      scrollContainer.style.cursor = 'grab';
    };

    const handleMouseLeaveForDrag = () => {
      isDown = false;
      isScrolling = false;
      scrollContainer.style.cursor = 'grab';
    };

    scrollContainer.addEventListener('mousedown', handleMouseDown);
    scrollContainer.addEventListener('mousemove', handleMouseMove);
    scrollContainer.addEventListener('mouseup', handleMouseUp);
    scrollContainer.addEventListener('mouseleave', handleMouseLeaveForDrag);

    return () => {
      cancelAnimationFrame(animationFrame);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        scrollContainer.removeEventListener('scroll', handleScroll);
        scrollContainer.removeEventListener('mousedown', handleMouseDown);
        scrollContainer.removeEventListener('mousemove', handleMouseMove);
        scrollContainer.removeEventListener('mouseup', handleMouseUp);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeaveForDrag);
      }
    };
  }, [ref]);
};

type ProductGridProps = {
  showAll?: boolean;
};

const ProductGrid = ({ showAll = false }: ProductGridProps) => {
  const travessasScrollRef = useRef<HTMLDivElement>(null);
  const bagageirosScrollRef = useRef<HTMLDivElement>(null);
  
  useHorizontalScroll(travessasScrollRef);
  useHorizontalScroll(bagageirosScrollRef);

  const renderProductGrid = (products: any[], scrollRef?: React.RefObject<HTMLDivElement>) => {
    if (showAll) {
      // Grid tradicional para página de categorias
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      );
    }

    if (scrollRef) {
      // Scroll horizontal para home
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
            <div key={`${product.id}-${index}`} className="flex-shrink-0 w-72 sm:w-80">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <section className="xrack-section bg-gray-100">
      <div className="xrack-container px-4 md:px-4">
        <h2 className="section-title mb-12">Produtos</h2>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Travessas de Teto</h3>
          {renderProductGrid(travessas, showAll ? undefined : travessasScrollRef)}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">Bagageiros de Teto</h3>
          {renderProductGrid(bagageiros, showAll ? undefined : bagageirosScrollRef)}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
