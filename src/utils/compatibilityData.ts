
export interface CompatibilityEntry {
  marca: string;
  modelo: string;
  anosCompatibilidade: number[];
}

// CSV data converted to structured format
export const compatibilityData: CompatibilityEntry[] = [
  { marca: "Chery", modelo: "Face", anosCompatibilidade: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015] },
  { marca: "Chery", modelo: "Tiggo", anosCompatibilidade: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016] },
  { marca: "Chery", modelo: "Tiggo 2", anosCompatibilidade: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016] },
  { marca: "Chery", modelo: "Tiggo 5x", anosCompatibilidade: [2019, 2020, 2021, 2022, 2023] },
  { marca: "Chevrolet", modelo: "Captiva", anosCompatibilidade: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017] },
  { marca: "Chevrolet", modelo: "Corsa Wagon", anosCompatibilidade: [2008, 2009, 2010, 2011, 2012] },
  { marca: "Chevrolet", modelo: "Nova Montana", anosCompatibilidade: [2023, 2024] },
  { marca: "Chevrolet", modelo: "Onix Active/Cross", anosCompatibilidade: [2015, 2016] },
  { marca: "Chevrolet", modelo: "S-10", anosCompatibilidade: [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023] },
  { marca: "Chevrolet", modelo: "Spin", anosCompatibilidade: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { marca: "Chevrolet", modelo: "Tracker", anosCompatibilidade: [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { marca: "Chevrolet", modelo: "Zafira", anosCompatibilidade: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012] },
  { marca: "Citroën", modelo: "Air Cross", anosCompatibilidade: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020] },
  { marca: "Citroën", modelo: "Cactus", anosCompatibilidade: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { marca: "Citroën", modelo: "C3", anosCompatibilidade: [2007, 2008, 2009, 2010, 2011, 2012, 2013] },
  { marca: "Citroën", modelo: "Grand C4 Picasso", anosCompatibilidade: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019] },
  { marca: "Fiat", modelo: "Doblo", anosCompatibilidade: [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021] },
  { marca: "Fiat", modelo: "Freemont", anosCompatibilidade: [2012, 2013, 2014, 2015, 2016, 2017] },
  { marca: "Fiat", modelo: "Idea", anosCompatibilidade: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016] },
  { marca: "Fiat", modelo: "Mobi Way", anosCompatibilidade: [2016, 2017, 2018, 2019, 2020, 2021] },
  { marca: "Fiat", modelo: "Palio", anosCompatibilidade: [1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020] },
  { marca: "Fiat", modelo: "Strada", anosCompatibilidade: [2020, 2021, 2022, 2023, 2024] },
  { marca: "Fiat", modelo: "Strada Cabine Simples", anosCompatibilidade: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025] },
  { marca: "Fiat", modelo: "Strada Locker", anosCompatibilidade: [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019] },
  { marca: "Fiat", modelo: "Toro", anosCompatibilidade: [2017, 2018, 2019, 2020, 2021, 2022, 2023] },
  { marca: "Ford", modelo: "Bronco", anosCompatibilidade: [2020, 2021, 2022, 2023, 2024] },
  { marca: "Ford", modelo: "Ecosport", anosCompatibilidade: [2010, 2011, 2012] },
  { marca: "Ford", modelo: "Escort Wagon", anosCompatibilidade: [1996, 1997, 1998] },
  { marca: "Ford", modelo: "Ka Freestyle", anosCompatibilidade: [2018, 2019, 2020, 2021] },
  { marca: "Ford", modelo: "Ranger", anosCompatibilidade: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { marca: "Honda", modelo: "Fit Twist", anosCompatibilidade: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021] },
  { marca: "Hyundai", modelo: "Grand Santa Fe", anosCompatibilidade: [2008, 2009, 2010] },
  { marca: "Hyundai", modelo: "HB20X", anosCompatibilidade: [2013, 2014, 2015, 2016, 2017, 2018, 2019] },
  { marca: "Hyundai", modelo: "i30 CW", anosCompatibilidade: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022] },
  { marca: "Hyundai", modelo: "IX35", anosCompatibilidade: [2010, 2011, 2012, 2013, 2014, 2015, 2016] },
  { marca: "Hyundai", modelo: "Santa Fe", anosCompatibilidade: [2008, 2009, 2010, 2011, 2012, 2013, 2014] },
  { marca: "Hyundai", modelo: "Tucson", anosCompatibilidade: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019] },
  { marca: "Hyundai", modelo: "Vera Cruz", anosCompatibilidade: [2007, 2008, 2009, 2010, 2011, 2012] },
  { marca: "Jac Motors", modelo: "J6", anosCompatibilidade: [2010, 2011, 2012, 2013, 2014, 2015, 2016] },
  { marca: "Jac Motors", modelo: "T6", anosCompatibilidade: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021] },
  { marca: "Jeep", modelo: "Cherokee", anosCompatibilidade: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017] },
  { marca: "Jeep", modelo: "Renegade", anosCompatibilidade: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { marca: "Kia", modelo: "Carens", anosCompatibilidade: [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013] },
  { marca: "Kia", modelo: "Soul", anosCompatibilidade: [2008, 2009, 2010, 2011, 2012, 2013, 2014] },
  { marca: "Kia", modelo: "Sorento", anosCompatibilidade: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { marca: "Kia", modelo: "Sportage", anosCompatibilidade: [2005, 2006, 2007, 2008, 2009, 2010] },
  { marca: "Kia", modelo: "Stonic", anosCompatibilidade: [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013] },
  { marca: "Mahindra", modelo: "SUV", anosCompatibilidade: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010] },
  { marca: "Mitsubishi", modelo: "Airtrek", anosCompatibilidade: [2004, 2005, 2006, 2007, 2008] },
  { marca: "Mitsubishi", modelo: "ASX Outdoor", anosCompatibilidade: [2016] },
  { marca: "Mitsubishi", modelo: "Outlander", anosCompatibilidade: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013] },
  { marca: "Mitsubishi", modelo: "Pajero Dakar", anosCompatibilidade: [2011, 2012, 2013, 2014, 2015, 2016, 2017] },
  { marca: "Mitsubishi", modelo: "Pajero Full", anosCompatibilidade: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019] },
  { marca: "Mitsubishi", modelo: "Pajero Sport", anosCompatibilidade: [2007, 2008, 2009, 2010, 2011] },
  { marca: "Mitsubishi", modelo: "Pajero TR4", anosCompatibilidade: [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010] },
  { marca: "Nissan", modelo: "Frontier", anosCompatibilidade: [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020] },
  { marca: "Nissan", modelo: "Frontier Attack", anosCompatibilidade: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { marca: "Nissan", modelo: "Grand Livina", anosCompatibilidade: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { marca: "Nissan", modelo: "Livina", anosCompatibilidade: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014] },
  { marca: "Nissan", modelo: "Livina X-Gear", anosCompatibilidade: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023] },
  { marca: "Peugeot", modelo: "2008", anosCompatibilidade: [2021, 2022, 2023, 2024] },
  { marca: "Peugeot", modelo: "206", anosCompatibilidade: [1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014] },
  { marca: "Peugeot", modelo: "207", anosCompatibilidade: [1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014] },
  { marca: "Renault", modelo: "Duster", anosCompatibilidade: [2011, 2012, 2013, 2014, 2015, 2023, 2024] },
  { marca: "Renault", modelo: "Megane", anosCompatibilidade: [2006, 2007, 2008, 2009, 2010, 2011] },
  { marca: "Renault", modelo: "Sandero Stepway G1", anosCompatibilidade: [2008, 2009, 2010, 2011, 2012, 2013, 2014] },
  { marca: "Renault", modelo: "Sandero Stepway G2", anosCompatibilidade: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { marca: "Subaru", modelo: "Forester", anosCompatibilidade: [1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021] },
  { marca: "Suzuki", modelo: "Jimny Sport", anosCompatibilidade: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020] },
  { marca: "Suzuki", modelo: "SX4", anosCompatibilidade: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021] },
  { marca: "Toyota", modelo: "Etios Cross", anosCompatibilidade: [2014, 2015, 2016, 2017, 2018] },
  { marca: "Toyota", modelo: "Fielder", anosCompatibilidade: [2004, 2005, 2006, 2007, 2008] },
  { marca: "Toyota", modelo: "RAV4", anosCompatibilidade: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018] },
  { marca: "Toyota", modelo: "SW4", anosCompatibilidade: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016] },
  { marca: "Troller", modelo: "Troller", anosCompatibilidade: [2006, 2007] },
  { marca: "Volkswagen", modelo: "Amarok", anosCompatibilidade: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022] },
  { marca: "Volkswagen", modelo: "Golf Variant", anosCompatibilidade: [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019] },
  { marca: "Volkswagen", modelo: "Jetta Perua S/T", anosCompatibilidade: [2008, 2009, 2010, 2011, 2012, 2013, 2014] },
  { marca: "Volkswagen", modelo: "Nivus", anosCompatibilidade: [2021, 2022, 2023, 2024] },
  { marca: "Volkswagen", modelo: "Saveiro Cross", anosCompatibilidade: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025] },
  { marca: "Volkswagen", modelo: "Space Fox/Cross Fox", anosCompatibilidade: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021] },
  { marca: "Volkswagen", modelo: "Taos", anosCompatibilidade: [2021, 2022, 2023, 2024] },
  { marca: "Volkswagen", modelo: "T-Cross", anosCompatibilidade: [2019, 2020, 2021, 2022, 2023] },
  { marca: "Volkswagen", modelo: "Tiguan", anosCompatibilidade: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { marca: "Volkswagen", modelo: "Touareg G1", anosCompatibilidade: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010] },
  { marca: "Volkswagen", modelo: "Touareg G2", anosCompatibilidade: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018] },
  { marca: "Volkswagen", modelo: "Up Cross", anosCompatibilidade: [2015, 2016, 2017, 2018, 2019] },
];

// Get unique car brands
export const getUniqueBrands = (): string[] => {
  return Array.from(new Set(compatibilityData.map(entry => entry.marca))).sort();
};

// Get models for a specific brand
export const getModelsByBrand = (brand: string): string[] => {
  const models = compatibilityData
    .filter(entry => entry.marca === brand)
    .map(entry => entry.modelo);
  
  return Array.from(new Set(models)).sort();
};

// Check if a vehicle is compatible
export const checkVehicleCompatibility = (
  brand: string,
  model: string,
  year: number
): boolean => {
  // Only apply this logic for Travessa Smart
  const matchingEntries = compatibilityData.filter(
    entry => entry.marca === brand && entry.modelo === model
  );
  
  if (matchingEntries.length === 0) {
    return false;
  }
  
  // Check if the year is in any of the matching entries
  return matchingEntries.some(entry => 
    entry.anosCompatibilidade.includes(year)
  );
};
