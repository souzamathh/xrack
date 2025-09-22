export interface UnifiedCompatibilityEntry {
  montadora: string;
  modelo: string;
  anos: number[];
  modeloTravessa: string;
}

// Função para converter string de anos em array de números
const parseYears = (yearString: string): number[] => {
  return yearString
    .split(',')
    .map(year => parseInt(year.trim()))
    .filter(year => !isNaN(year) && year > 1980 && year <= 2030)
    .sort((a, b) => a - b);
};

// Dados completos de compatibilidade baseados no Excel
export const unifiedCompatibilityData: UnifiedCompatibilityEntry[] = [
  // Chery
  { montadora: "Chery", modelo: "Face", anos: parseYears("2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015"), modeloTravessa: "Smart" },
  { montadora: "Chery", modelo: "Face", anos: parseYears("2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015"), modeloTravessa: "Slim" },
  { montadora: "Chery", modelo: "Tiggo", anos: parseYears("2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015"), modeloTravessa: "Smart" },
  { montadora: "Chery", modelo: "Tiggo", anos: parseYears("2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015"), modeloTravessa: "Slim" },
  { montadora: "Chery", modelo: "Tiggo 2", anos: parseYears("2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015"), modeloTravessa: "Smart" },
  { montadora: "Chery", modelo: "Tiggo 2", anos: parseYears("2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015"), modeloTravessa: "Slim" },
  { montadora: "Chery", modelo: "Tiggo 5X Pro", anos: parseYears("2019, 2020, 2021, 2022, 2023"), modeloTravessa: "Smart" },
  { montadora: "Chery", modelo: "Tiggo 5X Pro", anos: parseYears("2019, 2020, 2021, 2022, 2023"), modeloTravessa: "Slim" },

  // Chevrolet
  { montadora: "Chevrolet", modelo: "Blazer", anos: parseYears("1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023"), modeloTravessa: "Smart" },
  { montadora: "Chevrolet", modelo: "Blazer", anos: parseYears("1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023"), modeloTravessa: "Slim" },
  { montadora: "Chevrolet", modelo: "Captiva", anos: parseYears("2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017"), modeloTravessa: "Smart" },
  { montadora: "Chevrolet", modelo: "Captiva", anos: parseYears("2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017"), modeloTravessa: "Slim" },
  { montadora: "Chevrolet", modelo: "Corsa Wagon", anos: parseYears("2008, 2012"), modeloTravessa: "Smart" },
  { montadora: "Chevrolet", modelo: "Corsa Wagon", anos: parseYears("2008, 2012"), modeloTravessa: "Slim" },
  { montadora: "Chevrolet", modelo: "Equinox", anos: parseYears("2018, 2019, 2020, 2021, 2022, 2023"), modeloTravessa: "Style" },
  { montadora: "Chevrolet", modelo: "Montana", anos: parseYears("2023, 2024, 2025"), modeloTravessa: "Smart" },
  { montadora: "Chevrolet", modelo: "Montana", anos: parseYears("2023, 2024, 2025"), modeloTravessa: "Slim" },
  { montadora: "Chevrolet", modelo: "Onix Active", anos: parseYears("2015, 2016"), modeloTravessa: "Smart" },
  { montadora: "Chevrolet", modelo: "Onix Active", anos: parseYears("2015, 2016"), modeloTravessa: "Slim" },
  { montadora: "Chevrolet", modelo: "Onix Cross", anos: parseYears("2015, 2016"), modeloTravessa: "Smart" },
  { montadora: "Chevrolet", modelo: "Onix Cross", anos: parseYears("2015, 2016"), modeloTravessa: "Slim" },
  { montadora: "Chevrolet", modelo: "S10", anos: parseYears("1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Smart" },
  { montadora: "Chevrolet", modelo: "S10", anos: parseYears("1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Slim" },
  { montadora: "Chevrolet", modelo: "Spin", anos: parseYears("2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Smart" },
  { montadora: "Chevrolet", modelo: "Spin", anos: parseYears("2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Style" },
  { montadora: "Chevrolet", modelo: "Spin", anos: parseYears("2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Slim" },
  { montadora: "Chevrolet", modelo: "Tracker", anos: parseYears("1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Smart" },
  { montadora: "Chevrolet", modelo: "Tracker", anos: parseYears("2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Style" },
  { montadora: "Chevrolet", modelo: "Tracker", anos: parseYears("1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Slim" },
  { montadora: "Chevrolet", modelo: "Trailblazer", anos: parseYears("2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023"), modeloTravessa: "Style" },
  { montadora: "Chevrolet", modelo: "Zafira", anos: parseYears("2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012"), modeloTravessa: "Smart" },
  { montadora: "Chevrolet", modelo: "Zafira", anos: parseYears("2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012"), modeloTravessa: "Slim" },

  // Citroen
  { montadora: "Citroen", modelo: "Air Cross", anos: parseYears("2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020"), modeloTravessa: "Smart" },
  { montadora: "Citroen", modelo: "Air Cross", anos: parseYears("2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020"), modeloTravessa: "Slim" },
  { montadora: "Citroen", modelo: "Cactus", anos: parseYears("2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Smart" },
  { montadora: "Citroen", modelo: "Cactus", anos: parseYears("2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Slim" },
  { montadora: "Citroen", modelo: "C3", anos: parseYears("2007, 2008, 2009, 2010, 2011, 2012, 2013"), modeloTravessa: "Smart" },
  { montadora: "Citroen", modelo: "C3", anos: parseYears("2007, 2008, 2009, 2010, 2011, 2012, 2013"), modeloTravessa: "Slim" },
  { montadora: "Citroen", modelo: "Gran C4 Picasso", anos: parseYears("2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018"), modeloTravessa: "Smart" },
  { montadora: "Citroen", modelo: "Gran C4 Picasso", anos: parseYears("2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018"), modeloTravessa: "Slim" },

  // Fiat
  { montadora: "Fiat", modelo: "Argo Trekking", anos: parseYears("2018, 2019, 2020, 2021, 2022, 2023"), modeloTravessa: "Style" },
  { montadora: "Fiat", modelo: "Doblo", anos: parseYears("2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021"), modeloTravessa: "Smart" },
  { montadora: "Fiat", modelo: "Doblo", anos: parseYears("2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021"), modeloTravessa: "Slim" },
  { montadora: "Fiat", modelo: "Freemont", anos: parseYears("2012, 2013, 2014, 2015, 2016, 2017"), modeloTravessa: "Smart" },
  { montadora: "Fiat", modelo: "Freemont", anos: parseYears("2012, 2013, 2014, 2015, 2016, 2017"), modeloTravessa: "Slim" },
  { montadora: "Fiat", modelo: "Idea", anos: parseYears("2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016"), modeloTravessa: "Smart" },
  { montadora: "Fiat", modelo: "Idea", anos: parseYears("2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016"), modeloTravessa: "Slim" },
  { montadora: "Fiat", modelo: "Idea Locker", anos: parseYears("2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020"), modeloTravessa: "Locker" },
  { montadora: "Fiat", modelo: "Mobi Way", anos: parseYears("2016, 2017, 2018, 2019, 2020, 2021"), modeloTravessa: "Smart" },
  { montadora: "Fiat", modelo: "Mobi Way", anos: parseYears("2016, 2017, 2018, 2019, 2020, 2021"), modeloTravessa: "Slim" },
  { montadora: "Fiat", modelo: "Palio", anos: parseYears("1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020"), modeloTravessa: "Smart" },
  { montadora: "Fiat", modelo: "Palio", anos: parseYears("1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020"), modeloTravessa: "Slim" },
  { montadora: "Fiat", modelo: "Palio Locker", anos: parseYears("2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020"), modeloTravessa: "Locker" },
  { montadora: "Fiat", modelo: "Pulse", anos: parseYears("2020, 2021, 2022, 2023"), modeloTravessa: "Style" },
  { montadora: "Fiat", modelo: "Strada", anos: parseYears("2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Smart" },
  { montadora: "Fiat", modelo: "Strada", anos: parseYears("2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Slim" },
  { montadora: "Fiat", modelo: "Strada Cabine Simples", anos: parseYears("2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Smart" },
  { montadora: "Fiat", modelo: "Strada Cabine Simples", anos: parseYears("2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Slim" },
  { montadora: "Fiat", modelo: "Strada Locker", anos: parseYears("1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019"), modeloTravessa: "Smart" },
  { montadora: "Fiat", modelo: "Strada Locker", anos: parseYears("1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019"), modeloTravessa: "Slim" },
  { montadora: "Fiat", modelo: "Toro", anos: parseYears("2017, 2018, 2019, 2020, 2021, 2022, 2023"), modeloTravessa: "Smart" },
  { montadora: "Fiat", modelo: "Toro", anos: parseYears("2017, 2018, 2019, 2020, 2021, 2022, 2023"), modeloTravessa: "Slim" },
  { montadora: "Fiat", modelo: "Uno Way", anos: parseYears("2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021"), modeloTravessa: "Way" },

  // Ford
  { montadora: "Ford", modelo: "Bronco", anos: parseYears("2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Smart" },
  { montadora: "Ford", modelo: "Bronco", anos: parseYears("2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Slim" },
  { montadora: "Ford", modelo: "Ecosport", anos: parseYears("2010, 2012"), modeloTravessa: "Smart" },
  { montadora: "Ford", modelo: "Ecosport", anos: parseYears("2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021"), modeloTravessa: "Style" },
  { montadora: "Ford", modelo: "Ecosport", anos: parseYears("2010, 2012"), modeloTravessa: "Slim" },
  { montadora: "Ford", modelo: "Escort Wagon", anos: parseYears("1996, 1997, 1998"), modeloTravessa: "Smart" },
  { montadora: "Ford", modelo: "Escort Wagon", anos: parseYears("1996, 1997, 1998"), modeloTravessa: "Slim" },
  { montadora: "Ford", modelo: "Ka Freestyle", anos: parseYears("2018, 2019, 2020, 2021"), modeloTravessa: "Smart" },
  { montadora: "Ford", modelo: "Ka Freestyle", anos: parseYears("2018, 2019, 2020, 2021"), modeloTravessa: "Slim" },
  { montadora: "Ford", modelo: "Ranger", anos: parseYears("2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Smart" },
  { montadora: "Ford", modelo: "Ranger", anos: parseYears("2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Slim" },

  // GWM
  { montadora: "GWM", modelo: "Tank 300", anos: parseYears("2025"), modeloTravessa: "Smart" },
  { montadora: "GWM", modelo: "Tank 300", anos: parseYears("2025"), modeloTravessa: "Slim" },

  // Honda
  { montadora: "Honda", modelo: "CR-V", anos: parseYears("2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021"), modeloTravessa: "Style" },
  { montadora: "Honda", modelo: "Fit Twist", anos: parseYears("2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021"), modeloTravessa: "Smart" },
  { montadora: "Honda", modelo: "Fit Twist", anos: parseYears("2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021"), modeloTravessa: "Slim" },
  { montadora: "Honda", modelo: "WR-V", anos: parseYears("2018, 2019, 2020, 2021, 2022, 2023"), modeloTravessa: "Style" },

  // Hyundai
  { montadora: "Hyundai", modelo: "Gran Santa Fe", anos: parseYears("2008, 2009, 2010"), modeloTravessa: "Smart" },
  { montadora: "Hyundai", modelo: "Gran Santa Fe", anos: parseYears("2008, 2009, 2010"), modeloTravessa: "Slim" },
  { montadora: "Hyundai", modelo: "HB20X", anos: parseYears("2013, 2014, 2015, 2016, 2017, 2018, 2019"), modeloTravessa: "Smart" },
  { montadora: "Hyundai", modelo: "HB20X", anos: parseYears("2013, 2014, 2015, 2016, 2017, 2018, 2019"), modeloTravessa: "Slim" },
  { montadora: "Hyundai", modelo: "I30 CW", anos: parseYears("2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022"), modeloTravessa: "Smart" },
  { montadora: "Hyundai", modelo: "I30 CW", anos: parseYears("2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022"), modeloTravessa: "Slim" },
  { montadora: "Hyundai", modelo: "IX-35", anos: parseYears("2010, 2011, 2012, 2013, 2014, 2015, 2016"), modeloTravessa: "Smart" },
  { montadora: "Hyundai", modelo: "IX-35", anos: parseYears("2010, 2011, 2012, 2013, 2014, 2015, 2016"), modeloTravessa: "Slim" },
  { montadora: "Hyundai", modelo: "Santa Fe", anos: parseYears("2008, 2009, 2010, 2011, 2012, 2013, 2014"), modeloTravessa: "Smart" },
  { montadora: "Hyundai", modelo: "Santa Fe", anos: parseYears("2008, 2009, 2010, 2011, 2012, 2013, 2014"), modeloTravessa: "Slim" },
  { montadora: "Hyundai", modelo: "Tucson", anos: parseYears("2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019"), modeloTravessa: "Smart" },
  { montadora: "Hyundai", modelo: "Tucson", anos: parseYears("2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019"), modeloTravessa: "Slim" },
  { montadora: "Hyundai", modelo: "Vera Cruz", anos: parseYears("2007, 2008, 2009, 2010, 2011, 2012"), modeloTravessa: "Smart" },
  { montadora: "Hyundai", modelo: "Vera Cruz", anos: parseYears("2007, 2008, 2009, 2010, 2011, 2012"), modeloTravessa: "Slim" },

  // Jac Motors
  { montadora: "Jac Motors", modelo: "J6", anos: parseYears("2010, 2011, 2012, 2013, 2014, 2015, 2016"), modeloTravessa: "Smart" },
  { montadora: "Jac Motors", modelo: "J6", anos: parseYears("2010, 2011, 2012, 2013, 2014, 2015, 2016"), modeloTravessa: "Slim" },
  { montadora: "Jac Motors", modelo: "T6", anos: parseYears("2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021"), modeloTravessa: "Smart" },
  { montadora: "Jac Motors", modelo: "T6", anos: parseYears("2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021"), modeloTravessa: "Slim" },

  // Jeep
  { montadora: "Jeep", modelo: "Cherokee", anos: parseYears("2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017"), modeloTravessa: "Smart" },
  { montadora: "Jeep", modelo: "Cherokee", anos: parseYears("2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017"), modeloTravessa: "Slim" },
  { montadora: "Jeep", modelo: "Commander", anos: parseYears("2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Style" },
  { montadora: "Jeep", modelo: "Compass", anos: parseYears("2017, 2018, 2019, 2020, 2021, 2022, 2023"), modeloTravessa: "Style" },
  { montadora: "Jeep", modelo: "Renegade", anos: parseYears("2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Smart" },
  { montadora: "Jeep", modelo: "Renegade", anos: parseYears("2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Slim" },

  // Kia
  { montadora: "Kia", modelo: "Carens", anos: parseYears("1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013"), modeloTravessa: "Smart" },
  { montadora: "Kia", modelo: "Carens", anos: parseYears("1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013"), modeloTravessa: "Slim" },
  { montadora: "Kia", modelo: "Sorento", anos: parseYears("2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Smart" },
  { montadora: "Kia", modelo: "Sorento", anos: parseYears("2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Slim" },
  { montadora: "Kia", modelo: "Soul", anos: parseYears("2008, 2009, 2010, 2011, 2012, 2013, 2014"), modeloTravessa: "Smart" },
  { montadora: "Kia", modelo: "Soul", anos: parseYears("2008, 2009, 2010, 2011, 2012, 2013, 2014"), modeloTravessa: "Slim" },
  { montadora: "Kia", modelo: "Sportage", anos: parseYears("2005, 2006, 2007, 2008, 2009, 2010"), modeloTravessa: "Smart" },
  { montadora: "Kia", modelo: "Sportage", anos: parseYears("2005, 2006, 2007, 2008, 2009, 2010"), modeloTravessa: "Slim" },
  { montadora: "Kia", modelo: "Stonic", anos: parseYears("1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013"), modeloTravessa: "Smart" },
  { montadora: "Kia", modelo: "Stonic", anos: parseYears("1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013"), modeloTravessa: "Slim" },

  // Mahindra
  { montadora: "Mahindra", modelo: "SUV", anos: parseYears("2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010"), modeloTravessa: "Smart" },
  { montadora: "Mahindra", modelo: "SUV", anos: parseYears("2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010"), modeloTravessa: "Slim" },

  // Mitsubishi
  { montadora: "Mitsubishi", modelo: "Airtrek", anos: parseYears("2004, 2005, 2006, 2007, 2008"), modeloTravessa: "Tubular" },
  { montadora: "Mitsubishi", modelo: "ASX Outdoor", anos: parseYears("2016"), modeloTravessa: "Smart" },
  { montadora: "Mitsubishi", modelo: "ASX Outdoor", anos: parseYears("2016"), modeloTravessa: "Slim" },
  { montadora: "Mitsubishi", modelo: "L200 Savana", anos: parseYears("2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011"), modeloTravessa: "Smart" },
  { montadora: "Mitsubishi", modelo: "L200 Savana", anos: parseYears("2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011"), modeloTravessa: "Slim" },
  { montadora: "Mitsubishi", modelo: "Outlander", anos: parseYears("2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013"), modeloTravessa: "Smart" },
  { montadora: "Mitsubishi", modelo: "Outlander", anos: parseYears("2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013"), modeloTravessa: "Slim" },
  { montadora: "Mitsubishi", modelo: "Pajero Dakar", anos: parseYears("2011, 2012, 2013, 2014, 2015, 2016, 2017"), modeloTravessa: "Smart" },
  { montadora: "Mitsubishi", modelo: "Pajero Dakar", anos: parseYears("2011, 2012, 2013, 2014, 2015, 2016, 2017"), modeloTravessa: "Slim" },
  { montadora: "Mitsubishi", modelo: "Pajero Full", anos: parseYears("2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019"), modeloTravessa: "Smart" },
  { montadora: "Mitsubishi", modelo: "Pajero Full", anos: parseYears("2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019"), modeloTravessa: "Slim" },
  { montadora: "Mitsubishi", modelo: "Pajero Sport", anos: parseYears("2007, 2008, 2009, 2010, 2011"), modeloTravessa: "Tubular" },
  { montadora: "Mitsubishi", modelo: "Pajero TR4", anos: parseYears("2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010"), modeloTravessa: "Tubular" },

  // Nissan
  { montadora: "Nissan", modelo: "Frontier", anos: parseYears("2017, 2018, 2019, 2020"), modeloTravessa: "Smart" },
  { montadora: "Nissan", modelo: "Frontier", anos: parseYears("2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016"), modeloTravessa: "Tubular" },
  { montadora: "Nissan", modelo: "Frontier", anos: parseYears("2017, 2018, 2019, 2020"), modeloTravessa: "Slim" },
  { montadora: "Nissan", modelo: "Frontier Attack", anos: parseYears("2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Smart" },
  { montadora: "Nissan", modelo: "Frontier Attack", anos: parseYears("2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Slim" },
  { montadora: "Nissan", modelo: "Grand Livina", anos: parseYears("2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Smart" },
  { montadora: "Nissan", modelo: "Grand Livina", anos: parseYears("2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Slim" },
  { montadora: "Nissan", modelo: "Kicks", anos: parseYears("2018, 2019, 2020, 2021, 2022, 2023"), modeloTravessa: "Style" },
  { montadora: "Nissan", modelo: "Livina", anos: parseYears("2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014"), modeloTravessa: "Smart" },
  { montadora: "Nissan", modelo: "Livina", anos: parseYears("2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014"), modeloTravessa: "Slim" },
  { montadora: "Nissan", modelo: "Livina X-Gear", anos: parseYears("2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023"), modeloTravessa: "Smart" },
  { montadora: "Nissan", modelo: "Livina X-Gear", anos: parseYears("2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023"), modeloTravessa: "Slim" },

  // Peugeot
  { montadora: "Peugeot", modelo: "2008", anos: parseYears("2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Smart" },
  { montadora: "Peugeot", modelo: "2008", anos: parseYears("2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Slim" },
  { montadora: "Peugeot", modelo: "206", anos: parseYears("1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014"), modeloTravessa: "Smart" },
  { montadora: "Peugeot", modelo: "206", anos: parseYears("1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014"), modeloTravessa: "Slim" },
  { montadora: "Peugeot", modelo: "207", anos: parseYears("1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014"), modeloTravessa: "Smart" },
  { montadora: "Peugeot", modelo: "207", anos: parseYears("1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014"), modeloTravessa: "Slim" },

  // Renault
  { montadora: "Renault", modelo: "Duster", anos: parseYears("2011, 2012, 2013, 2014, 2015, 2023, 2024"), modeloTravessa: "Smart" },
  { montadora: "Renault", modelo: "Duster", anos: parseYears("2011, 2012, 2013, 2014, 2015, 2023, 2024"), modeloTravessa: "Slim" },
  { montadora: "Renault", modelo: "Kardian", anos: parseYears("2023, 2024, 2025"), modeloTravessa: "Smart" },
  { montadora: "Renault", modelo: "Kardian", anos: parseYears("2023, 2024, 2025"), modeloTravessa: "Slim" },
  { montadora: "Renault", modelo: "Megane", anos: parseYears("2006, 2007, 2008, 2009, 2010, 2011"), modeloTravessa: "Smart" },
  { montadora: "Renault", modelo: "Megane", anos: parseYears("2006, 2007, 2008, 2009, 2010, 2011"), modeloTravessa: "Slim" },
  { montadora: "Renault", modelo: "Sandero Stepway G1", anos: parseYears("2008, 2009, 2010, 2011, 2012, 2013, 2014"), modeloTravessa: "Smart" },
  { montadora: "Renault", modelo: "Sandero Stepway G1", anos: parseYears("2008, 2009, 2010, 2011, 2012, 2013, 2014"), modeloTravessa: "Slim" },
  { montadora: "Renault", modelo: "Sandero Stepway G2", anos: parseYears("2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Smart" },
  { montadora: "Renault", modelo: "Sandero Stepway G2", anos: parseYears("2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Slim" },

  // Subaru
  { montadora: "Subaru", modelo: "Forester", anos: parseYears("1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021"), modeloTravessa: "Smart" },
  { montadora: "Subaru", modelo: "Forester", anos: parseYears("1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021"), modeloTravessa: "Slim" },

  // Suzuki
  { montadora: "Suzuki", modelo: "SX4", anos: parseYears("2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021"), modeloTravessa: "Smart" },
  { montadora: "Suzuki", modelo: "SX4", anos: parseYears("2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021"), modeloTravessa: "Slim" },
  { montadora: "Suzuki", modelo: "Jimny Sport", anos: parseYears("2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020"), modeloTravessa: "Smart" },
  { montadora: "Suzuki", modelo: "Jimny Sport", anos: parseYears("2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020"), modeloTravessa: "Slim" },

  // Toyota
  { montadora: "Toyota", modelo: "Etios Cross", anos: parseYears("2014, 2015, 2016, 2017, 2018"), modeloTravessa: "Smart" },
  { montadora: "Toyota", modelo: "Etios Cross", anos: parseYears("2014, 2015, 2016, 2017, 2018"), modeloTravessa: "Slim" },
  { montadora: "Toyota", modelo: "Fielder", anos: parseYears("2004, 2005, 2006, 2007, 2008"), modeloTravessa: "Smart" },
  { montadora: "Toyota", modelo: "Fielder", anos: parseYears("2004, 2005, 2006, 2007, 2008"), modeloTravessa: "Slim" },
  { montadora: "Toyota", modelo: "RAV4", anos: parseYears("2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018"), modeloTravessa: "Smart" },
  { montadora: "Toyota", modelo: "RAV4", anos: parseYears("2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018"), modeloTravessa: "Slim" },
  { montadora: "Toyota", modelo: "SW4", anos: parseYears("2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016"), modeloTravessa: "Smart" },
  { montadora: "Toyota", modelo: "SW4", anos: parseYears("2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016"), modeloTravessa: "Slim" },

  // Troller
  { montadora: "Troller", modelo: "Troller", anos: parseYears("2006, 2007"), modeloTravessa: "Smart" },
  { montadora: "Troller", modelo: "Troller", anos: parseYears("2006, 2007"), modeloTravessa: "Slim" },

  // Volkswagen
  { montadora: "Volkswagen", modelo: "Amarok", anos: parseYears("2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022"), modeloTravessa: "Smart" },
  { montadora: "Volkswagen", modelo: "Amarok", anos: parseYears("2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022"), modeloTravessa: "Slim" },
  { montadora: "Volkswagen", modelo: "Cross Fox", anos: parseYears("2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021"), modeloTravessa: "Smart" },
  { montadora: "Volkswagen", modelo: "Cross Fox", anos: parseYears("2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021"), modeloTravessa: "Slim" },
  { montadora: "Volkswagen", modelo: "Golf Variant", anos: parseYears("1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019"), modeloTravessa: "Smart" },
  { montadora: "Volkswagen", modelo: "Golf Variant", anos: parseYears("1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019"), modeloTravessa: "Slim" },
  { montadora: "Volkswagen", modelo: "Jetta Perua S/T", anos: parseYears("2008, 2009, 2010, 2011, 2012, 2013, 2014"), modeloTravessa: "Smart" },
  { montadora: "Volkswagen", modelo: "Jetta Perua S/T", anos: parseYears("2008, 2009, 2010, 2011, 2012, 2013, 2014"), modeloTravessa: "Slim" },
  { montadora: "Volkswagen", modelo: "Nivus", anos: parseYears("2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Smart" },
  { montadora: "Volkswagen", modelo: "Nivus", anos: parseYears("2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Slim" },
  { montadora: "Volkswagen", modelo: "Parati G1", anos: parseYears("1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995"), modeloTravessa: "Smart" },
  { montadora: "Volkswagen", modelo: "Parati G1", anos: parseYears("1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995"), modeloTravessa: "Slim" },
  { montadora: "Volkswagen", modelo: "Parati G2", anos: parseYears("1996, 1997, 1998, 1999"), modeloTravessa: "Smart" },
  { montadora: "Volkswagen", modelo: "Parati G2", anos: parseYears("1996, 1997, 1998, 1999"), modeloTravessa: "Slim" },
  { montadora: "Volkswagen", modelo: "Saveiro Cross", anos: parseYears("2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Smart" },
  { montadora: "Volkswagen", modelo: "Saveiro Cross", anos: parseYears("2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Slim" },
  { montadora: "Volkswagen", modelo: "Space Fox", anos: parseYears("2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021"), modeloTravessa: "Smart" },
  { montadora: "Volkswagen", modelo: "Space Fox", anos: parseYears("2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021"), modeloTravessa: "Slim" },
  { montadora: "Volkswagen", modelo: "Taos", anos: parseYears("2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Smart" },
  { montadora: "Volkswagen", modelo: "Taos", anos: parseYears("2021, 2022, 2023, 2024, 2025"), modeloTravessa: "Slim" },
  { montadora: "Volkswagen", modelo: "T-Cross", anos: parseYears("2019, 2020, 2021, 2022, 2023"), modeloTravessa: "Smart" },
  { montadora: "Volkswagen", modelo: "T-Cross", anos: parseYears("2019, 2020, 2021, 2022, 2023"), modeloTravessa: "Slim" },
  { montadora: "Volkswagen", modelo: "Tiguan", anos: parseYears("2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020"), modeloTravessa: "Smart" },
  { montadora: "Volkswagen", modelo: "Tiguan", anos: parseYears("2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020"), modeloTravessa: "Slim" },
  { montadora: "Volkswagen", modelo: "Touareg G1", anos: parseYears("2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010"), modeloTravessa: "Smart" },
  { montadora: "Volkswagen", modelo: "Touareg G1", anos: parseYears("2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010"), modeloTravessa: "Slim" },
  { montadora: "Volkswagen", modelo: "Touareg G2", anos: parseYears("2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018"), modeloTravessa: "Smart" },
  { montadora: "Volkswagen", modelo: "Touareg G2", anos: parseYears("2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018"), modeloTravessa: "Slim" },
  { montadora: "Volkswagen", modelo: "Up Cross", anos: parseYears("2015, 2016, 2017, 2018, 2019"), modeloTravessa: "Smart" },
  { montadora: "Volkswagen", modelo: "Up Cross", anos: parseYears("2015, 2016, 2017, 2018, 2019"), modeloTravessa: "Slim" },
];

// Função para formatar texto em title case
export const formatTitleCase = (text: string): string => {
  if (!text) return "";
  
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Obter marcas únicas
export const getUnifiedUniqueBrands = (): string[] => {
  return Array.from(new Set(unifiedCompatibilityData.map(entry => entry.montadora))).sort();
};

// Obter modelos por marca
export const getUnifiedModelsByBrand = (brand: string): string[] => {
  const models = unifiedCompatibilityData
    .filter(entry => entry.montadora === brand)
    .map(entry => entry.modelo);
  
  return Array.from(new Set(models)).sort();
};

// Obter anos por marca e modelo
export const getUnifiedYearsByBrandAndModel = (brand: string, model: string): number[] => {
  const entries = unifiedCompatibilityData.filter(
    entry => entry.montadora === brand && entry.modelo === model
  );
  
  const allYears = entries.reduce<number[]>((acc, entry) => {
    return acc.concat(entry.anos);
  }, []);
  
  return Array.from(new Set(allYears)).sort((a, b) => b - a);
};

// Verificar compatibilidade e retornar produtos compatíveis
export const checkUnifiedVehicleCompatibility = (
  brand: string,
  model: string,
  year: number
): string[] => {
  const compatibleProducts = unifiedCompatibilityData
    .filter(entry => 
      entry.montadora === brand && 
      entry.modelo === model && 
      entry.anos.includes(year)
    )
    .map(entry => entry.modeloTravessa.toLowerCase());
  
  return Array.from(new Set(compatibleProducts));
};