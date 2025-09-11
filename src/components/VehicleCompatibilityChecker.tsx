
import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Car, Search } from 'lucide-react';
import { 
  getUniqueBrands, 
  getModelsByBrand, 
  checkVehicleCompatibility 
} from '@/utils/compatibilityData';
import {
  getStyleUniqueBrands,
  getStyleModelsByBrand,
  getStyleYearsByBrandAndModel,
  checkStyleVehicleCompatibility,
  formatTitleCase
} from '@/utils/styleCompatibilityData';
import {
  getLockerUniqueBrands,
  getLockerModelsByBrand,
  getLockerYearsByBrandAndModel,
  checkLockerVehicleCompatibility
} from '@/utils/lockerCompatibilityData';
import {
  getTubularUniqueBrands,
  getTubularModelsByBrand,
  getTubularYearsByBrandAndModel,
  checkTubularVehicleCompatibility
} from '@/utils/tubularCompatibilityData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface VehicleCompatibilityCheckerProps {
  productType: 'smart' | 'style' | 'slim' | 'locker' | 'tubular';
}

const VehicleCompatibilityChecker: React.FC<VehicleCompatibilityCheckerProps> = ({ productType }) => {
  const [carBrand, setCarBrand] = useState<string>('');
  const [carModel, setCarModel] = useState<string>('');
  const [carYear, setCarYear] = useState<string>('');
  const [compatibilityResult, setCompatibilityResult] = useState<null | boolean>(null);
  const [availableModels, setAvailableModels] = useState<string[]>([]);
  const [availableYears, setAvailableYears] = useState<number[]>([]);

  // Determine which data source to use based on product type
  let carBrands: string[] = [];
  
  switch (productType) {
    case 'smart':
    case 'slim':
      carBrands = getUniqueBrands();
      break;
    case 'style':
      carBrands = getStyleUniqueBrands();
      break;
    case 'locker':
      carBrands = getLockerUniqueBrands();
      break;
    case 'tubular':
      carBrands = getTubularUniqueBrands();
      break;
    default:
      carBrands = [];
  }

  useEffect(() => {
    if (carBrand) {
      let models: string[] = [];
      
      switch (productType) {
        case 'smart':
        case 'slim':
          models = getModelsByBrand(carBrand);
          break;
        case 'style':
          models = getStyleModelsByBrand(carBrand);
          break;
        case 'locker':
          models = getLockerModelsByBrand(carBrand);
          break;
        case 'tubular':
          models = getTubularModelsByBrand(carBrand);
          break;
      }
      
      setAvailableModels(models);
      setCarModel('');
      setCarYear('');
      setAvailableYears([]);
    } else {
      setAvailableModels([]);
    }
    setCompatibilityResult(null);
  }, [carBrand, productType]);

  useEffect(() => {
    if (carBrand && carModel) {
      let years: number[] = [];
      
      switch (productType) {
        case 'smart':
        case 'slim':
          // For smart and slim products, we continue using the full year range
          const currentYear = new Date().getFullYear();
          years = Array.from({ length: 30 }, (_, i) => currentYear - i);
          break;
        case 'style':
          years = getStyleYearsByBrandAndModel(carBrand, carModel);
          break;
        case 'locker':
          years = getLockerYearsByBrandAndModel(carBrand, carModel);
          break;
        case 'tubular':
          years = getTubularYearsByBrandAndModel(carBrand, carModel);
          break;
      }
      
      setAvailableYears(years);
      setCarYear('');
    } else {
      setAvailableYears([]);
    }
    setCompatibilityResult(null);
  }, [carModel, carBrand, productType]);

  useEffect(() => {
    if (carYear !== carYear) {
      setCompatibilityResult(null);
    }
  }, [carYear]);

  // Check if vehicle is in the incompatible list for Smart and Slim
  const isIncompatibleVehicle = (brand: string, model: string, year: number): boolean => {
    if ((productType === 'smart' || productType === 'slim') && 
        (brand === 'Mitsubishi' || brand === 'MITSUBISHI' || brand === 'mitsubishi')) {
      if (model === 'Airtrek' || model === 'AIRTREK' || model === 'airtrek') {
        return [2004, 2005, 2006, 2007, 2008].includes(year);
      }
      if (model === 'Pajero Sport' || model === 'PAJERO SPORT' || model === 'pajero sport') {
        return [2007, 2008, 2009, 2010, 2011].includes(year);
      }
      if (model === 'Pajero TR4' || model === 'PAJERO TR4' || model === 'pajero tr4') {
        return [2003, 2004, 2005, 2006, 2007, 2008, 2009].includes(year);
      }
    }
    
    if ((productType === 'smart' || productType === 'slim') && 
        (brand === 'Nissan' || brand === 'NISSAN' || brand === 'nissan')) {
      if (model === 'Frontier' || model === 'FRONTIER' || model === 'frontier') {
        return year >= 2003 && year <= 2016;
      }
    }
    
    return false;
  };

  const checkCompatibility = () => {
    if (!carBrand || !carModel || !carYear) {
      return;
    }

    const yearNumber = parseInt(carYear, 10);
    
    // First check if the vehicle is in the incompatibility list for Smart and Slim
    if (isIncompatibleVehicle(carBrand, carModel, yearNumber)) {
      setCompatibilityResult(false);
      return;
    }
    
    // If not in incompatibility list, check regular compatibility
    let isCompatible = false;
    
    switch (productType) {
      case 'smart':
      case 'slim':
        isCompatible = checkVehicleCompatibility(carBrand, carModel, yearNumber);
        break;
      case 'style':
        isCompatible = checkStyleVehicleCompatibility(carBrand, carModel, yearNumber);
        break;
      case 'locker':
        isCompatible = checkLockerVehicleCompatibility(carBrand, carModel, yearNumber);
        break;
      case 'tubular':
        isCompatible = checkTubularVehicleCompatibility(carBrand, carModel, yearNumber);
        break;
    }
    
    setCompatibilityResult(isCompatible);
  };

  // Format vehicle information for display
  const formatBrand = (brand: string) => formatTitleCase(brand);
  const formatModel = (model: string) => formatTitleCase(model);

  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-10">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Car className="mr-2 text-xrack-red" />
        Verifique a compatibilidade
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <SelectItem key={brand} value={brand}>{formatBrand(brand)}</SelectItem>
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
                <SelectItem key={model} value={model}>{formatModel(model)}</SelectItem>
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
        <div className={`mt-4 p-4 rounded-md ${compatibilityResult ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {compatibilityResult ? (
            <div className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 mt-1" />
              <div>
                <p className="font-bold">✅ Produto compatível com o veículo selecionado</p>
                <p>Esta travessa é compatível com {formatBrand(carBrand)} {formatModel(carModel)} {carYear}.</p>
              </div>
            </div>
          ) : (
            <div className="flex items-start">
              <XCircle className="text-red-500 mr-2 mt-1" />
              <div>
                <p className="font-bold">❌ Produto não compatível com o veículo selecionado</p>
                <p>Esta travessa não é compatível com {formatBrand(carBrand)} {formatModel(carModel)} {carYear}.</p>
                <p className="mt-2">Entre em contato com nosso suporte para verificar alternativas.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VehicleCompatibilityChecker;
