
import React from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="xrack-container mx-auto max-w-6xl px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="text-xl font-bold mb-4">XRack</h3>
            <p className="mb-4 text-gray-300">
              Somos referência em soluções de transporte, oferecendo produtos de alta qualidade e durabilidade.
            </p>
            <img 
              src="/lovable-uploads/28d16ee1-5886-47c2-a5e8-505125285ab3.png" 
              alt="XRack Logo" 
              className="h-12"
            />
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <span>(11) 91020-1100</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <span>contato@xrack.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Santo André, SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} />
                <span>Segunda a Sexta: 8h - 17h</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Navegação</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/" className="hover:text-xrack-red transition-colors">Home</a>
              </li>
              <li>
                <a href="/categorias" className="hover:text-xrack-red transition-colors">Categorias</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-xrack-red transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-xrack-red transition-colors">Diferenciais</a>
              </li>
              <li>
                <a href="#parceiros" className="hover:text-xrack-red transition-colors">Programa B2B</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-xrack-red transition-colors">Contato</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} XRack. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
