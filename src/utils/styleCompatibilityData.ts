
export interface StyleCompatibilityEntry {
  marca: string;
  modelo: string;
  anosCompatibilidade: number[];
}

// Data converted from the provided table
export const styleCompatibilityData: StyleCompatibilityEntry[] = [
  { marca: "FIAT", modelo: "ARGO TREKKING", anosCompatibilidade: [2019, 2020, 2021, 2022] },
  { marca: "FIAT", modelo: "PULSE", anosCompatibilidade: [2022, 2023, 2024] },
  { marca: "FORD", modelo: "ECOSPORT", anosCompatibilidade: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022] },
  { marca: "GM", modelo: "EQUINOX", anosCompatibilidade: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { marca: "GM", modelo: "SPIN (C/ FURO LONGARINA)", anosCompatibilidade: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025] },
  { marca: "GM", modelo: "TRACKER (C/ FURO LONGARINA)", anosCompatibilidade: [2020, 2021, 2022, 2023, 2024, 2025] },
  { marca: "GM", modelo: "TRAILBLAZER", anosCompatibilidade: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023] },
  { marca: "HONDA", modelo: "CR-V", anosCompatibilidade: [2012, 2013, 2014, 2015, 2016, 2017, 2018] },
  { marca: "HONDA", modelo: "WR-V", anosCompatibilidade: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { marca: "JEEP", modelo: "COMPASS", anosCompatibilidade: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { marca: "JEEP", modelo: "COMMANDER", anosCompatibilidade: [2021, 2022, 2023] },
  { marca: "NISSAN", modelo: "KICKS", anosCompatibilidade: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
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

// Get unique brands for Style products
export const getStyleUniqueBrands = (): string[] => {
  return Array.from(new Set(styleCompatibilityData.map(entry => entry.marca))).sort();
};

// Get models for a specific brand for Style products
export const getStyleModelsByBrand = (brand: string): string[] => {
  const models = styleCompatibilityData
    .filter(entry => entry.marca === brand)
    .map(entry => entry.modelo);
  
  return Array.from(new Set(models)).sort();
};

// Get compatible years for a specific brand and model for Style products
export const getStyleYearsByBrandAndModel = (brand: string, model: string): number[] => {
  const entry = styleCompatibilityData.find(
    e => e.marca === brand && e.modelo === model
  );
  
  return entry ? [...entry.anosCompatibilidade].sort((a, b) => b - a) : [];
};

// Check if a vehicle is compatible with Style products
export const checkStyleVehicleCompatibility = (
  brand: string,
  model: string,
  year: number
): boolean => {
  const matchingEntry = styleCompatibilityData.find(
    entry => entry.marca === brand && entry.modelo === model
  );
  
  if (!matchingEntry) {
    return false;
  }
  
  return matchingEntry.anosCompatibilidade.includes(year);
};
