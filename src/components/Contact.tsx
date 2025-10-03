
import React from 'react';
import { MessageSquare, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { AnimateOnScroll } from '@/utils/ScrollAnimationObserver';

const Contact = () => {
  return (
    <section id="contato" className="xrack-section bg-gray-100">
      <div className="xrack-container px-4 md:px-8">
        <AnimateOnScroll animation="fade-up">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="text-lg mb-12 max-w-4xl">
            Estamos prontos para desenvolver soluções personalizadas para sua empresa. Entre em contato e descubra como podemos ajudar.
          </p>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimateOnScroll animation="slide-in">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-6">Consultoria Especializada</h3>
              
              <p className="mb-8 text-lg">
                Nossa equipe técnica está pronta para analisar as necessidades específicas da sua empresa e propor as melhores soluções.
              </p>
              
              <div className="flex justify-center mb-8">
                <a 
                  href="https://wa.me/5511910201100" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-xrack inline-flex items-center gap-2 text-lg hover:scale-105 transition-all"
                >
                  <MessageSquare size={20} />
                  Solicitar Proposta
                </a>
              </div>
              
              <p className="text-gray-600 text-sm">
                Retornamos todas as solicitações em até 3 horas durante horário comercial
              </p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="bg-black text-white p-8 rounded-lg h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6">Atendimento Corporativo</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <Clock className="text-xrack-red mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-1">Horário</h4>
                    <p>Segunda a Sexta: 8h - 17h</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="text-xrack-red mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-1">Telefone</h4>
                    <p>(11) 91020-1100</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="text-xrack-red mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-1">Email</h4>
                    <p>contato@xrack.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="text-xrack-red mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-1">Endereço</h4>
                    <p>Av. das Nações, 1836</p>
                    <p>Parque Novo Oratório</p>
                    <p>Santo André - SP, Brasil</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto text-center">
                <p className="mb-4 text-xl">Precisa de soluções urgentes?</p>
                <a 
                  href="https://wa.me/5511910201100" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-xrack inline-flex items-center gap-2 hover:scale-105 transition-all"
                >
                  <MessageSquare size={18} />
                  Atendimento Prioritário
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
        
        <div className="mt-12">
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4960281021404!2d-46.5386311851905!3d-23.62946868464097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5cde6433a55d%3A0x5b27ae736abcca9a!2sAv.%20das%20Na%C3%A7%C3%B5es%2C%201836%20-%20Parque%20Novo%20Orat%C3%B3rio%2C%20Santo%20Andr%C3%A9%20-%20SP!5e0!3m2!1sen!2sbr!4v1650395896232!5m2!1sen!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="XRack Location"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
