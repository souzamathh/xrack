import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Car, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { unifiedCompatibilityData } from '@/utils/unifiedCompatibilityData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductCompatibilityCheckerProps {
  productType: 'smart' | 'style' | 'slim' | 'locker' | 'tubular' | 'way';
}

const ProductCompatibilityChecker: React.FC<ProductCompatibilityCheckerProps> = ({ productType }) => {
  const [carBrand, setCarBrand] = useState<string>('');
  const [carModel, setCarModel] = useState<string>('');
  const [carYear, setCarYear] = useState<string>('');
  const [compatibilityResult, setCompatibilityResult] = useState<null | boolean>(null);
  const [availableModels, setAvailableModels] = useState<string[]>([]);
  const [availableYears, setAvailableYears] = useState<number[]>([]);
  const [compatibleProducts, setCompatibleProducts] = useState<string[]>([]);

  // Get unique brands from unified data
  const getUniqueBrands = () => {
    const brands = [...new Set(unifiedCompatibilityData.map(item => item.montadora))];
    return brands.sort();
  };

  // Get models by brand
  const getModelsByBrand = (brand: string) => {
    const models = [...new Set(
      unifiedCompatibilityData
        .filter(item => item.montadora.toLowerCase() === brand.toLowerCase())
        .map(item => item.modelo)
    )];
    return models.sort();
  };

  // Get years by brand and model
  const getYearsByBrandAndModel = (brand: string, model: string) => {
    const years = new Set<number>();
    unifiedCompatibilityData
      .filter(item => 
        item.montadora.toLowerCase() === brand.toLowerCase() && 
        item.modelo.toLowerCase() === model.toLowerCase()
      )
      .forEach(item => {
        item.anos.forEach(year => years.add(year));
      });
    return Array.from(years).sort((a, b) => b - a);
  };

  // Check vehicle compatibility for current product
  const checkVehicleCompatibility = (brand: string, model: string, year: number) => {
    const productTypeMap: { [key: string]: string } = {
      'smart': 'Smart',
      'style': 'Style', 
      'slim': 'Slim',
      'locker': 'Locker',
      'tubular': 'Tubular',
      'way': 'Way'
    };

    return unifiedCompatibilityData.some(item =>
      item.montadora.toLowerCase() === brand.toLowerCase() &&
      item.modelo.toLowerCase() === model.toLowerCase() &&
      item.anos.includes(year) &&
      item.modeloTravessa === productTypeMap[productType]
    );
  };

  // Get all compatible products for a vehicle
  const getCompatibleProducts = (brand: string, model: string, year: number) => {
    const compatible = unifiedCompatibilityData
      .filter(item =>
        item.montadora.toLowerCase() === brand.toLowerCase() &&
        item.modelo.toLowerCase() === model.toLowerCase() &&
        item.anos.includes(year)
      )
      .map(item => item.modeloTravessa);
    
    return [...new Set(compatible)];
  };

  const carBrands = getUniqueBrands();

  useEffect(() => {
    if (carBrand) {
      const models = getModelsByBrand(carBrand);
      setAvailableModels(models);
      setCarModel('');
      setCarYear('');
      setAvailableYears([]);
    } else {
      setAvailableModels([]);
    }
    setCompatibilityResult(null);
    setCompatibleProducts([]);
  }, [carBrand]);

  useEffect(() => {
    if (carBrand && carModel) {
      const years = getYearsByBrandAndModel(carBrand, carModel);
      setAvailableYears(years);
      setCarYear('');
    } else {
      setAvailableYears([]);
    }
    setCompatibilityResult(null);
    setCompatibleProducts([]);
  }, [carModel, carBrand]);

  useEffect(() => {
    setCompatibilityResult(null);
    setCompatibleProducts([]);
  }, [carYear]);

  const checkCompatibility = () => {
    if (!carBrand || !carModel || !carYear) {
      return;
    }

    const yearNumber = parseInt(carYear, 10);
    const isCompatible = checkVehicleCompatibility(carBrand, carModel, yearNumber);
    const allCompatibleProducts = getCompatibleProducts(carBrand, carModel, yearNumber);
    
    setCompatibilityResult(isCompatible);
    setCompatibleProducts(allCompatibleProducts.filter(product => {
      const productTypeMap: { [key: string]: string } = {
        'smart': 'Smart',
        'style': 'Style', 
        'slim': 'Slim',
        'locker': 'Locker',
        'tubular': 'Tubular',
        'way': 'Way'
      };
      return product !== productTypeMap[productType];
    }));
  };

  // Format text to title case
  const formatTitleCase = (text: string) => {
    return text.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  };

  // Get product meta (link + thumbnail) based on product name
  const getProductMeta = (productName: string) => {
    const productMap: { [key: string]: { href: string; img: string; alt: string } } = {
      'Smart': {
        href: '/produtos/travessas/smart',
        img: '/lovable-uploads/5f46fb45-b668-4467-9d06-a57830b4a821.png',
        alt: 'Travessa Smart XRack'
      },
      'Style': {
        href: '/produtos/travessas/style',
        img: '/lovable-uploads/72bb23d4-4360-4264-b15e-c2b22fc09e46.png',
        alt: 'Travessa Style XRack'
      },
      'Slim': {
        href: '/produtos/travessas/slim',
        img: '/lovable-uploads/1efb7664-9494-49ec-a7cc-878028d89ea6.png',
        alt: 'Travessa Slim XRack'
      },
      'Locker': {
        href: '/produtos/travessas/locker',
        img: '/lovable-uploads/7fbd5377-eedd-4a41-bbbe-5fd3b589ac3b.png',
        alt: 'Travessa Locker XRack'
      },
      'Tubular': {
        href: '/produtos/travessas/tubular',
        img: '/lovable-uploads/a795707a-9f81-4016-bfd2-1d52225368ba.png',
        alt: 'Travessa Tubular XRack'
      },
      'Way': {
        href: '/produtos/travessas/uno-way',
        img: '/lovable-uploads/a0d5274a-0299-457b-821a-4c1e90395898.png',
        alt: 'Travessa Uno Way XRack'
      }
    };
    return productMap[productName] || { href: '#', img: '/lovable-uploads/048ff5e8-8601-4c9c-885d-aa8123d93e1a.png', alt: `Travessa ${productName}` };
  };
  return (
    <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-10">
      <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center">
        <Car className="mr-2 text-xrack-red" />
        Verifique a compatibilidade
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        <div>
          <label htmlFor="carBrand" className="block text-sm font-medium mb-2">
            Marca
          </label>
          <Select value={carBrand} onValueChange={setCarBrand}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecionar" />
            </SelectTrigger>
            <SelectContent>
              {carBrands.map(brand => (
                <SelectItem key={brand} value={brand}>{formatTitleCase(brand)}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="carModel" className="block text-sm font-medium mb-2">
            Modelo
          </label>
          <Select 
            value={carModel} 
            onValueChange={setCarModel} 
            disabled={!carBrand}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecionar" />
            </SelectTrigger>
            <SelectContent>
              {availableModels.map(model => (
                <SelectItem key={model} value={model}>{formatTitleCase(model)}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="carYear" className="block text-sm font-medium mb-2">
            Ano
          </label>
          <Select 
            value={carYear} 
            onValueChange={setCarYear}
            disabled={!carModel}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecionar" />
            </SelectTrigger>
            <SelectContent>
              {availableYears.map(year => (
                <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <button 
          className="bg-xrack-red text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors flex items-center"
          onClick={checkCompatibility}
          disabled={!carBrand || !carModel || !carYear}
        >
          <Search size={18} className="mr-2" />
          Verificar Compatibilidade
        </button>
      </div>
      
      {compatibilityResult !== null && (
        <div className={`mt-4 p-4 rounded-md ${compatibilityResult ? 'bg-green-50 text-green-800' : 'bg-blue-50 text-blue-800'}`}>
          {compatibilityResult ? (
            <div className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 mt-1" />
              <div>
                <p className="font-bold">✅ Produto compatível com o veículo selecionado</p>
                <p>Esta travessa é compatível com {formatTitleCase(carBrand)} {formatTitleCase(carModel)} {carYear}.</p>
              </div>
            </div>
          ) : (
            <div className="flex items-start">
              <CheckCircle className="text-blue-500 mr-2 mt-1" />
              <div>
                <p className="font-bold">🔍 Verificamos outras opções para seu veículo</p>
                <p>Para {formatTitleCase(carBrand)} {formatTitleCase(carModel)} {carYear}, temos produtos alternativos que se adequam perfeitamente.</p>
                
                {compatibleProducts.length > 0 && (
                  <div className="mt-4">
                    <p className="font-medium mb-2">Produtos compatíveis disponíveis para seu veículo:</p>
                    <div className="space-y-2">
                      {compatibleProducts.map(product => {
                        const meta = getProductMeta(product);
                        return (
                          <Link 
                            key={product}
                            to={meta.href}
                            className="inline-flex items-center bg-green-100 text-green-800 px-2 sm:px-3 py-2 rounded-md hover:bg-green-200 transition-colors mr-2 mb-2 text-sm"
                          >
                            <img
                              src={meta.img}
                              alt={meta.alt}
                              className="w-6 h-6 sm:w-8 sm:h-8 object-contain mr-1 sm:mr-2 rounded-sm"
                              loading="lazy"
                            />
                            Travessa {product}
                            <ArrowRight size={16} className="ml-1" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
                
                {compatibleProducts.length === 0 && (
                  <p className="mt-2">Entre em contato com nosso suporte para verificar alternativas.</p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCompatibilityChecker;