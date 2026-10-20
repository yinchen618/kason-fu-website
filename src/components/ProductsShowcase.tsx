import React, { useState } from 'react';
import { PRODUCTS_DATA, ProductItem } from '../data/kasonData';
import { Sparkles, Award, ShieldCheck, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface ProductsShowcaseProps {
  onOpenConcierge: (defaultType?: string, productName?: string) => void;
}

export const ProductsShowcase: React.FC<ProductsShowcaseProps> = ({ onOpenConcierge }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(PRODUCTS_DATA[0]);

  return (
    <section id="products" className="py-24 bg-forest-900/50 relative border-t border-forest-800">
      
      {/* Glow elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-bronze-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 border border-bronze-400/30 text-bronze-300 text-xs font-mono tracking-widest uppercase">
            Signature Selections
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-sand-50 tracking-tight">
            深霖嚴選農作與生醫代表作
          </h2>
          <p className="text-sand-300 text-sm sm:text-base leading-relaxed">
            結合高山極致風土與生醫低溫純化工藝。全系列產品皆通過傅克深親自逐批品嚐與 481 項質譜分析，專為高品味家族與重要節慶饋贈而生。
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS_DATA.map((product) => {
            const isSelected = selectedProduct?.id === product.id;
            return (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`group cursor-pointer rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-gradient-to-b from-forest-800 to-forest-900 border-bronze-400 shadow-xl shadow-bronze-500/15 scale-[1.02]'
                    : 'bg-forest-950/80 border-forest-800 hover:border-bronze-500/40 hover:bg-forest-900/60'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Category & Badge */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-bronze-300 uppercase tracking-wider">{product.category}</span>
                      <span className="w-2 h-2 rounded-full bg-bronze-400" />
                    </div>
                    <div className="inline-block px-2 py-0.5 rounded bg-bronze-500/10 border border-bronze-400/30 text-bronze-200 text-[10px] font-medium">
                      {product.badge}
                    </div>
                  </div>

                  {/* Product Title */}
                  <div>
                    <h3 className="font-serif text-lg font-bold text-sand-50 group-hover:text-bronze-200 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[11px] text-sand-400 font-sans tracking-wide mt-0.5 line-clamp-1">
                      {product.englishName}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-sand-300 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                </div>

                {/* Card footer */}
                <div className="pt-6 mt-4 border-t border-forest-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-sand-400 text-[11px]">查看品鑑筆記</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-bronze-400 translate-x-1' : 'text-sand-400'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Product Deep Dive Modal / Inspector */}
        {selectedProduct && (
          <div className="mt-12 rounded-3xl bg-gradient-to-b from-forest-900 to-forest-950 border border-bronze-500/50 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Product Info Left (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-bronze-500/20 text-bronze-300 border border-bronze-400/40 text-xs font-mono">
                    {selectedProduct.category}
                  </span>
                  <span className="text-xs text-sand-400 font-mono">
                    {selectedProduct.origin}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-sand-50">
                    {selectedProduct.name}
                  </h3>
                  <div className="text-xs text-bronze-400 font-mono mt-1">
                    {selectedProduct.englishName}
                  </div>
                </div>

                <p className="text-sand-200 text-sm sm:text-base leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Process details */}
                <div className="p-4 rounded-xl bg-forest-950/80 border border-forest-800/80 space-y-2">
                  <div className="text-xs font-mono text-bronze-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>生醫研發與工藝規格</span>
                  </div>
                  <div className="text-xs text-sand-200 leading-relaxed">
                    {selectedProduct.process}
                  </div>
                  <div className="text-[11px] text-sand-400 pt-1 border-t border-forest-800/60 font-mono">
                    包裝規格：{selectedProduct.specs}
                  </div>
                </div>

              </div>

              {/* CEO Tasting Notes Right (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-forest-950/90 border border-bronze-400/30 flex flex-col justify-between space-y-6">
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-forest-800">
                    <span className="text-xs font-mono text-bronze-300 tracking-wider uppercase">
                      總裁親鑑筆記 (CEO's Tasting Note)
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">
                      ✓ 批次放行
                    </span>
                  </div>

                  <blockquote className="font-serif italic text-sand-100 text-sm sm:text-base leading-relaxed">
                    「{selectedProduct.ceoSignatureNote}」
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-forest-800 space-y-3">
                  <div className="flex items-center justify-between text-xs text-sand-400 font-mono">
                    <span>簽署人</span>
                    <span className="font-serif text-bronze-300 text-sm">傅克深 Kason Fu</span>
                  </div>

                  <button
                    onClick={() => onOpenConcierge('私藏禮盒預約', selectedProduct.name)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-bronze-500 to-bronze-400 hover:from-bronze-400 hover:to-bronze-300 text-forest-950 font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>預定此嚴選品項禮盒</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
