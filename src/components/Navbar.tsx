import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenConcierge: (defaultType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConcierge }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '關於創辦人', href: '#about' },
    { name: '學經歷歷程', href: '#timeline' },
    { name: '不妥協準則', href: '#tenets' },
    { name: '產地手記', href: '#stories' },
    { name: '深霖代表作', href: '#products' },
    { name: '國際榮譽', href: '#honors' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-forest-950/90 backdrop-blur-md border-b border-bronze-500/20 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-forest-800 to-forest-900 border border-bronze-400/40 flex items-center justify-center text-bronze-300 font-serif font-bold text-lg shadow-inner group-hover:border-bronze-300 transition-colors">
            深
          </div>
          <div>
            <div className="font-serif tracking-widest text-sand-50 font-semibold text-base sm:text-lg flex items-center gap-2">
              傅克深 <span className="text-bronze-400 font-sans text-xs font-normal tracking-wider uppercase hidden sm:inline">Kason Fu</span>
            </div>
            <div className="text-[10px] text-bronze-300/80 tracking-wider uppercase font-sans">
              深霖生醫與嚴選農作 創辦人
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-sand-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-bronze-300 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-bronze-400 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header CTA */}
        <div className="hidden sm:flex items-center space-x-4">
          <button
            onClick={() => onOpenConcierge('節慶禮盒諮詢')}
            className="group relative px-4 py-2 rounded-full border border-bronze-400/60 bg-forest-900/60 hover:bg-bronze-500 hover:border-bronze-300 text-bronze-200 hover:text-forest-950 text-xs font-medium tracking-wider transition-all duration-300 flex items-center gap-1.5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-bronze-400 group-hover:text-forest-950 transition-colors" />
            <span>私藏禮盒預訂</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-sand-200 hover:text-bronze-300 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-forest-950/98 border-b border-bronze-500/30 px-6 py-6 space-y-4">
          <div className="space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sand-100 hover:text-bronze-300 text-base py-1 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-forest-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConcierge('私密會晤與預約');
              }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-bronze-600 to-bronze-500 text-forest-950 font-medium text-sm text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <span>私藏禮盒與商務合作洽詢</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
