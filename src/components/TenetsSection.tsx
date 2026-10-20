import React from 'react';
import { TENETS_DATA } from '../data/kasonData';
import { ShieldCheck, Compass, FlaskConical, Sparkles, AlertCircle } from 'lucide-react';

export const TenetsSection: React.FC = () => {
  return (
    <section id="tenets" className="py-24 bg-forest-900/60 relative border-t border-forest-800">
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(207,165,101,0.08),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 border border-bronze-400/30 text-bronze-300 text-xs font-mono tracking-widest uppercase">
            The Non-Negotiable Creed
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-sand-50 tracking-tight">
            傅克深的四條不妥協準則
          </h2>
          <p className="text-sand-300 text-sm sm:text-base leading-relaxed">
            深霖從不追逐快速翻桌率或工業化量產。以下四項鐵律，是傅克深立於台灣這片土地、面向世界高端消費市場時，寸步不讓的誓言。
          </p>
        </div>

        {/* 4 Tenets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TENETS_DATA.map((tenet) => (
            <div
              key={tenet.id}
              className="group relative rounded-2xl bg-gradient-to-b from-forest-900 to-forest-950 border border-forest-800 hover:border-bronze-400/50 transition-all duration-300 p-8 sm:p-10 shadow-xl flex flex-col justify-between"
            >
              
              <div className="space-y-5">
                
                {/* Number & English subtitle */}
                <div className="flex items-center justify-between pb-4 border-b border-forest-800/80">
                  <span className="font-mono text-3xl sm:text-4xl font-black text-bronze-400/40 group-hover:text-bronze-300 transition-colors">
                    {tenet.number}
                  </span>
                  <span className="text-[11px] font-mono tracking-wider text-sand-400 uppercase">
                    {tenet.englishTitle}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-serif text-2xl font-bold text-sand-50 group-hover:text-bronze-200 transition-colors">
                    {tenet.title}
                  </h3>
                  <p className="text-xs text-bronze-300/80 mt-1 font-medium">
                    {tenet.subtitle}
                  </p>
                </div>

                {/* Statement Quote */}
                <div className="p-4 rounded-xl bg-forest-950/80 border border-forest-800 text-sm font-serif italic text-sand-200 leading-relaxed">
                  「{tenet.statement}」
                </div>

                {/* Specific Implementation Points */}
                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-mono text-sand-400 uppercase tracking-wider">
                    執行細則：
                  </div>
                  <ul className="space-y-2">
                    {tenet.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-xs text-sand-300 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-bronze-400 mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Bottom tag */}
              <div className="mt-8 pt-4 border-t border-forest-800/60 flex items-center justify-between text-[11px] text-bronze-400/70 font-mono">
                <span>執行人：傅克深親自簽核</span>
                <span>無寬限條款</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
