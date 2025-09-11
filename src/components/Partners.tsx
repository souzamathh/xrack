
import React from 'react';
import { BadgePercent, Headphones, Zap, Shield } from 'lucide-react';
import { AnimateOnScroll } from '@/utils/ScrollAnimationObserver';

const Partners = () => {
  return (
    <section id="parceiros" className="xrack-section">
      <div className="xrack-container">
        <AnimateOnScroll animation="fade-up">
          <h2 className="section-title">Programa B2B</h2>
          <p className="text-lg mb-12 max-w-4xl">
            Um ecossistema completo de vantagens para impulsionar seu negócio.
          </p>
        </AnimateOnScroll>
        
        <div className="bg-black text-white p-8 md:p-12 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="scale-in">
              <div className="text-center">
                <div className="inline-flex items-center justify-center mb-4 bg-xrack-red p-4 rounded-full">
                  <BadgePercent size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Margens Exclusivas</h3>
                <p>
                  Estrutura de preços escalonada que garante mais rentabilidade para parceiros premium. Seu volume se traduz em lucratividade garantida.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="scale-in" delay={200}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center mb-4 bg-xrack-red p-4 rounded-full">
                  <Headphones size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Suporte Técnico Dedicado</h3>
                <p>
                  Linha direta com nossa equipe. Respostas rápidas, soluções personalizadas e suporte prioritário para parceiros estratégicos.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="scale-in" delay={400}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center mb-4 bg-xrack-red p-4 rounded-full">
                  <Zap size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Lançamentos Antecipados</h3>
                <p>
                  Seja o primeiro a oferecer as mais recentes inovações. Acesso exclusivo a produtos em pré-lançamento com condições especiais para demonstração.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
          
          <AnimateOnScroll animation="fade-up" delay={500}>
            <div className="mt-12 text-center">
              <div className="flex justify-center items-center gap-3 mb-6">
                <Shield className="text-xrack-red" size={24} />
                <h3 className="text-2xl font-bold">Programa com Vagas Limitadas</h3>
              </div>
              <p className="mb-8 max-w-2xl mx-auto">
                Nosso programa seleciona cuidadosamente parceiros comprometidos com excelência. Não é apenas uma parceria comercial - é uma aliança estratégica para crescimento mútuo.
              </p>
              <a 
                href="https://wa.me/5511910201100" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-xrack hover:scale-105 transition-all"
              >
                Garanta sua Vaga como Parceiro Estratégico
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Partners;
