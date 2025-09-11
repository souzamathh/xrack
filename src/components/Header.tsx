
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Check if we're on a product detail page
  const isProductDetailPage = location.pathname.includes('/produtos/');

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // For the body overflow handling
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const headerClasses = cn(
    "py-4 z-50 w-full transition-all duration-500 fixed", 
    scrolled 
      ? isProductDetailPage 
        ? "bg-white/75 backdrop-blur-md shadow-lg top-0 animate-slide-down max-w-6xl mx-auto left-0 right-0 rounded-full mt-4" 
        : "bg-black/75 backdrop-blur-md shadow-lg top-0 animate-slide-down max-w-6xl mx-auto left-0 right-0 rounded-full mt-4" 
      : "bg-transparent top-0"
  );

  // Text color based on page type and scroll state
  const textColor = isProductDetailPage ? "text-black" : "text-white";
  const hoverColor = isProductDetailPage ? "hover:text-gray-700" : "hover:text-xrack-red";

  return (
    <>
      <header className={headerClasses}>
        <div className="xrack-container px-4 flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/28d16ee1-5886-47c2-a5e8-505125285ab3.png" 
                alt="XRack Logo" 
                className="h-12"
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`${textColor} ${hoverColor} transition-colors`}>Home</Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`bg-transparent hover:bg-transparent/20 focus:bg-transparent/20 data-[state=open]:bg-transparent/20 ${textColor}`}>
                    Categorias
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white/95 backdrop-blur-xl p-8 rounded-2xl min-w-[400px] shadow-2xl border border-gray-200/50">
                    <div className="space-y-6">
                      <div className="group">
                        <Link 
                          to="/categorias?filter=travessas" 
                          className="flex items-center justify-between p-4 rounded-xl bg-gray-50/80 border border-gray-200/50 hover:border-xrack-red/30 hover:bg-xrack-red/5 transition-all duration-300 hover:shadow-lg hover:shadow-xrack-red/10"
                        >
                          <div>
                            <h3 className="font-bold text-gray-900 text-lg mb-1">Travessas</h3>
                            <p className="text-gray-600 text-sm">Sistemas de fixação para teto</p>
                          </div>
                          <div className="w-2 h-2 rounded-full bg-xrack-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                      </div>
                      
                      <div className="group">
                        <Link 
                          to="/categorias?filter=bagageiros" 
                          className="flex items-center justify-between p-4 rounded-xl bg-gray-50/80 border border-gray-200/50 hover:border-xrack-red/30 hover:bg-xrack-red/5 transition-all duration-300 hover:shadow-lg hover:shadow-xrack-red/10"
                        >
                          <div>
                            <h3 className="font-bold text-gray-900 text-lg mb-1">Bagageiros</h3>
                            <p className="text-gray-600 text-sm">Compartimentos de carga</p>
                          </div>
                          <div className="w-2 h-2 rounded-full bg-xrack-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200/50">
                      <Link 
                        to="/categorias" 
                        className="w-full inline-flex items-center justify-center bg-gradient-to-r from-xrack-red to-red-600 text-white px-6 py-3 rounded-xl hover:from-red-600 hover:to-xrack-red transition-all duration-300 font-medium shadow-lg hover:shadow-xrack-red/25"
                      >
                        Ver Todos os Produtos
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <a href="#sobre" className={`${textColor} ${hoverColor} transition-colors`}>Sobre</a>
            <a href="#diferenciais" className={`${textColor} ${hoverColor} transition-colors`}>Diferenciais</a>
            <a href="#depoimentos" className={`${textColor} ${hoverColor} transition-colors`}>Depoimentos</a>
            <a href="#parceiros" className={`${textColor} ${hoverColor} transition-colors`}>Programa B2B</a>
            <a href="#contato" className={`${textColor} ${hoverColor} transition-colors`}>Contato</a>
          </nav>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className={`${textColor} z-50 relative`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}>
          {/* Close button at top-right */}
          <button 
            onClick={closeMenu}
            className="absolute top-6 right-6 text-white hover:text-xrack-red transition-colors z-60 p-2"
            aria-label="Fechar menu"
          >
            <X size={28} strokeWidth={2} />
          </button>
          
          <div className="flex flex-col items-center space-y-8 py-24 px-6 text-center" onClick={(e) => e.stopPropagation()}>
            <Link to="/" className="text-white text-xl hover:text-xrack-red transition-colors" onClick={closeMenu}>Home</Link>
            <Link to="/categorias" className="text-white text-xl hover:text-xrack-red transition-colors" onClick={closeMenu}>Categorias</Link>
            <a href="#sobre" className="text-white text-xl hover:text-xrack-red transition-colors" onClick={closeMenu}>Sobre</a>
            <a href="#diferenciais" className="text-white text-xl hover:text-xrack-red transition-colors" onClick={closeMenu}>Diferenciais</a>
            <a href="#depoimentos" className="text-white text-xl hover:text-xrack-red transition-colors" onClick={closeMenu}>Depoimentos</a>
            <a href="#parceiros" className="text-white text-xl hover:text-xrack-red transition-colors" onClick={closeMenu}>Programa B2B</a>
            <a href="#contato" className="text-white text-xl hover:text-xrack-red transition-colors" onClick={closeMenu}>Contato</a>
            <a 
              href="https://wa.me/5511910201100" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-xrack w-full text-center mt-8 max-w-xs"
              onClick={closeMenu}
            >
              Fale com um Consultor
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
