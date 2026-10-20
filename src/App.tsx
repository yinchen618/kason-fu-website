import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DichotomySection } from './components/DichotomySection';
import { TimelineSection } from './components/TimelineSection';
import { TenetsSection } from './components/TenetsSection';
import { FieldStoriesSection } from './components/FieldStoriesSection';
import { ProductsShowcase } from './components/ProductsShowcase';
import { HonorsSection } from './components/HonorsSection';
import { ConciergeModal } from './components/ConciergeModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [conciergeOpen, setConciergeOpen] = useState(false);
  const [conciergeType, setConciergeType] = useState('節慶頂級禮盒客製');
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleOpenConcierge = (type: string = '節慶頂級禮盒客製', product: string = '') => {
    setConciergeType(type);
    setSelectedProduct(product);
    setConciergeOpen(true);
  };

  return (
    <div className="min-h-screen bg-forest-950 text-sand-100 flex flex-col font-sans">
      <Navbar onOpenConcierge={handleOpenConcierge} />
      
      <main className="flex-grow">
        <Hero onOpenConcierge={handleOpenConcierge} />
        <DichotomySection />
        <TimelineSection />
        <TenetsSection />
        <FieldStoriesSection />
        <ProductsShowcase onOpenConcierge={handleOpenConcierge} />
        <HonorsSection />
      </main>

      <Footer />

      <ConciergeModal
        isOpen={conciergeOpen}
        onClose={() => setConciergeOpen(false)}
        defaultType={conciergeType}
        defaultProduct={selectedProduct}
      />
    </div>
  );
};

export default App;
