
export interface LockerCompatibilityEntry {
  marca: string;
  modelo: string;
  anosCompatibilidade: number[];
}

// Data for Locker product compatibility
export const lockerCompatibilityData: LockerCompatibilityEntry[] = [
  { marca: "Fiat", modelo: "Idea Locker Adventure", anosCompatibilidade: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020] },
  { marca: "Fiat", modelo: "Palio Weekend Locker Adventure", anosCompatibilidade: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020] },
  { marca: "Ford", modelo: "Fiesta Trail", anosCompatibilidade: [2006, 2007, 2008, 2009, 2010] },
];

// Format text to title case (first letter uppercase, rest lowercase)
export const formatTitleCase = (text: string): string => {
  if (!text) return "";
  
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Get unique brands for Locker products
export const getLockerUniqueBrands = (): string[] => {
  return Array.from(new Set(lockerCompatibilityData.map(entry => entry.marca))).sort();
};

// Get models for a specific brand for Locker products
export const getLockerModelsByBrand = (brand: string): string[] => {
  const models = lockerCompatibilityData
    .filter(entry => entry.marca === brand)
    .map(entry => entry.modelo);
  
  return Array.from(new Set(models)).sort();
};

// Get compatible years for a specific brand and model for Locker products
export const getLockerYearsByBrandAndModel = (brand: string, model: string): number[] => {
  const entry = lockerCompatibilityData.find(
    e => e.marca === brand && e.modelo === model
  );
  
  return entry ? [...entry.anosCompatibilidade].sort((a, b) => b - a) : [];
};

// Check if a vehicle is compatible with Locker products
export const checkLockerVehicleCompatibility = (
  brand: string,
  model: string,
  year: number
): boolean => {
  const matchingEntry = lockerCompatibilityData.find(
    entry => entry.marca === brand && entry.modelo === model
  );
  
  if (!matchingEntry) {
    return false;
  }
  
  return matchingEntry.anosCompatibilidade.includes(year);
};
