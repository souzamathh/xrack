import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Car, CheckCircle, XCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  getUnifiedUniqueBrands,
  getUnifiedModelsByBrand,
  getUnifiedYearsByBrandAndModel,
  checkUnifiedVehicleCompatibility,
  formatTitleCase
} from '@/utils/unifiedCompatibilityData';

// Produtos compatíveis
const travessas = [
  {
    id: 'smart',
    name: "Smart",
    description: "Travessa Larga Rack de Teto Bagageiro XRack – Segurança, Resistência e Design Premium",
    image: "/lovable-uploads/5f46fb45-b668-4467-9d06-a57830b4a821.png",
    category: "travessas"
  },
  {
    id: "style",
    name: "Style",
    description: "Travessa larga de teto 100% alumínio e fixação premium sem furos.",
    image: "/lovable-uploads/72bb23d4-4360-4264-b15e-c2b22fc09e46.png",
    category: "travessas"
  },
  {
    id: "slim",
    name: "Slim",
    description: "Kit par de travessas leves, resistência máxima e instalação sem adaptação.",
    image: "/lovable-uploads/1efb7664-9494-49ec-a7cc-878028d89ea6.png",
    category: "travessas"
  },
  {
    id: "locker",
    name: "Locker",
    description: "Travessa com ponteiras de alumínio e perfil aerodinâmico reforçado.",
    image: "/lovable-uploads/7fbd5377-eedd-4a41-bbbe-5fd3b589ac3b.png",
    category: "travessas"
  },
  {
    id: "tubular",
    name: "Tubular",
    description: "Travessa tubular, alumínio, fácil instalação e máxima resistência.",
    image: "/lovable-uploads/a795707a-9f81-4016-bfd2-1d52225368ba.png",
    category: "travessas"
  },
  {
    id: "way",
    name: "Way",
    description: "Travessa especial para modelos específicos com design único.",
    image: "/lovable-uploads/a0d5274a-0299-457b-821a-4c1e90395898.png",
    category: "travessas"
  }
];

const bagageiros = [
  {
    id: 'gradeado-501-3-110x90-preto',
    name: 'Gradeado 501-3',
    description: 'Gradeado 501-3 com formato retangular, ideal para bagageiros de médio porte. Construção robusta e acabamento premium',
    dimensions: '140 × 100 cm',
    image: '/lovable-uploads/ea232286-bc3d-4d17-aaf3-ef3c5f08a4e1.png',
    category: 'bagageiros'
  },
  {
    id: 'gradeado-307-c-140x100-preto',
    name: 'Gradeado 307-C',
    description: 'Gradeado premium para bagageiros grandes. Design moderno e funcional',
    dimensions: '140 × 100 cm',
    image: '/lovable-uploads/a44e5f48-edbf-4eb3-96ad-1f86da1a9d03.png',
    category: 'bagageiros'
  },
  {
    id: 'gradeado-307-2-96x96-preto',
    name: 'Gradeado 307-2',
    description: 'Novo gradeado 96x96cm - resistente e durável',
    dimensions: '96 × 96 × 12 cm',
    image: '/lovable-uploads/bc8a9f53-598f-443e-a034-446bcf3eafa6.png',
    category: 'bagageiros'
  },
  {
    id: 'gradeado-p',
    name: 'Bagageiro Gradeado P',
    description: 'Ideal para cargas leves',
    dimensions: '97 × 81 × 17 cm',
    image: '/lovable-uploads/41811073-f47b-44b0-9bae-b53e99916982.png',
    category: 'bagageiros'
  },
  {
    id: 'gradeado-m',
    name: 'Bagageiro Gradeado M',
    description: 'Tamanho médio, versatilidade máxima',
    dimensions: '100 × 80 × 12 cm',
    image: '/lovable-uploads/9badf46e-b01f-4925-a5d0-fc1019a54998.png',
    category: 'bagageiros'
  },
  {
    id: 'gradeado-g',
    name: 'Bagageiro Gradeado G',
    description: 'Para cargas maiores',
    dimensions: '110 × 90 × 11 cm',
    image: '/lovable-uploads/9badf46e-b01f-4925-a5d0-fc1019a54998.png',
    category: 'bagageiros'
  }
];

