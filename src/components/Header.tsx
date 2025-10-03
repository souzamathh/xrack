
import React, { useEffect, useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { smoothScrollTo } from '@/utils/smoothScroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check if we're on a product detail page or compatibility checker page
  const isProductDetailPage = location.pathname.includes('/produtos/');
  const isCompatibilityPage = location.pathname.includes('/verificar-compatibilidade');

  const handleNavClick = (sectionId: string) => {
    if (location.pathname === '/') {
      // Already on home, just scroll to section
      smoothScrollTo(sectionId);
    } else {
      // Navigate to home and then scroll to section
      navigate('/');
      setTimeout(() => smoothScrollTo(sectionId), 100);
    }
  };

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
      ? (isProductDetailPage || isCompatibilityPage)
        ? "bg-white/75 backdrop-blur-md shadow-lg top-0 animate-slide-down max-w-6xl mx-auto left-0 right-0 rounded-full mt-4" 
        : "bg-black/75 backdrop-blur-md shadow-lg top-0 animate-slide-down max-w-6xl mx-auto left-0 right-0 rounded-full mt-4" 
      : "bg-transparent top-0"
  );

  // Text color based on page type and scroll state
  const textColor = (isProductDetailPage || isCompatibilityPage) ? "text-black" : "text-white";
  const hoverColor = (isProductDetailPage || isCompatibilityPage) ? "hover:text-gray-700" : "hover:text-xrack-red";

  return (
    <>
      <header className={headerClasses}>
        <div className={cn(
          "w-full max-w-6xl mx-auto",
          scrolled ? "px-4 md:px-8" : "px-4 md:px-8"
        )}>
          <div className={cn(
            scrolled ? "flex items-center justify-between" : "grid grid-cols-[auto_1fr_auto] items-center gap-6"
          )}>
            {/* Left: Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="/lovable-uploads/28d16ee1-5886-47c2-a5e8-505125285ab3.png" 
                  alt="XRack Logo" 
                  className="h-12"
                />
              </Link>
            </div>

            {/* Center: Nav - always perfectly centered on desktop */}
            <nav className="hidden lg:flex items-center justify-center space-x-6">
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
              
              <button onClick={() => handleNavClick('sobre')} className={`${textColor} ${hoverColor} transition-colors`}>Sobre</button>
              <button onClick={() => handleNavClick('diferenciais')} className={`${textColor} ${hoverColor} transition-colors`}>Diferenciais</button>
              <button onClick={() => handleNavClick('depoimentos')} className={`${textColor} ${hoverColor} transition-colors`}>Depoimentos</button>
              <button onClick={() => handleNavClick('parceiros')} className={`${textColor} ${hoverColor} transition-colors`}>Programa B2B</button>
              <button onClick={() => handleNavClick('contato')} className={`${textColor} ${hoverColor} transition-colors`}>Contato</button>
            </nav>

            {/* Right: CTA on desktop + menu on mobile/tablet */}
            <div className="flex items-center justify-end gap-3">
              <Link 
                to="/verificar-compatibilidade" 
                className="hidden lg:inline-flex btn-xrack glow-xrack-red text-sm px-3 py-2 rounded-md items-center whitespace-nowrap"
              >
                <Search size={16} className="mr-1" />
                <span className="hidden xl:inline">Verificar Compatibilidade</span>
                <span className="xl:hidden">Compatibilidade</span>
              </Link>
              <button 
                onClick={toggleMenu} 
                className={cn(
                  `${textColor} z-50 relative lg:hidden`,
                  !scrolled && "mr-4"
                )}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
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
            <button onClick={() => { handleNavClick('sobre'); closeMenu(); }} className="text-white text-xl hover:text-xrack-red transition-colors">Sobre</button>
            <button onClick={() => { handleNavClick('diferenciais'); closeMenu(); }} className="text-white text-xl hover:text-xrack-red transition-colors">Diferenciais</button>
            <button onClick={() => { handleNavClick('depoimentos'); closeMenu(); }} className="text-white text-xl hover:text-xrack-red transition-colors">Depoimentos</button>
            <button onClick={() => { handleNavClick('parceiros'); closeMenu(); }} className="text-white text-xl hover:text-xrack-red transition-colors">Programa B2B</button>
            <button onClick={() => { handleNavClick('contato'); closeMenu(); }} className="text-white text-xl hover:text-xrack-red transition-colors">Contato</button>
            <Link 
              to="/verificar-compatibilidade" 
              className="btn-xrack glow-xrack-red text-sm px-4 py-2 rounded-md inline-flex items-center" 
              onClick={closeMenu}
            >
              <Search size={16} className="mr-2" />
              Verificar Compatibilidade
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
