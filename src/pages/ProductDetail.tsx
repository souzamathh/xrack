
import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ProductDetailContent from '@/components/ProductDetailContent';

const ProductDetail = () => {
  const { category, id } = useParams();
  
  // Get product title for the page title
  const getPageTitle = () => {
    if (category === 'travessas') {
      switch (id) {
        case 'smart': return 'Travessa Larga Rack de Teto Smart';
        case 'style': return 'Travessa Larga de Teto Style';
        case 'slim': return 'Kit Par de Travessas Rack de Teto Slim';
        case 'uno-way': return 'Par de Rack de Teto Travessa Fiat Uno Way';
        case 'locker': return 'Rack de Teto Travessa Locker';
        case 'tubular': return 'Travessa De Teto Tubular Rack Bagageiro';
        default: return 'Travessa de Teto';
      }
    } else if (category === 'bagageiros') {
      switch (id) {
        case 'gradeado-501-3-110x90-preto': return 'Gradeado 501-3 (110 x 90 cm - Preto)';
        case 'gradeado-307-c-140x100-preto': return 'Gradeado 307-C (140 x 100 cm - Preto)';
        case 'gradeado-307-2-96x96-preto': return 'Gradeado 307-2 — 96 x 96 cm';
        case 'gradeado-p': return 'Bagageiro Maleiro de Teto Gradeado P';
        case 'gradeado-m': return 'Bagageiro Maleiro de Teto Gradeado M';
        case 'gradeado-g': return 'Bagageiro Maleiro de Teto Gradeado G';
        case 'gradeado-gg': return 'Bagageiro Maleiro de Teto Gradeado GG';
        case 'gradeado-xg': return 'Bagageiro Maleiro de Teto Gradeado XG';
        case 'gradeado-511-127x96-preto': return '511 — 127 x 96 / 160 x 110 cm — Preto/Prata';
        case 'gradeado-514-127x96-preto': return '514 — 127 x 96 / 160 x 110 cm — Preto/Prata';
        case 'gradeado-539-96x90-preto': return '539 — 96 x 90 / 127 x 96 / 160 x 110 cm — Preto/Prata';
        case 'gradeado-544-127x96-preto': return '544 — 127 x 96 cm — Preto';
        case 'gradeado-548-127x96-preto': return '548 — 127 x 96 cm — Preto';
        case 'gradeado-d52-132x104-preto': return 'D-52 — 132 x 104 cm — Preto';
        case 'gradeado-d59-127x96-preto': return 'D-59 — 127 x 96 cm — Preto';
        default: return 'Bagageiro de Teto';
      }
    }
    
    return 'Produto XRack';
  };

  return (
    <>
      <Helmet>
        <title>XRack - {getPageTitle()}</title>
        <meta 
          name="description" 
          content="Detalhes do produto XRack para sua frota."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <ProductDetailContent category={category} id={id} />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default ProductDetail;
