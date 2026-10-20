import React from 'react';
import { MapPin, Phone, Mail, Sparkles, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-950 border-t border-forest-800/80 pt-16 pb-12 relative overflow-hidden">
      
      {/* Decorative subtle ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-bronze-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-forest-800/60">
          
          {/* Brand & Creed (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-forest-900 border border-bronze-400/50 flex items-center justify-center text-bronze-300 font-serif font-bold text-xl shadow-inner">
                深
              </div>
              <div>
                <div className="font-serif text-lg font-bold text-sand-50 tracking-wider">
                  深霖生醫與嚴選農作
                </div>
                <div className="text-[10px] text-bronze-400 font-mono tracking-widest uppercase">
                  SHEN LIN BIONICS & SELECT
                </div>
              </div>
            </div>

            <p className="text-sand-300 text-xs sm:text-sm leading-relaxed max-w-md font-light">
              「我要讓世界知道，台灣產出來的，就是世界頂級。」
              <br />
              由傅克深親自下鄉試吃監督，以生醫低溫萃取技術與台灣在地純淨風土，打造專屬於華人高階禮贈與日常養生的極致典範。
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-bronze-300/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>全批次通過 SGS 481 項農殘零檢出 ｜ 100% 溯源履歷</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono tracking-widest text-bronze-400 uppercase">
              網站導覽
            </div>
            <ul className="space-y-2 text-xs text-sand-300">
              <li><a href="#about" className="hover:text-bronze-300 transition-colors">創辦人生平與雙重維度</a></li>
              <li><a href="#timeline" className="hover:text-bronze-300 transition-colors">康乃爾到瑞士研發歷程</a></li>
              <li><a href="#tenets" className="hover:text-bronze-300 transition-colors">傅克深的四條不妥協準則</a></li>
              <li><a href="#stories" className="hover:text-bronze-300 transition-colors">產地手記：被退貨的1500斤茶</a></li>
              <li><a href="#products" className="hover:text-bronze-300 transition-colors">高山有機茶／冷萃滴雞精</a></li>
              <li><a href="#honors" className="hover:text-bronze-300 transition-colors">Monde Selection 特級金獎</a></li>
            </ul>
          </div>

          {/* Contact & Location (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono tracking-widest text-bronze-400 uppercase">
              聯絡總裁辦公室與禮賓處
            </div>
            <div className="space-y-2 text-xs text-sand-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                <span>
                  <strong>台北信義總部：</strong> 台北市信義區信義路五段（深霖生醫營運中心）
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                <span>
                  <strong>產地極淨試驗所：</strong> 台灣南投縣仁愛鄉梨山高山冷鏈試驗基地
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-bronze-400 shrink-0" />
                <span>kason.fu@shenlin-bionics.tw</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-bronze-400 shrink-0" />
                <span>+886 (02) 2758-9688 （私人禮賓專線）</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-sand-400 font-mono gap-4">
          <div>
            © {new Date().getFullYear()} 傅克深 Kason Fu ｜ 深霖生醫與嚴選農作. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>隱私權與最高保密條款</span>
            <span>•</span>
            <span>契作小農公平貿易條約</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
