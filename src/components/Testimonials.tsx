
import React, { useRef, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "A XRack dobrou nossa capacidade de carga na frota e reduziu o tempo de instalação em 40%.",
      company: "Transporte Alfa",
      person: "Carlos Silva",
      position: "Gerente de Frota"
    },
    {
      id: 2,
      quote: "Os bagageiros gradeados da XRack revolucionaram nossa logística de entregas. Durabilidade incomparável.",
      company: "Delivery Express",
      person: "Mariana Santos",
      position: "Diretora de Operações"
    },
    {
      id: 3,
      quote: "Depois que implementamos as travessas XRack, os custos de manutenção caíram 35%. Um verdadeiro investimento.",
      company: "Logística Beta",
      person: "Roberto Almeida",
      position: "Supervisor de Manutenção"
    }
  ];

  const carBrands = [
    { name: "Chevrolet", logo: "/lovable-uploads/2abf56ff-6f6c-4757-b453-03e7d095aef7.png" },
    { name: "Volkswagen", logo: "/lovable-uploads/b96006c1-f296-43ed-8587-48ebaa77a468.png" },
    { name: "Troller", logo: "/lovable-uploads/43b50296-15dd-467b-bf1c-fad0ee74ab67.png" },
    { name: "JAC", logo: "/lovable-uploads/456365bb-83b5-4a70-a9e4-d0da2fff7946.png" },
    { name: "Hyundai", logo: "/lovable-uploads/0c74f6a1-d871-4867-9ded-c47a80853d49.png" },
    { name: "Iveco", logo: "/lovable-uploads/f7eb2e8e-8518-4625-a426-9679bec0a81d.png" },
    { name: "MAN", logo: "/lovable-uploads/0d7c3e5e-f1cf-4717-a635-b7ec01e46660.png" },
    { name: "Suzuki", logo: "/lovable-uploads/6b3bed38-f214-498b-b9e9-eb130b031add.png" },
    { name: "Subaru", logo: "/lovable-uploads/1ed3caf5-d63c-4f17-8e91-b1de46c06363.png" },
    { name: "Renault", logo: "/lovable-uploads/151ccdec-6581-4ffa-b67d-9eaaf2ff8179.png" },
    { name: "Peugeot", logo: "/lovable-uploads/83ff9032-bda5-484f-aad9-2c9c57372ac1.png" },
    { name: "Ford", logo: "/lovable-uploads/55119f6a-53e4-4fa2-b6f1-6c9d1014ea7f.png" },
    { name: "Citroën", logo: "/lovable-uploads/3bf065ce-62ac-4c07-a10e-7d1dc7cc48c9.png" },
    { name: "Fiat", logo: "/lovable-uploads/8e1ae1d6-2fe1-4ded-9b43-6605ad787545.png" },
    { name: "Honda", logo: "/lovable-uploads/2c1e47ea-8c25-46fb-8e28-6ad81c7459e3.png" },
    { name: "KIA", logo: "/lovable-uploads/2c4648a7-8f48-4ff9-a413-a92e879951a7.png" },
    { name: "Toyota", logo: "/lovable-uploads/f36e57f2-4c0f-4159-a441-ce3103f6b95d.png" },
    { name: "Nissan", logo: "/lovable-uploads/588539d9-b7ea-4dc5-b461-505d8d90cdba.png" },
    { name: "Jeep", logo: "/lovable-uploads/38720082-2e14-41db-a407-b25af891452a.png" },
    { name: "Chery", logo: "/lovable-uploads/80b3c3f3-c24c-4e46-8976-21c0ed9a5902.png" }
  ];

  const isMobile = useIsMobile();
  const [api, setApi] = React.useState(null);
  
  // Auto-scroll carousel
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!api) return;
    
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        api.scrollNext();
      }, 5000);
    };
    
    const handleInteraction = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        startInterval();
      }
    };
    
    startInterval();
    
    // Get the carousel container element properly
    const containerNode = api.containerNode();
    if (containerNode) {
      containerNode.addEventListener('mousedown', handleInteraction);
      containerNode.addEventListener('touchstart', handleInteraction);
    }
    
    return () => {
      clearInterval(intervalRef.current);
      if (containerNode) {
        containerNode.removeEventListener('mousedown', handleInteraction);
        containerNode.removeEventListener('touchstart', handleInteraction);
      }
    };
  }, [api]);

  const renderTestimonials = () => {
    if (isMobile) {
      return (
        <Carousel 
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full">
                <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-xrack-red relative h-full">
                  <div className="absolute -top-5 left-6 text-xrack-red bg-white rounded-full p-2 shadow-md">
                    <Quote size={24} />
                  </div>
                  <div className="pt-6 h-full flex flex-col">
                    <p className="italic mb-6 flex-grow">{testimonial.quote}</p>
                    <div>
                      <p className="font-bold">{testimonial.person}</p>
                      <p className="text-sm">{testimonial.position}</p>
                      <p className="text-xrack-red font-medium mt-1">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id} 
            className={`bg-white p-6 rounded-lg shadow-lg border-t-4 border-xrack-red relative animate-fade-in animate-delay-${index % 3}`}
          >
            <div className="absolute -top-5 left-6 text-xrack-red bg-white rounded-full p-2 shadow-md">
              <Quote size={24} />
            </div>
            <div className="pt-6">
              <p className="italic mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-bold">{testimonial.person}</p>
                <p className="text-sm">{testimonial.position}</p>
                <p className="text-xrack-red font-medium mt-1">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="depoimentos" className="xrack-section bg-gray-100">
      <div className="xrack-container">
        <h2 className="section-title">Depoimentos & Casos de Sucesso</h2>
        <p className="text-lg mb-12 max-w-4xl">
          Veja o que nossos clientes B2B estão dizendo sobre nossas soluções.
        </p>
        
        {renderTestimonials()}
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Trabalhamos com as maiores montadoras</h3>
          <div className="overflow-hidden relative">
            <div className="flex logos-slide animate-scroll-infinite py-4">
              {[...carBrands, ...carBrands].map((brand, index) => (
                <div key={index} className="mx-4 flex items-center justify-center min-w-[120px]">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} Logo`} 
                    className="h-12 w-auto object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
