import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: string;
  defaultProduct?: string;
}

export const ConciergeModal: React.FC<ConciergeModalProps> = ({
  isOpen,
  onClose,
  defaultType = '節慶頂級禮盒訂製',
  defaultProduct = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    company: '',
    phone: '',
    email: '',
    inquiryType: defaultType,
    product: defaultProduct,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3s if needed, or user can click
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-gradient-to-b from-forest-900 to-forest-950 border border-bronze-400/60 p-6 sm:p-10 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-sand-400 hover:text-sand-50 hover:bg-forest-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-bronze-500/20 border border-bronze-400 flex items-center justify-center mx-auto text-bronze-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-sand-50">
              感謝您的預約垂詢
            </h3>
            <p className="text-sand-300 text-sm max-w-md mx-auto leading-relaxed">
              深霖生醫禮賓秘書室已妥善接收您的商務與禮盒需求。我們將於 24 小時內指派專人與您聯繫。
            </p>
            <div className="pt-6">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-bronze-500 hover:bg-bronze-400 text-forest-950 font-bold text-xs tracking-wider uppercase transition-colors"
              >
                返回官網
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Modal Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-bronze-400 uppercase tracking-widest mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PRIVATE CONCIERGE & INQUIRY</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-sand-50">
                深霖私人禮賓與商務預約
              </h3>
              <p className="text-sand-400 text-xs sm:text-sm mt-1">
                專屬貴賓企業贈禮訂製 ｜ 契作合作洽商 ｜ 傅克深演講與專訪
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-sand-300 uppercase mb-1">
                    姓名 / 貴賓稱謂 *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="傅先生 / 陳總經理"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-forest-950 border border-forest-800 focus:border-bronze-400 text-sand-100 text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-sand-300 uppercase mb-1">
                    任職機構 / 職稱
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="深霖生醫 / 董事特助"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-forest-950 border border-forest-800 focus:border-bronze-400 text-sand-100 text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-sand-300 uppercase mb-1">
                    聯絡電話 / 行動電話 *
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0912-345-678"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-forest-950 border border-forest-800 focus:border-bronze-400 text-sand-100 text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-sand-300 uppercase mb-1">
                    電子郵件 (E-mail) *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="vip@domain.tw"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-forest-950 border border-forest-800 focus:border-bronze-400 text-sand-100 text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-sand-300 uppercase mb-1">
                  洽詢項目類型
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-forest-950 border border-forest-800 focus:border-bronze-400 text-sand-100 text-sm focus:outline-none"
                >
                  <option value="節慶頂級禮盒客製">企業頂級節慶禮盒客製（茶禮／滴雞精／燕窩）</option>
                  <option value="私藏名品個人訂購">高資產個人私藏養生定期配送</option>
                  <option value="在地小農契作與收購合作">台灣在地友善小農契作合作諮詢</option>
                  <option value="傅克深個人專訪與演講">創辦人媒體專題採訪／青年返鄉創生演講</option>
                  <option value="其他高階商務合作">其他高端通路／海外代理洽商</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-sand-300 uppercase mb-1">
                  需求說明或備註
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="請簡述您的需求、預計贈禮盒數或預期會晤時間..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-forest-950 border border-forest-800 focus:border-bronze-400 text-sand-100 text-sm focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-bronze-500 via-bronze-400 to-bronze-500 hover:from-bronze-400 hover:to-bronze-300 text-forest-950 font-bold text-sm tracking-wider uppercase transition-all shadow-lg shadow-bronze-500/20 flex items-center justify-center gap-2"
                >
                  <span>確認送出預約需求</span>
                  <Send className="w-4 h-4" />
                </button>
                <div className="mt-2 text-center text-[11px] text-sand-400 flex items-center justify-center gap-1 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-bronze-400" />
                  <span>深霖生醫承諾嚴格保密您的私人與商務資訊</span>
                </div>
              </div>
            </form>

          </div>
        )}

      </div>
    </div>
  );
};
