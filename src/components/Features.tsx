
import React from 'react';
import { CheckCircle, Wind, ShieldCheck, FileCheck } from 'lucide-react';

const Features = () => {
  return (
    <section id="diferenciais" className="xrack-section">
      <div className="xrack-container px-4 md:px-8">
        <h2 className="section-title">Diferenciais Técnicos</h2>
        <p className="text-lg mb-12 max-w-4xl">
          Soluções pensadas para atender às necessidades específicas de nossos clientes empresariais.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4 animate-fade-in">
            <div className="mt-1 text-xrack-red">
              <CheckCircle size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">100% Alumínio</h3>
              <p className="text-gray-700">
                Não enferruja e mantém performance estável mesmo em condições extremas. Nossa tecnologia exclusiva XRack garante durabilidade.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 animate-fade-in animate-delay-1">
            <div className="mt-1 text-xrack-red">
              <CheckCircle size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Vedação Premium</h3>
              <p className="text-gray-700">
                Sistema de borrachas especiais que garantem isolamento total contra água e poeira, protegendo a carga transportada.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 animate-fade-in animate-delay-2">
            <div className="mt-1 text-xrack-red">
              <CheckCircle size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Parafusos Premium</h3>
              <p className="text-gray-700">
                Hardware em aço inoxidável de alta resistência. Sem corrosão, sem manutenção constante, sem preocupações.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 animate-fade-in animate-delay-3">
            <div className="mt-1 text-xrack-red">
              <CheckCircle size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Design Aerodinâmico</h3>
              <p className="text-gray-700">
                Perfil projetado para minimizar a resistência ao ar e reduzir o consumo de combustível, mesmo com carga completa.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-black text-white p-8 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Conformidade Regulatória</h3>
              <p className="mb-4">
                Todos os produtos XRack atendem aos mais rigorosos padrões de segurança e normas técnicas:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FileCheck size={18} className="text-xrack-red" />
                  <span>Carga máxima dentro da capacidade do veículo</span>
                </li>
                <li className="flex items-center gap-2">
                  <FileCheck size={18} className="text-xrack-red" />
                  <span>Altura máxima regulamentada de 50 cm</span>
                </li>
                <li className="flex items-center gap-2">
                  <FileCheck size={18} className="text-xrack-red" />
                  <span>Testados em laboratório para resistência e segurança</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="p-4 bg-xrack-red rounded-full">
                <ShieldCheck size={120} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
