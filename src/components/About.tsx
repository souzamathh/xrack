
import React from 'react';
import { Shield, CloudLightning, Lock } from 'lucide-react';
import { AnimateOnScroll } from '@/utils/ScrollAnimationObserver';

const About = () => {
  return (
    <section id="sobre" className="xrack-section">
      <div className="xrack-container">
        <AnimateOnScroll animation="fade-up">
          <h2 className="section-title">Sobre a XRack</h2>
          <div className="text-lg mb-12 max-w-4xl space-y-4">
            <p>
              Há mais de 15 anos, a XRack transforma o transporte veicular no Brasil, oferecendo travessas, bagageiros e gradeados que unem resistência, funcionalidade e design inteligente. Somos uma das poucas empresas do país que fabrica travessas e ponteiras 100% em alumínio — um diferencial que garante leveza, durabilidade e acabamento superior.
            </p>
            <p>
              Cada produto XRack passa por um rigoroso processo de desenvolvimento e controle de qualidade, pensado para suportar o uso intenso nas ruas e estradas brasileiras. Não entregamos apenas acessórios: entregamos confiança para quem depende do carro no trabalho, nas viagens ou no dia a dia.
            </p>
            <p>
              Com sede em Santo André (SP), atendemos todo o Brasil com agilidade logística, atendimento personalizado e compromisso total com a satisfação de nossos clientes e parceiros.
            </p>
            <p className="font-bold text-xrack-red text-xl">
              XRack — Sua estrada começa aqui. E com a gente, ela vai mais longe.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimateOnScroll animation="fade-up">
            <div className="feature-card">
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
            <div className="feature-card">
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
            <div className="feature-card">
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
      </div>
    </section>
  );
};

export default About;
