import React from 'react';
import { Microscope, Mountain, CheckCircle, HeartHandshake } from 'lucide-react';

export const DichotomySection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-forest-900/40 relative border-t border-forest-800/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze-500/10 border border-bronze-400/30 text-bronze-300 text-xs font-mono tracking-widest uppercase">
            The Dual Nature of Kason Fu
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-sand-50 tracking-tight">
            生醫冷峻 × 土地深情
          </h2>
          <p className="text-sand-300 text-sm sm:text-base leading-relaxed">
            在傅克深身上，你看得到最冷冽精密的瑞士實驗室標準，也看得到對台灣泥土最熾熱的傲骨與執念。這兩種看似衝突的特質，構成了「深霖生醫」不可複製的品牌基因。
          </p>
        </div>

        {/* Side-by-side Dual Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Biotech Precision */}
          <div className="relative group rounded-3xl bg-gradient-to-b from-forest-900 to-forest-950 border border-forest-700/60 overflow-hidden shadow-2xl flex flex-col justify-between hover:border-bronze-400/40 transition-all duration-300">
            
            {/* Visual Photo Header */}
            <div className="relative h-56 overflow-hidden bg-forest-950">
              <img
                src="/images/kason-office.png"
                alt="傅克深 總裁辦公室照"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-forest-950/80 backdrop-blur-md border border-forest-700 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <Microscope className="w-3.5 h-3.5" />
                <span>DIMENSION 01 ｜ 現代極簡決策空間</span>
              </div>
            </div>

            <div className="p-8 sm:p-10 space-y-6 flex-grow flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-forest-800">
                  <h3 className="font-serif text-2xl font-bold text-sand-100">
                    生醫理性・精準苛求
                  </h3>
                  <span className="text-xs px-2.5 py-1 rounded bg-forest-800 text-sand-300 font-mono">
                    LABORATORY
                  </span>
                </div>

                <p className="text-sand-300 text-sm leading-relaxed text-justify">
                  「在實驗室裡，感覺是不可信的，只有分子量、活性半衰期與層析質譜報告才是真的。」手持金箔茶罐，神情嚴謹完美主義，將歐洲頂級生醫標準導入台灣農作加工。
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-forest-950/60 border border-forest-800/60">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-xs text-sand-200">
                      <strong className="text-sand-50 block font-medium">481項生化與毒物檢驗</strong>
                      每批次產物必經農藥殘留、重金屬、塑化劑、黃麴毒素多重盲測，零檢出為唯一出廠底線。
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-forest-950/60 border border-forest-800/60">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-xs text-sand-200">
                      <strong className="text-sand-50 block font-medium">零化學賦形劑極限製程</strong>
                      拒絕化學增稠劑、香精、人工甘味劑與防腐劑。以專利低溫微過濾技術，達到天然純淨保留。
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-forest-950/60 border border-forest-800/60">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-xs text-sand-200">
                      <strong className="text-sand-50 block font-medium">小分子生物利用度優化</strong>
                      利用酵素靶向水解專利，將大分子膠原與胜肽降解為小分子，吸收效能大幅提升。
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-forest-800/80 flex items-center justify-between text-xs text-emerald-300/80 font-mono">
                <span>檢驗機制：SGS 雙重送驗 + 自主質譜定性</span>
                <span>容錯率：0.0%</span>
              </div>
            </div>

          </div>

          {/* Card 2: Soil Sincerity */}
          <div className="relative group rounded-3xl bg-gradient-to-b from-forest-900 to-forest-950 border border-bronze-500/40 overflow-hidden shadow-2xl flex flex-col justify-between hover:border-bronze-300/70 transition-all duration-300">
            
            {/* Visual Photo Header */}
            <div className="relative h-56 overflow-hidden bg-forest-950">
              <img
                src="/images/kason-tea-plantation.png"
                alt="傅克深 茶園巡視照"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-forest-950/80 backdrop-blur-md border border-bronze-400/50 text-[11px] font-mono text-bronze-300 flex items-center gap-1.5">
                <Mountain className="w-3.5 h-3.5" />
                <span>DIMENSION 02 ｜ 梨山高山茶園實地踏查</span>
              </div>
            </div>

            <div className="p-8 sm:p-10 space-y-6 flex-grow flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-forest-800">
                  <h3 className="font-serif text-2xl font-bold text-sand-100">
                    土地赤誠・踏足泥濘
                  </h3>
                  <span className="text-xs px-2.5 py-1 rounded bg-bronze-950 border border-bronze-500/40 text-bronze-300 font-mono">
                    TERROIR
                  </span>
                </div>

                <p className="text-sand-300 text-sm leading-relaxed text-justify">
                  身著深綠色訂製西裝站在高山茶園中，眼神冷峻而堅定。「坐在辦公室吹冷氣的執行長，永遠不懂什麼叫山頭氣。好東西是老農在海拔兩千公尺披星戴月摘下來的，我必須親自向土地致敬。」
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-forest-950/60 border border-forest-800/60">
                    <HeartHandshake className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                    <div className="text-xs text-sand-200">
                      <strong className="text-sand-50 block font-medium">契作保價收購高於市場 35%</strong>
                      保障茶農與牧農專注遵循高標準生態耕作，杜絕低價傾銷與混充劣質進口茶葉的惡性循環。
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-forest-950/60 border border-forest-800/60">
                    <HeartHandshake className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                    <div className="text-xs text-sand-200">
                      <strong className="text-sand-50 block font-medium">總裁親自踏查全台契作基地</strong>
                      每年超過三分之一時間深入梨山茶園、嘉義竹崎森林農場與苗栗三義原生復育基地。
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-forest-950/60 border border-forest-800/60">
                    <HeartHandshake className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                    <div className="text-xs text-sand-200">
                      <strong className="text-sand-50 block font-medium">守護台灣原生種基因庫</strong>
                      契作復育台灣黑羽土雞原種、原生椴木牛樟芝與高山古法品種，讓在地瑰寶揚名世界。
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-forest-800/80 flex items-center justify-between text-xs text-bronze-300/90 font-mono">
                <span>契作守則：產銷全履歷 + 保障世代收益</span>
                <span>溢價扶持：+35%</span>
              </div>
            </div>

          </div>

        </div>

        {/* Central Quote Callout */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 border border-bronze-500/30 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono tracking-widest text-bronze-400 uppercase">
              Founder's Philosophy
            </span>
            <blockquote className="font-serif text-xl sm:text-2xl text-sand-100 font-medium italic">
              「穿著高級西裝跟世界談判，穿著雨鞋向台灣土地低頭。兩者都是傅克深。」
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
};
