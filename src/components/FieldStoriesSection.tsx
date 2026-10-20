import React, { useState } from 'react';
import { FIELD_STORIES } from '../data/kasonData';
import { BookOpen, MapPin, Sparkles, Scale, AlertOctagon, Coffee } from 'lucide-react';

export const FieldStoriesSection: React.FC = () => {
  const [activeStory, setActiveStory] = useState(0);
  const story = FIELD_STORIES[activeStory];

  const storyImages = [
    {
      src: "/images/product-tea-box.png",
      caption: "梨山2100m 嚴選烏龍茶盒 實物"
    },
    {
      src: "/images/kason-tea-plantation.png",
      caption: "傅克深身著深綠西裝踏查高山茶園"
    },
    {
      src: "/images/kason-office.png",
      caption: "信義總裁辦公室 逐批品鑑放行"
    }
  ];

  return (
    <section id="stories" className="py-24 bg-forest-950 relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-forest-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-bronze-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-bronze-400/30 text-bronze-300 text-xs font-mono tracking-widest uppercase">
            Field Notes & Uncompromising Legacy
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-sand-50 tracking-tight">
            產地手記與執念軼事
          </h2>
          <p className="text-sand-300 text-sm sm:text-base leading-relaxed">
            業界傳言中的冷面總裁，在產地究竟是個什麼樣的人？三則真實發生的事件，記錄傅克深對品質近乎偏執的狂熱。
          </p>
        </div>

        {/* Story Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {FIELD_STORIES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveStory(idx)}
              className={`text-left p-6 rounded-2xl border transition-all duration-300 relative ${
                activeStory === idx
                  ? 'bg-gradient-to-b from-forest-800 to-forest-900 border-bronze-400 text-sand-50 shadow-xl shadow-bronze-500/10'
                  : 'bg-forest-900/40 border-forest-800 text-sand-400 hover:text-sand-200 hover:bg-forest-900/70'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className={`px-2 py-0.5 rounded ${
                  activeStory === idx ? 'bg-bronze-500/20 text-bronze-300' : 'bg-forest-800 text-sand-400'
                }`}>
                  {item.tag}
                </span>
                <span className="text-bronze-400 font-bold">0{idx + 1}</span>
              </div>
              <h3 className="font-serif text-base font-bold text-sand-100 line-clamp-1">
                {item.title}
              </h3>
              <p className="text-xs text-sand-400 mt-1 line-clamp-1">
                {item.subtitle}
              </p>
            </button>
          ))}
        </div>

        {/* Active Story Featured Box */}
        <div className="rounded-3xl bg-gradient-to-b from-forest-900 via-forest-900/80 to-forest-950 border border-bronze-500/40 p-8 sm:p-12 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Story Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-bronze-500/20 border border-bronze-400/40 text-bronze-300 text-xs font-mono uppercase tracking-wider">
                  CASE ARCHIVE 0{activeStory + 1}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-sand-300 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-bronze-400" />
                  <span>{story.location}</span>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-sand-50">
                  {story.title}
                </h3>
                <p className="text-bronze-300 font-medium text-sm mt-1">
                  {story.subtitle}
                </p>
              </div>

              <div className="text-sand-200 text-sm sm:text-base leading-relaxed text-justify space-y-4 font-light">
                <p>{story.narrative}</p>
              </div>

              {/* Takeaway / Quote */}
              <div className="p-4 rounded-xl bg-forest-950 border-l-4 border-bronze-400 space-y-1">
                <div className="text-[11px] font-mono tracking-wider text-bronze-400 uppercase">
                  傅克深 總裁備忘錄核心箴言：
                </div>
                <div className="font-serif italic text-sand-100 text-sm sm:text-base">
                  「{story.takeaway}」
                </div>
              </div>

            </div>

            {/* Photo & Metric Highlight Box (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Photo Box */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-forest-950 border border-bronze-400/30 group shadow-lg">
                <img
                  src={storyImages[activeStory].src}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-sand-300">
                  {storyImages[activeStory].caption}
                </div>
              </div>

              {/* Metric Box */}
              <div className="p-6 rounded-2xl bg-forest-950/80 border border-forest-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-bronze-400 uppercase block">
                    CRITICAL FACTOR
                  </span>
                  <div className="font-serif text-4xl font-black text-bronze-300 mt-1">
                    {story.metric}
                  </div>
                  <div className="text-xs text-sand-300 font-sans mt-0.5">
                    {story.metricLabel}
                  </div>
                </div>

                <div className="text-right text-[11px] font-mono text-sand-400">
                  <span>檔案編號</span>
                  <div className="text-bronze-300 font-bold mt-0.5">#SL-202{activeStory + 1}</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
