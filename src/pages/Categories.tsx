
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ProductGrid from '@/components/ProductGrid';

const Categories = () => (
  <>
    <Helmet>
      <title>XRack - Categorias de Produtos</title>
      <meta
        name="description"
        content="Explore nossa linha completa de travessas de teto e bagageiros gradeados para sua frota."
      />
    </Helmet>

    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-black text-white py-16 pt-24 md:pt-32">
          <div className="xrack-container px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Categorias de Produtos</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Soluções completas em travessas de alumínio e bagageiros gradeados para sua frota
            </p>
          </div>
        </section>
        
        <ProductGrid showAll />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  </>
);

export default Categories;
