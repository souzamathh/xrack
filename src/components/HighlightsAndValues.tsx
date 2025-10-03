import React from 'react';
import { Shield, CloudLightning, Lock, Target, Eye, Heart } from 'lucide-react';
import { AnimateOnScroll } from '@/utils/ScrollAnimationObserver';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileCarousel from './MobileCarousel';

const HighlightsAndValues = () => {
  const isMobile = useIsMobile();

  return (
    <section id="diferenciais" className="py-20 bg-gray-50">
      <div className="xrack-container px-4 md:px-8">
        {/* Missão, Visão e Valores */}
        {isMobile ? (
          <MobileCarousel 
            products={[]} 
            title="Missão, Visão e Valores"
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-up">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-xrack-red">
                <div className="mb-4 text-xrack-red">
                  <Target size={42} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-xrack-red">Missão</h3>
                <p className="leading-relaxed">
                  Transformar o transporte veicular oferecendo acessórios automotivos de alta qualidade que unem resistência, funcionalidade e design inteligente, proporcionando segurança e praticidade para quem depende do carro no trabalho, nas viagens e no dia a dia.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-xrack-red">
                <div className="mb-4 text-xrack-red">
                  <Eye size={42} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-xrack-red">Visão</h3>
                <p className="leading-relaxed">
                  Ser a principal referência nacional em acessórios automotivos, reconhecida pela excelência em produtos 100% alumínio, inovação contínua e pelo compromisso de fazer com que cada estrada seja percorrida com mais segurança e confiança.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-up" delay={400}>
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-xrack-red">
                <div className="mb-4 text-xrack-red">
                  <Heart size={42} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-xrack-red">Valores</h3>
                <div className="leading-relaxed space-y-2">
                  <p><strong>Excelência:</strong> Qualidade superior em cada produto.</p>
                  <p><strong>Inovação:</strong> Desenvolvimento contínuo de produtos e melhorias.</p>
                  <p><strong>Integridade:</strong> Transparência em todas as relações.</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        )}
      </div>
    </section>
  );
};

export default HighlightsAndValues;