import React, { useState } from 'react';
import { TIMELINE_DATA, TimelineItem } from '../data/kasonData';
import { GraduationCap, Globe2, Sparkles, Building2, MapPin, Quote } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'education' | 'overseas' | 'breakthrough' | 'brand'>('all');

  const filteredData = filter === 'all' 
    ? TIMELINE_DATA 
    : TIMELINE_DATA.filter(item => item.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'education':
        return <GraduationCap className="w-5 h-5 text-emerald-400" />;
      case 'overseas':
        return <Globe2 className="w-5 h-5 text-blue-400" />;
      case 'breakthrough':
        return <Building2 className="w-5 h-5 text-amber-400" />;
      case 'brand':
        return <Sparkles className="w-5 h-5 text-bronze-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-bronze-300" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'education': return '學術科研';
      case 'overseas': return '海外資歷';
      case 'breakthrough': return '家族破局';
      case 'brand': return '品牌創立';
      default: return '歷程';
    }
  };

  return (
    <section id="timeline" className="py-24 bg-forest-950 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-forest-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-bronze-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-bronze-400/30 text-bronze-300 text-xs font-mono tracking-widest uppercase">
            Curriculum Vitae & Milestones
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-sand-50 tracking-tight">
            學經歷旅程與世界歷練
          </h2>
          <p className="text-sand-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            從台大生化到康乃爾與瑞士洛桑實驗室，傅克深將國際一線的生醫專利技術與創投資歷，化為深耕台灣農特精品的雄厚底蘊。
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: '完整歷程 (全部)' },
              { id: 'education', label: '常春藤與頂尖學歷' },
              { id: 'overseas', label: '瑞士生醫與矽谷創投' },
              { id: 'breakthrough', label: '家族破局與變革' },
              { id: 'brand', label: '深霖生醫時代' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  filter === tab.id
                    ? 'bg-bronze-500 text-forest-950 font-semibold shadow-md shadow-bronze-500/20'
                    : 'bg-forest-900/80 text-sand-300 hover:text-sand-50 hover:bg-forest-800 border border-forest-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-forest-800 ml-4 md:ml-32 space-y-12">
          {filteredData.map((item, index) => (
            <div key={index} className="relative pl-8 group">
              
              {/* Year label for desktop positioned to the left */}
              <div className="hidden md:block absolute -left-36 top-1.5 w-28 text-right">
                <span className="font-mono text-xs font-bold text-bronze-400 block tracking-wider">
                  {item.year}
                </span>
                <span className="text-[11px] text-sand-400 block mt-0.5 font-serif">
                  {item.period}
                </span>
              </div>

              {/* Node indicator */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-forest-900 border-2 border-bronze-400 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-bronze-500 group-hover:text-forest-950 transition-all duration-300">
                {getCategoryIcon(item.category)}
              </div>

              {/* Mobile Year Badge */}
              <div className="md:hidden flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-bronze-400 bg-forest-900/80 px-2 py-0.5 rounded border border-bronze-400/30">
                  {item.year}
                </span>
                <span className="text-xs text-sand-300 font-serif">
                  {item.period}
                </span>
              </div>

              {/* Content Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-forest-900/70 to-forest-950 border border-forest-800 group-hover:border-bronze-500/40 transition-all duration-300 shadow-xl space-y-4">
                
                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-forest-800/80">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono tracking-wider bg-forest-800 text-bronze-300 uppercase mb-1">
                      {getCategoryLabel(item.category)}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-sand-50">
                      {item.institution}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-sand-400 font-sans">
                    <MapPin className="w-3.5 h-3.5 text-bronze-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Role */}
                <div className="text-sm font-medium text-bronze-300 tracking-wide">
                  {item.role}
                </div>

                {/* Summary */}
                <p className="text-sand-300 text-sm leading-relaxed text-justify">
                  {item.summary}
                </p>

                {/* Key Highlights */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-mono text-sand-400 uppercase tracking-wider block">
                    Core Accomplishments:
                  </span>
                  <ul className="space-y-1">
                    {item.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="text-xs text-sand-200 flex items-start gap-2">
                        <span className="text-bronze-400 font-bold">•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Personal quote if any */}
                {item.quote && (
                  <div className="mt-4 pt-3 border-t border-forest-800/60 flex items-start gap-2 text-xs text-bronze-200/90 italic font-serif bg-forest-950/60 p-3 rounded-lg border-l-2 border-bronze-400/80">
                    <Quote className="w-3.5 h-3.5 text-bronze-400 shrink-0 mt-0.5" />
                    <span>「{item.quote}」</span>
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
