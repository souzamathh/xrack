
import React from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { AnimateOnScroll } from '@/utils/ScrollAnimationObserver';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-40 min-h-screen flex items-center px-4 md:px-0">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-10"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/lovable-uploads/hero-background-jeep.png"
          alt="Jeep com bagageiro XRack em acampamento na floresta"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="xrack-container relative z-20">
        <div className="max-w-3xl">
          <AnimateOnScroll animation="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Soluções Premium em Bagageiros e Travessas
            </h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Traga sua empresa para o próximo nível com nossa linha completa de produtos de alta performance para transporte de carga.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={400}>
            <a 
              href="https://wa.me/5511910201100" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-xrack hover:scale-105 transition-transform"
            >
              Fale com um consultor
              <ArrowRight size={18} />
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Hero;
