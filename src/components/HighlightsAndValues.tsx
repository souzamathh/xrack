import React from 'react';
import { Shield, CloudLightning, Lock, Target, Eye, Heart } from 'lucide-react';
import { AnimateOnScroll } from '@/utils/ScrollAnimationObserver';

const HighlightsAndValues = () => {
  return (
    <section className="xrack-section bg-gray-50">
      <div className="xrack-container">
        {/* Painéis de Destaque */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <AnimateOnScroll animation="fade-up">
            <div className="feature-card bg-white">
              <div className="mb-4 text-xrack-red">
                <Shield size={42} />
              </div>
              <h3 className="text-xl font-bold mb-3">100% Alumínio</h3>
              <p>
                Perfis extrudados e ponteiras vazadas com vedação em borracha. Redução de peso, aumento de capacidade e design aerodinâmico que minimiza o consumo de combustível.
              </p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="feature-card bg-white">
              <div className="mb-4 text-xrack-red">
                <CloudLightning size={42} />
              </div>
              <h3 className="text-xl font-bold mb-3">Racks Gradeados</h3>
              <p>
                Estrutura robusta com dimensionamento focado em desempenho e segurança. Projeto exclusivo para uso prolongado que garante estabilidade da carga em diferentes condições.
              </p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={400}>
            <div className="feature-card bg-white">
              <div className="mb-4 text-xrack-red">
                <Lock size={42} />
              </div>
              <h3 className="text-xl font-bold mb-3">Parafusos Inox</h3>
              <p>
                Acabamento em inox para máxima proteção contra corrosão. Todos os componentes metálicos possuem tratamento especializado para suportar condições climáticas extremas.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimateOnScroll animation="fade-up">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-xrack-red">
              <div className="mb-4 text-xrack-red">
                <Target size={42} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-xrack-red">🎯 MISSÃO</h3>
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
              <h3 className="text-xl font-bold mb-4 text-xrack-red">🔭 VISÃO</h3>
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
              <h3 className="text-xl font-bold mb-4 text-xrack-red">💎 VALORES</h3>
              <div className="leading-relaxed space-y-2">
                <p><strong>Excelência:</strong> Compromisso com a qualidade superior em cada produto fabricado.</p>
                <p><strong>Inovação:</strong> Investimento constante em novos produtos e melhorias contínuas.</p>
                <p><strong>Confiabilidade:</strong> Produtos robustos, seguros e duradouros para uso intenso.</p>
                <p><strong>Respeito:</strong> Valorização das pessoas e ambiente de trabalho motivador.</p>
                <p><strong>Integridade:</strong> Transparência e honestidade em todas as relações comerciais.</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default HighlightsAndValues;