import React from 'react';
import { Shield, CloudLightning, Lock } from 'lucide-react';
import { AnimateOnScroll } from '@/utils/ScrollAnimationObserver';

const About = () => {
  return (
    <section id="sobre" className="py-16">
      <div className="xrack-container">
        <AnimateOnScroll animation="fade-up">
          <h2 className="section-title">Sobre a XRack</h2>
          <div className="text-lg mb-4 max-w-4xl space-y-4">
            <p>
              Há mais de 15 anos, a XRack transforma o transporte veicular no Brasil, oferecendo travessas, bagageiros e gradeados que unem resistência, funcionalidade e design inteligente. Somos uma das poucas empresas do país que fabricam travessas e ponteiras 100% em alumínio — um diferencial que garante leveza, durabilidade e acabamento superior.
            </p>
            <p>
              Cada produto XRack passa por um rigoroso processo de desenvolvimento e controle de qualidade, pensado para suportar o uso intenso nas ruas e estradas brasileiras. Não entregamos apenas acessórios: entregamos confiança para quem depende do carro no trabalho, nas viagens ou no dia a dia.
            </p>            
            <p className="font-bold text-xrack-red text-xl">
              Sua estrada começa aqui. E com a gente, ela vai mais longe.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default About;