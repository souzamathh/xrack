
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import HighlightsAndValues from '@/components/HighlightsAndValues';
import Products from '@/components/Products';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { initializeSmoothScrolling } from '@/utils/smoothScroll';
import { useScrollAnimation } from '@/utils/ScrollAnimationObserver';

const Index = () => {
  useEffect(() => {
    initializeSmoothScrolling();
  }, []);

  useScrollAnimation();

  return (
    <>
      <Helmet>
        <title>XRack - Soluções Premium em Bagageiros e Travessas de Teto</title>
        <meta 
          name="description" 
          content="Eleve o desempenho de sua frota com as soluções XRack - Referência em travessas 100% alumínio e bagageiros gradeados. Feito para empresas que exigem máxima qualidade e durabilidade."
        />
        <meta 
          name="keywords" 
          content="travessas de teto premium, rack de teto em alumínio, bagageiro gradeado profissional, B2B acessórios automotivos, soluções para frotas" 
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <HighlightsAndValues />
          <Products />
          <Features />
          <Testimonials />
          <Partners />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Index;
