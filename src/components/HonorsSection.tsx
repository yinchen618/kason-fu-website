import React from 'react';
import { HONORS_DATA } from '../data/kasonData';
import { Award, Trophy, Star, ShieldCheck, GraduationCap } from 'lucide-react';

export const HonorsSection: React.FC = () => {
  return (
    <section id="honors" className="py-24 bg-forest-950 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-forest-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-bronze-400/30 text-bronze-300 text-xs font-mono tracking-widest uppercase">
            Accreditations & Affiliations
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-sand-50 tracking-tight">
            國際榮譽與社會公職
          </h2>
          <p className="text-sand-300 text-sm sm:text-base leading-relaxed">
            堅持極致品質的成果，不僅在市場上贏得認可，更屢獲國際殿堂級大獎與學術界實務肯定。
          </p>
        </div>

        {/* Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HONORS_DATA.map((honor, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-gradient-to-b from-forest-900/80 to-forest-950 border border-forest-800 hover:border-bronze-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header tag */}
                <div className="flex items-center justify-between pb-3 border-b border-forest-800">
                  <span className="font-mono text-sm font-bold text-bronze-400">
                    {honor.year}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-forest-800 text-sand-300 uppercase">
                    {honor.category}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-serif text-lg font-bold text-sand-50 group-hover:text-bronze-200 transition-colors">
                    {honor.title}
                  </h3>
                  <div className="text-xs text-bronze-300/80 mt-1 font-sans">
                    {honor.organization}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-sand-300 leading-relaxed text-justify">
                  {honor.description}
                </p>

              </div>

              <div className="pt-6 mt-4 border-t border-forest-800/60 flex items-center gap-2 text-[11px] text-bronze-400/70 font-mono">
                <Trophy className="w-3.5 h-3.5 text-bronze-400" />
                <span>官方認證登錄</span>
              </div>
            </div>
          ))}

          {/* Special Callout Card for Taiwan Agriculture */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-bronze-900/40 via-forest-900 to-forest-950 border border-bronze-500/40 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-forest-800">
                <span className="font-mono text-sm font-bold text-bronze-300">
                  VISION
                </span>
                <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-bronze-500/20 text-bronze-300 uppercase">
                  世界宏願
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-sand-50">
                讓台灣農產跨越代工走向高奢
              </h3>
              <p className="text-xs text-sand-200 leading-relaxed">
                深霖生醫未來五年將持續引進國際綠色智慧冷鏈與歐盟認證，建立亞洲第一個以台灣風土為核心的頂級奢華農作保健生態圈。
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-forest-800/60 flex items-center justify-between text-xs font-mono text-bronze-300">
              <span>目標契作面積</span>
              <span className="font-bold text-sand-50">1,000 公頃</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
