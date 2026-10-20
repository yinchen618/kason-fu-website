import React from 'react';
import { ArrowRight, Award, Compass, ShieldCheck, ChevronDown, CheckCircle2 } from 'lucide-react';
import { FOUNDER_INFO } from '../data/kasonData';

interface HeroProps {
  onOpenConcierge: (defaultType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConcierge }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Ambience Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(43,95,71,0.35),rgba(6,17,12,0.95))]" />
      
      {/* Subtle Grid / Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #cfa565 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Decorative Metallic Bronze Halo */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-bronze-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-forest-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/80 border border-bronze-400/30 text-bronze-300 text-xs tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-bronze-400 animate-pulse" />
              <span>深霖生醫與嚴選農作 創辦人個人手記</span>
            </div>

            {/* Main Title & Name */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
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
            <div className="relative pl-6 py-2 border-l-2 border-bronze-400/70 bg-gradient-to-r from-forest-900/50 to-transparent rounded-r-xl">
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

          {/* Right Column: Visual Portrait / Identity Monogram Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative bronze metallic frame */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-b from-bronze-400/40 via-bronze-600/20 to-forest-800/60 blur-sm" />
              
              <div className="relative rounded-2xl bg-gradient-to-b from-forest-900 to-forest-950 border border-bronze-400/50 p-6 sm:p-8 shadow-2xl overflow-hidden">
                
                {/* Background watermark badge */}
                <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-forest-800/30 border border-bronze-500/10 flex items-center justify-center font-serif text-bronze-300/10 text-9xl select-none pointer-events-none">
                  霖
                </div>

                {/* Identity Header */}
                <div className="flex items-center justify-between pb-6 border-b border-forest-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-forest-800 border border-bronze-400/40 flex items-center justify-center text-bronze-300 font-serif font-bold text-2xl shadow-inner">
                      深
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-bronze-400 font-mono">EST. 2020</div>
                      <div className="text-sand-100 font-serif font-semibold text-sm">SHEN LIN BIONICS</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded bg-bronze-500/10 border border-bronze-400/30 text-bronze-300 text-[11px] font-mono">
                      TAIWAN SELECT
                    </span>
                  </div>
                </div>

                {/* Character Silhouette / Styling Portrait Element */}
                <div className="my-6 p-6 rounded-xl bg-forest-950/80 border border-forest-800/90 relative">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-forest-800 via-forest-700 to-bronze-700 p-0.5 shadow-lg">
                      <div className="w-full h-full rounded-full bg-forest-950 flex items-center justify-center text-bronze-300 font-serif text-3xl font-bold">
                        KF
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-base font-serif font-semibold text-sand-50">
                        傅克深 ｜ Kason Fu
                      </div>
                      <div className="text-xs text-bronze-300/80">
                        海外生醫二代革新者
                      </div>
                      <div className="text-[11px] text-sand-400">
                        外表冷峻執著，骨子裡對台灣土地品質有極強偏執
                      </div>
                    </div>
                  </div>

                  {/* Field inspection badge */}
                  <div className="mt-4 pt-3 border-t border-forest-800/60 flex items-center justify-between text-[11px] text-sand-400 font-mono">
                    <span className="flex items-center gap-1.5 text-bronze-300">
                      <Compass className="w-3.5 h-3.5 text-bronze-400" />
                      現場稽核：南投梨山／嘉義竹崎
                    </span>
                    <span className="text-emerald-400">● 嚴選監理中</span>
                  </div>
                </div>

                {/* Core Stats Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {FOUNDER_INFO.stats.map((stat, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-forest-900/60 border border-forest-800/80">
                      <div className="text-xs text-sand-400 font-sans">{stat.label}</div>
                      <div className="mt-1 flex items-baseline gap-1">
                        <span className="text-xl font-serif font-bold text-bronze-300">{stat.value}</span>
                        <span className="text-[11px] text-bronze-400/80">{stat.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Signature Area */}
                <div className="mt-6 pt-4 border-t border-forest-800 flex items-center justify-between">
                  <div className="text-[11px] text-sand-400">
                    品質責任簽名
                  </div>
                  <div className="font-serif italic text-bronze-300 text-sm tracking-wider">
                    Kason Fu 傅克深
                  </div>
                </div>

              </div>
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
