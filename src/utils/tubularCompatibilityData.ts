
export interface TubularCompatibilityEntry {
  marca: string;
  modelo: string;
  anosCompatibilidade: number[];
}

// Data for Tubular product compatibility
export const tubularCompatibilityData: TubularCompatibilityEntry[] = [
  { marca: "Mitsubishi", modelo: "Airtrek", anosCompatibilidade: [2004, 2005, 2006, 2007, 2008] },
  { marca: "Mitsubishi", modelo: "Pajero Sport", anosCompatibilidade: [2007, 2008, 2009, 2010, 2011] },
  { marca: "Mitsubishi", modelo: "Pajero TR4", anosCompatibilidade: [2003, 2004, 2005, 2006, 2007, 2008, 2009] },
  { marca: "Nissan", modelo: "Frontier", anosCompatibilidade: [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016] },
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

// Get unique brands for Tubular products
export const getTubularUniqueBrands = (): string[] => {
  return Array.from(new Set(tubularCompatibilityData.map(entry => entry.marca))).sort();
};

// Get models for a specific brand for Tubular products
export const getTubularModelsByBrand = (brand: string): string[] => {
  const models = tubularCompatibilityData
    .filter(entry => entry.marca === brand)
    .map(entry => entry.modelo);
  
  return Array.from(new Set(models)).sort();
};

// Get compatible years for a specific brand and model for Tubular products
export const getTubularYearsByBrandAndModel = (brand: string, model: string): number[] => {
  const entry = tubularCompatibilityData.find(
    e => e.marca === brand && e.modelo === model
  );
  
  return entry ? [...entry.anosCompatibilidade].sort((a, b) => b - a) : [];
};

// Check if a vehicle is compatible with Tubular products
export const checkTubularVehicleCompatibility = (
  brand: string,
  model: string,
  year: number
): boolean => {
  const matchingEntry = tubularCompatibilityData.find(
    entry => entry.marca === brand && entry.modelo === model
  );
  
  if (!matchingEntry) {
    return false;
  }
  
  return matchingEntry.anosCompatibilidade.includes(year);
};
