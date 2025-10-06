import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Index from "./pages/Index";
import Categories from "./pages/Categories";
import ProductDetail from "./pages/ProductDetail";
import CompatibilityChecker from "./pages/CompatibilityChecker";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  useScrollToTop();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/categorias" element={<Categories />} />
      <Route path="/verificar-compatibilidade" element={<CompatibilityChecker />} />
      <Route path="/produtos/:category/:id" element={<ProductDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
          <Analytics />
          <SpeedInsights />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
