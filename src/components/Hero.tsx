import React, { useState } from 'react';
import { ArrowRight, Award, Compass, ShieldCheck, ChevronDown, CheckCircle2, Building, Mountain, Sparkles } from 'lucide-react';
import { FOUNDER_INFO, FOUNDER_PORTRAITS } from '../data/kasonData';

interface HeroProps {
  onOpenConcierge: (defaultType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConcierge }) => {
  const [activePortrait, setActivePortrait] = useState<'plantation' | 'office'>('plantation');
  const currentPortrait = FOUNDER_PORTRAITS[activePortrait];

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Ambience Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(43,95,71,0.35),rgba(6,17,12,0.95))]" />
      
      {/* Subtle Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #cfa565 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Decorative Metallic Bronze Halos */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-bronze-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-forest-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headlines & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/80 border border-bronze-400/30 text-bronze-300 text-xs tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-bronze-400 animate-pulse" />
              <span>深霖生醫與嚴選農作 創辦人官方站</span>
            </div>

            {/* Main Title & Name */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-sand-50">
                  {FOUNDER_INFO.name}
                </h1>
                <span className="font-serif text-2xl sm:text-3xl text-bronze-400/90 font-light tracking-widest">
                  {FOUNDER_INFO.englishName}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded border border-forest-600 text-forest-300 bg-forest-900/60 font-mono">
                  38 AGE
                </span>
              </div>
              <p className="text-bronze-300/90 text-sm sm:text-base font-medium tracking-wide">
                海外歸國在地企業第二代 ｜ 生醫研發科學家 ｜ 頂級風土守護者
              </p>
            </div>

            {/* Signature Quote Highlight */}
            <div className="relative pl-6 py-3 border-l-2 border-bronze-400/70 bg-gradient-to-r from-forest-900/60 to-transparent rounded-r-xl">
              <div className="text-bronze-400 text-3xl font-serif absolute -top-3 left-2 opacity-40 select-none">“</div>
              <p className="font-serif text-lg sm:text-xl text-sand-100 font-medium leading-relaxed italic">
                {FOUNDER_INFO.coreQuote}
              </p>
              <div className="mt-2 text-xs text-sand-300/80 font-sans tracking-wider">
                —— 傅克深 Kason Fu 於深霖生醫極淨試驗所
              </div>
            </div>

            {/* Bio summary */}
            <p className="text-sand-300 text-sm sm:text-base leading-relaxed text-justify max-w-2xl font-light">
              曾歷練於瑞士洛桑頂級生醫機構與加州農業創投，深感台灣擁有舉世無雙的高山風土與物種活性，卻常因傳統代工思維被低估。他毅然返台創立「深霖生醫」，以醫藥級質譜標準與小農高價契作，親自下鄉試吃監督，打破浮誇農產包裝，重塑世界頂級養生典範。
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="px-6 py-3.5 rounded-lg bg-gradient-to-r from-bronze-500 via-bronze-400 to-bronze-500 hover:from-bronze-400 hover:to-bronze-300 text-forest-950 font-semibold text-sm tracking-wider transition-all duration-300 shadow-lg shadow-bronze-500/20 flex items-center gap-2 group"
              >
                <span>鑑賞深霖代表作</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => onOpenConcierge('產地手記與會晤預約')}
                className="px-6 py-3.5 rounded-lg bg-forest-900/70 hover:bg-forest-800 border border-bronze-400/40 hover:border-bronze-300 text-sand-100 font-medium text-sm tracking-wider transition-all duration-300 flex items-center gap-2"
              >
                <span>私人預約與合作洽詢</span>
              </button>
            </div>

            {/* Quick trust points */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-forest-800/80">
              <div className="flex items-center gap-2 text-xs text-sand-300">
                <CheckCircle2 className="w-4 h-4 text-bronze-400 shrink-0" />
                <span>康乃爾植物生化碩士</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-sand-300">
                <CheckCircle2 className="w-4 h-4 text-bronze-400 shrink-0" />
                <span>前瑞士頂級生醫研發</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-sand-300">
                <CheckCircle2 className="w-4 h-4 text-bronze-400 shrink-0" />
                <span>總裁親自逐批品嚐</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-sand-300">
                <CheckCircle2 className="w-4 h-4 text-bronze-400 shrink-0" />
                <span>契作保價收購 +35%</span>
              </div>
            </div>

          </div>

          {/* Right Column: Real Photographic Portrait Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative bronze metallic frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-bronze-400/50 via-bronze-600/30 to-forest-800/70 blur-sm" />
              
              <div className="relative rounded-3xl bg-forest-950 border border-bronze-400/60 p-4 sm:p-5 shadow-2xl overflow-hidden">
                
                {/* Switcher Tabs between Plantation and Office */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-forest-800/80 text-xs">
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-forest-900 border border-forest-800">
                    <button
                      onClick={() => setActivePortrait('plantation')}
                      className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium transition-all ${
                        activePortrait === 'plantation'
                          ? 'bg-bronze-500 text-forest-950 shadow-sm'
                          : 'text-sand-300 hover:text-sand-50'
                      }`}
                    >
                      <Mountain className="w-3.5 h-3.5" />
                      <span>茶園巡視實景</span>
                    </button>
                    <button
                      onClick={() => setActivePortrait('office')}
                      className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium transition-all ${
                        activePortrait === 'office'
                          ? 'bg-bronze-500 text-forest-950 shadow-sm'
                          : 'text-sand-300 hover:text-sand-50'
                      }`}
                    >
                      <Building className="w-3.5 h-3.5" />
                      <span>總裁辦公室</span>
                    </button>
                  </div>

                  <span className="text-[10px] font-mono text-bronze-400 tracking-wider hidden sm:inline">
                    {currentPortrait.tag}
                  </span>
                </div>

                {/* Photo Display Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-forest-900 border border-forest-800 shadow-inner group">
                  <img
                    src={currentPortrait.image}
                    alt={currentPortrait.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent opacity-85" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-forest-950/80 backdrop-blur-md border border-bronze-400/40 text-[11px] font-mono text-bronze-300 flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {currentPortrait.dimension}
                    </span>
                  </div>

                  {/* Bottom Portrait Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono text-bronze-300">
                      <span className="flex items-center gap-1">
                        <Compass className="w-3.5 h-3.5 text-bronze-400" />
                        {currentPortrait.location}
                      </span>
                      <span className="text-sand-400">傅克深 Kason Fu</span>
                    </div>

                    <p className="text-xs text-sand-100 font-light leading-relaxed text-justify line-clamp-2">
                      {currentPortrait.caption}
                    </p>
                  </div>
                </div>

                {/* Bottom Quality Guarantee Stamp */}
                <div className="mt-3 pt-3 border-t border-forest-800/80 flex items-center justify-between text-[11px] font-mono text-sand-400">
                  <span className="flex items-center gap-1 text-bronze-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-bronze-400" />
                    深霖生醫與嚴選農作
                  </span>
                  <span className="italic font-serif text-bronze-400 text-xs">
                    Kason Fu 簽章
                  </span>
                </div>

              </div>
            </div>

            {/* Quick stats under the photo */}
            <div className="w-full max-w-md mt-4 grid grid-cols-2 gap-3">
              {FOUNDER_INFO.stats.slice(0, 2).map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-forest-900/60 border border-forest-800/80 text-center">
                  <div className="text-[11px] text-sand-400">{stat.label}</div>
                  <div className="text-base font-serif font-bold text-bronze-300 mt-0.5">
                    {stat.value} <span className="text-[10px] text-sand-400 font-normal">{stat.unit}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="mt-16 text-center">
          <a
            href="#about"
            className="inline-flex flex-col items-center text-xs text-sand-400 hover:text-bronze-300 transition-colors gap-1 group"
          >
            <span className="tracking-widest uppercase font-mono text-[10px]">Scroll to Explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-bronze-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