const CompatibilityChecker = () => {
  const [carBrand, setCarBrand] = useState<string>('');
  const [carModel, setCarModel] = useState<string>('');
  const [carYear, setCarYear] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [availableModels, setAvailableModels] = useState<string[]>([]);
  const [availableYears, setAvailableYears] = useState<number[]>([]);

  // Usar os dados unificados
  const carBrands = getUnifiedUniqueBrands();

  // Atualizar modelos quando marca muda
  useEffect(() => {
    if (carBrand) {
      const models = getUnifiedModelsByBrand(carBrand);      
      setAvailableModels(models);
      setCarModel('');
      setCarYear('');
      setAvailableYears([]);
    } else {
      setAvailableModels([]);
    }
  }, [carBrand]);

  // Atualizar anos quando modelo muda
  useEffect(() => {
    if (carBrand && carModel) {
      const years = getUnifiedYearsByBrandAndModel(carBrand, carModel);
      setAvailableYears(years);
      setCarYear('');
    } else {
      setAvailableYears([]);
    }
  }, [carModel, carBrand]);

  const checkCompatibility = () => {
    if (!carBrand || !carModel || !carYear) {
      return;
    }

    setIsSearching(true);
    
    setTimeout(() => {
      const yearNumber = parseInt(carYear, 10);
      const compatibleProductTypes = checkUnifiedVehicleCompatibility(carBrand, carModel, yearNumber);
      
      // Check if this is Fiat Uno Way - redirect to product page
      if (carBrand.toLowerCase() === 'fiat' && carModel.toLowerCase() === 'uno way') {
        window.location.href = '/produtos/travessas/uno-way';
        return;
      }
      
      const compatibleProducts = travessas.filter(product => {
        // Handle "Way" -> "way" mapping
        const productId = compatibleProductTypes.includes('Way') ? 'way' : product.id;
        return compatibleProductTypes.includes(product.id) || compatibleProductTypes.includes('Way');
      });

      setSearchResults(compatibleProducts);
      setHasSearched(true);
      setIsSearching(false);
    }, 800);
  };

  return (
    <>
      <Helmet>
        <title>Verificar Compatibilidade - XRack</title>
        <meta 
          name="description" 
          content="Verifique a compatibilidade dos produtos XRack com seu veículo. Encontre a travessa ideal para sua marca, modelo e ano."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-32">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
            <div className="xrack-container text-center">
              <div className="flex items-center justify-center mb-6">
                <Car className="mr-4 text-xrack-red" size={48} />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Verificar Compatibilidade
                </h1>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Encontre os produtos XRack ideais para seu veículo. 
                Selecione a marca, modelo e ano para ver as opções compatíveis.
              </p>
            </div>
          </section>

          {/* Search Form */}
          <section className="py-16 bg-gray-50">
            <div className="xrack-container">
              <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
                  Selecione seu Veículo
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Marca
                    </label>
                    <Select value={carBrand} onValueChange={setCarBrand}>
                      <SelectTrigger className="w-full h-12">
                        <SelectValue placeholder="Selecione a marca" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {carBrands.map(brand => (
                          <SelectItem key={brand} value={brand}>
                            {formatTitleCase(brand)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Modelo
                    </label>
                    <Select 
                      value={carModel} 
                      onValueChange={setCarModel} 
                      disabled={!carBrand}
                    >
                      <SelectTrigger className="w-full h-12">
                        <SelectValue placeholder="Selecione o modelo" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {availableModels.map(model => (
                          <SelectItem key={model} value={model}>
                            {formatTitleCase(model)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Ano
                    </label>
                    <Select 
                      value={carYear} 
                      onValueChange={setCarYear}
                      disabled={!carModel}
                    >
                      <SelectTrigger className="w-full h-12">
                        <SelectValue placeholder="Selecione o ano" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {availableYears.map(year => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="text-center">
                  <button 
                    className="bg-xrack-red text-white px-12 py-4 rounded-lg hover:bg-red-700 transition-colors flex items-center mx-auto text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={checkCompatibility}
                    disabled={!carBrand || !carModel || !carYear || isSearching}
                  >
                    <Search size={20} className="mr-3" />
                    {isSearching ? 'Pesquisando...' : 'Pesquisar'}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Search Results */}
          {hasSearched && (
            <section className="py-16">
              <div className="xrack-container">
                {searchResults.length > 0 ? (
                  <>
                    <div className="text-center mb-12">
                      <div className="flex items-center justify-center mb-4">
                        <CheckCircle className="text-green-500 mr-3" size={32} />
                        <h2 className="text-3xl font-bold text-gray-800">
                          Produtos Compatíveis Encontrados
                        </h2>
                      </div>
                      <p className="text-lg text-gray-600">
                        Para {formatTitleCase(carBrand)} {formatTitleCase(carModel)} {carYear}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                      {searchResults.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-4">
                      <XCircle className="text-red-500 mr-3" size={32} />
                      <h2 className="text-3xl font-bold text-gray-800">
                        Nenhum Produto Compatível
                      </h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                      Para {formatTitleCase(carBrand)} {formatTitleCase(carModel)} {carYear}
                    </p>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
                      <p className="text-gray-700 mb-4">
                        Não encontramos produtos compatíveis com seu veículo em nosso banco de dados atual.
                      </p>
                      <p className="text-gray-700">
                        Entre em contato com nosso suporte para verificar alternativas ou produtos sob medida.
                      </p>
                    </div>
                  </div>
                )}

                {/* Seção "Quem viu este produto também comprou" */}
                <div className="border-t border-gray-200 pt-16">
                  <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Quem viu este produto também comprou
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bagageiros.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>
        
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default CompatibilityChecker;