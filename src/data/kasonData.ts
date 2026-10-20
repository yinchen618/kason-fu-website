export interface TimelineItem {
  year: string;
  period: string;
  institution: string;
  location: string;
  role: string;
  category: 'education' | 'overseas' | 'breakthrough' | 'brand';
  summary: string;
  highlights: string[];
  quote?: string;
}

export interface Tenet {
  id: string;
  number: string;
  title: string;
  englishTitle: string;
  subtitle: string;
  statement: string;
  details: string[];
}

export interface FieldStory {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  location: string;
  narrative: string;
  takeaway: string;
  metric: string;
  metricLabel: string;
}

export interface ProductItem {
  id: string;
  name: string;
  englishName: string;
  category: string;
  description: string;
  process: string;
  origin: string;
  specs: string;
  ceoSignatureNote: string;
  badge: string;
}

export interface HonorItem {
  year: string;
  title: string;
  organization: string;
  category: string;
  description: string;
}

export const FOUNDER_INFO = {
  name: "傅克深",
  englishName: "Kason Fu",
  age: 38,
  title: "創辦人暨執行長 (Founder & CEO)",
  company: "深霖生醫與嚴選農作",
  englishCompany: "SHEN LIN BIONICS & SELECT",
  coreQuote: "每一批產品封箱前，我的舌頭與實驗室的質譜儀，必須雙重放行。我要讓世界知道，台灣產出來的，就是世界頂級。",
  subQuote: "真正的奢華，不是浮誇的繁複包裝，而是大自然中最純淨的無添加力量。",
  bioSummary: "38歲，生長於台灣茶香世家，後赴美深造農業生化與食品科學，並於瑞士尖端生醫研發中心歷練多年。2018年毅然返台，接掌家族事業並大刀闊斧重塑品牌，創立「深霖生醫」。他褪去海外實驗室白袍與冷峻外表，長年穿梭於台灣海拔2000公尺高山茶園與在地契作農場，堅持親自下鄉試吃監督。他以國際級生醫純化標準，為台灣在地風土注入極致科技，定義亞洲當代奢華養生新標竿。",
  stats: [
    { label: "契作農地標準檢驗", value: "481+", unit: "項零檢出" },
    { label: "小農保價收購溢價", value: "+35%", unit: "高於市價" },
    { label: "自研生醫冷萃專利", value: "7", unit: "項核心技術" },
    { label: "國際品質評鑑特金獎", value: "3", unit: "度蟬聯" }
  ]
};

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2006 – 2010",
    period: "青年啟蒙",
    institution: "國立臺灣大學 (National Taiwan University)",
    location: "台北，台灣",
    role: "生化科技學系 學士 / 副修農業經濟學",
    category: "education",
    summary: "求學期間深入鑽研台灣本土特有植物多酚與禽產胜肽結構，課餘常隨教授走訪中南部產地，奠定日後結合「頂尖農業 × 現代生醫」的核心視野。",
    highlights: [
      "台大生化實驗室天然物活性多酚專案核心成員",
      "多次深入嘉義阿里山與南投茶區田野調查",
      "獲頒大專優秀學生生化專題研究獎"
    ],
    quote: "台灣這片島嶼的物種多樣性與日夜溫差，能醞釀出全世界最複雜細膩的植物活性。"
  },
  {
    year: "2010 – 2012",
    period: "常春藤深造",
    institution: "美國康乃爾大學 (Cornell University)",
    location: "伊薩卡，美國紐約州",
    role: "食品科學與植物生化碩士 (M.S. in Food Science & Plant Biochemistry)",
    category: "education",
    summary: "專攻植萃功能性分子穩定性及低溫臨界萃取技術。師從國際食品科學泰斗，建立對食品生化質譜分析與安全數據無可妥協的嚴謹態度。",
    highlights: [
      "北美食品科學協會（IFT）年度傑出青年研究獎提名",
      "發表天然抗氧化分子低溫封存專利文獻",
      "完成跨國農產冷鏈生物活性保留模型"
    ],
    quote: "頂級科學不是為了取代自然，而是為了把自然最脆弱珍貴的活性完整封存到人體入口的那一刻。"
  },
  {
    year: "2012 – 2016",
    period: "瑞士生醫淬鍊",
    institution: "瑞士洛桑 頂級健康生醫機構 (Global Botanical Extraction Lab)",
    location: "洛桑，瑞士",
    role: "全球植萃活性配方 資深研發工程師 (Senior Formulation Scientist)",
    category: "overseas",
    summary: "在高度無菌、儀器精密如半導體廠的瑞士實驗室中，負責全球高端保健機能食品的無添加配方設計。親歷歐洲超高標準的 Clean Label 零賦形劑浪潮。",
    highlights: [
      "主導兩項小分子胜肽分子靶向提純工藝開發",
      "建立全品項零人工賦形劑配方安全標準規程",
      "帶領跨國團隊通過歐盟 EFSA 與美國 FDA cGMP 嚴格稽核"
    ],
    quote: "在歐洲我學到最冷靜的規範；但越看那些標榜昂貴的進口原料，我心裡越想著台灣高山上的那片茶園。"
  },
  {
    year: "2016 – 2018",
    period: "矽谷創投資歷",
    institution: "美國加州矽谷 農業科技創投基金 (AgTech Horizon Capital)",
    location: "矽谷 / 舊金山，美國",
    role: "農業供應鏈與品質風控總監 (Director of Supply Chain & QA)",
    category: "overseas",
    summary: "實地審查歐洲、北美、日本超過 80 個智慧契作農場與垂直農業項目，熟稔國際資本市場運作與可持續農業供應鏈構建。",
    highlights: [
      "參與 1.2 億美元規模的高端有機機能農作私募基金評估",
      "建立氣候變遷下高山經濟作物抗逆活性評估指標",
      "取得瑞士洛桑管理學院 (IMD) 高階永續供應鏈認證"
    ],
    quote: "未來的奢侈品不再是人工炫目的鑽石，而是真正沒有農藥、重金屬與生長激素的純淨天然物。"
  },
  {
    year: "2018 – 2020",
    period: "返鄉破局重塑",
    institution: "深霖實業集團（家族初代傳統農業進出口）",
    location: "南投 / 台北，台灣",
    role: "新事業轉型總經理 (General Manager of Innovation)",
    category: "breakthrough",
    summary: "30歲毅然辭去海外高薪返台。面對家族老牌傳統農貿將台灣珍稀高山茶、土雞與原生蕈菇混充低價販售的困境，他力排眾議，大刀闊斧砍掉 40% 低毛利代工線。",
    highlights: [
      "推行「小農保價契作」全面取代傳統壓價收購機制",
      "力抗內部保守派質疑，投資數千萬建立生醫級獨立檢驗室",
      "全面終止低階大宗物資貿易，確立高端純淨品牌路線"
    ],
    quote: "長輩說生意賺錢就好，我說如果台灣最好的東西只能秤斤賤賣，這不是生意，這是暴殄天物。"
  },
  {
    year: "2020 – 至今",
    period: "世界頂級品牌化",
    institution: "深霖生醫與嚴選農作 (SHEN LIN BIONICS & SELECT)",
    location: "台北信義總部 / 產地試驗所",
    role: "創辦人暨執行長 (Founder & CEO)",
    category: "brand",
    summary: "正式創立深霖品牌，以深綠與金屬銅的沉穩高奢美學，結合「總裁親自試吃監督」與「生醫醫藥級質譜雙檢驗」，成為台灣頂級節慶贈禮與高端私廚養生指標品牌。",
    highlights: [
      "連續三年榮獲世界品質評鑑大賞 (Monde Selection) 特級金獎",
      "獲選《Tatler》台灣 Generation T (Gen.T) 亞洲新銳青年領袖",
      "契作農地突破 300 公頃，開創台灣有機農作高價外銷新紀元"
    ],
    quote: "我要讓世界看見，深霖裝在金屬銅盒裡的，是台灣土地淬鍊出來的傲骨與極致。"
  }
];

export const TENETS_DATA: Tenet[] = [
  {
    id: "tenet-1",
    number: "01",
    title: "泥濘與實驗室同等重要",
    englishTitle: "The Soil & The Spectrometer",
    subtitle: "辦公室與冷氣房，永遠驗不出真正的好茶與原生雞隻。",
    statement: "只看檢驗報告的總裁做不出有靈魂的產品。土壤的酸鹼值、採收那一刻的露水濕度，必須親自用腳踩過、用手捏過才知道。",
    details: [
      "每逢採茶與收穫季，傅克深必然進駐南投與嘉義高山產地。",
      "以高解析度攜帶型折光儀與土壤感測器，現場檢測生化活性指針。",
      "西裝換成工作服，與老農席地而坐品嚐生茶湯與母湯。"
    ]
  },
  {
    id: "tenet-2",
    number: "02",
    title: "零化學賦形劑，純粹的代價由我承擔",
    englishTitle: "Zero-Additive Ultimatum",
    subtitle: "如果為了良率與防腐而妥協，那就是對消費者的背叛。",
    statement: "添加黏著劑、化學增稠劑或人工香料，那不叫技術，那叫偷懶。深霖寧可產量只有別人的一半，也絕不妥協一滴純度。",
    details: [
      "全品項 100% 拒絕人工香精、人工色素、防腐劑與化學凝膠。",
      "採用造價昂貴的超臨界低溫真空萃取，完整鎖住小分子活性胜肽。",
      "每批成品委託國際第三方實驗室進行 481 項農殘與重金屬雙重盲測。"
    ]
  },
  {
    id: "tenet-3",
    number: "03",
    title: "守護在地，利潤實質共享",
    englishTitle: "Fair Value, Shared Dignity",
    subtitle: "不壓榨產地，農民才有餘裕專心種出世界頂級的農作。",
    statement: "我們給予簽約契作小農高於市場 30%~35% 的保價收購，唯一的交換條件只有一個：依照深霖的嚴苛生態標準耕作，不落一顆化學農藥。",
    details: [
      "建立永續契作合作社，保障友善耕作農民的世代生計。",
      "引進智慧農業環境監測系統，全額補助農民技術升級轉型。",
      "定期回饋產地鄉鎮教育與青年返鄉農創基金。"
    ]
  },
  {
    id: "tenet-4",
    number: "04",
    title: "高奢的本質，是純淨與安心",
    englishTitle: "True Luxury is Absolute Purity",
    subtitle: "最高等級的饋贈，是讓至親之人在入口瞬間感受到土地的溫厚與心安。",
    statement: "真正懂得生活的人，不屑浮誇的鍍金假象。他們要的是一盒能安心送給至親長輩、拆開即見大地誠意的極致結晶。",
    details: [
      "包裝採用深綠大地色搭配金屬冷銅材質，融合低調奢華與環保永續理念。",
      "附有逐批檢驗履歷二維碼與傅克深親簽品管放行印記。",
      "專為高資產家庭、商務領袖與海外國賓打造的台灣極致伴手禮。"
    ]
  }
];

export const FIELD_STORIES: FieldStory[] = [
  {
    id: "story-1",
    tag: "品質事件",
    title: "被退貨的 1,500 斤頂級高山春茶",
    subtitle: "只因 2.3% 多酚穩定度落差，執行長親自下令全數封存",
    location: "台灣 梨山 2,100m 契作茶園",
    narrative: "深霖創立第二年春季，一批市價高達數百萬元的梨山有機烏龍茶採收完畢。無論茶乾外觀、揉捻手藝還是茶湯金黃度，在傳統評茶大師眼中皆為罕見極品。然而，深霖生醫實驗室的液相層析儀（HPLC）測出該批茶葉因採收前連續兩日山區偶陣雨，特定多酚抗氧化活性比合約標準低了 2.3%。契作老農眼眶泛紅苦求通融，但傅克深沉默了三分鐘後，面無表情地下令：『整批不得貼上深霖金標。』他自掏腰包依照全額合約價買下這 1,500 斤茶葉轉作研發原料，自己承受所有虧損。自此，全台灣農友深知：『傅克深的標準，不可動搖。』",
    takeaway: "品質不是口號，是當面臨百萬虧損時，你依然選擇守住的那條底線。",
    metric: "2.3%",
    metricLabel: "不可妥協的活性容差率"
  },
  {
    id: "story-2",
    tag: "總裁日常",
    title: "深灰訂製西裝與滿是黃土的雨鞋",
    subtitle: "上午十點的國際董事會，下午兩點的泥濘山坡",
    location: "台北信義總部 → 南投中寮有機林地",
    narrative: "在金融界與高端精品圈，傅克深以冷靜寡言、輪廓分明的冷峻形象著稱，始終穿著英式合身深灰手工西裝。但只有深霖內部員工知道，他的座車後廂永遠常備著一雙厚重的黃土雨鞋與生化採樣箱。上午他可能還在台北萬豪酒店以流利英文與瑞士生醫代表簽訂技術授權合約；下午兩點，司機已經載著他穿梭在南投狹窄的林道上。他換上雨鞋，逕自踩進深達腳踝的黑沃土中，蹲在放山黑羽土雞的棚舍旁，用手直接捧起土質嗅聞發酵氣味，並就著山泉水吃著老農太太煮的冷地瓜。",
    takeaway: "不敬畏泥土的人，沒有資格談論生醫純淨。",
    metric: "120+",
    metricLabel: "年度親赴產地實地勘驗天數"
  },
  {
    id: "story-3",
    tag: "嚴選機制",
    title: "總裁舌尖與質譜儀的雙重放行令",
    subtitle: "每一批滴雞精與燕窩，都要經過創辦人的親口審判",
    location: "深霖生醫極淨試驗所",
    narrative: "在深霖，任何新批次產品在出廠前，都有一個全業界最令研發團隊神經緊繃的關卡：『總裁盲測會議』。會議桌上一字排開沒有任何標籤的樣品杯，傅克深會以專業杯測標準逐一品評喉韻、黏稠度與天然甘味，並盲測辨識出是否有任何微量的雜質或過火焦味。品評完畢後，桌上才會攤開由 SGS 與深霖實驗室出具的高達數十頁的同批質譜檢驗報表。只有感官與科學數據同時達到 100 分，他才會在放行批號上落下他的個人墨水鋼筆簽名。",
    takeaway: "科技能提供冰冷的數字，只有人的真心才能品出大地的回甘。",
    metric: "100%",
    metricLabel: "創辦人親自逐批品嚐放行"
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "prod-1",
    name: "深霖・梨山雲霧有機極品冬茶禮盒",
    englishName: "Lishan Cloud Reserve Organic High Mountain Tea",
    category: "高山嚴選有機茶",
    description: "海拔 2,200 公尺終年雲霧繚繞之梨山頂級冷霜茶園。手採一心二葉，透過深霖低溫冷鏈休眠技術封存高山幽冷花香與醇厚山頭氣韻。",
    process: "古法輕發酵 × 48小時生醫遠紅外線低溫恆濕慢焙，保留高含量茶多酚與茶氨酸。",
    origin: "台灣 台中梨山極上茶區（契作編號 #LS-018）",
    specs: "75g × 2罐 原木金屬銅裝尊貴禮盒",
    ceoSignatureNote: "開湯第一泡是冷冽的蘭花香，第三泡湧出深厚甘醇，這是只有未曾被農藥侵擾的原始森林泥土才能培育出的傲骨。",
    badge: "Monde Selection 特級金獎"
  },
  {
    id: "prod-2",
    name: "深霖・冷萃小分子黑羽土雞滴雞精",
    englishName: "Bio-Purified Black Feather Drip Chicken Essence",
    category: "在地小農極致生醫加工品",
    description: "嚴選台灣高山人道放牧 180 天原生黑羽黑肉土雞。不加一滴水，經 12 小時低溫漸進循環滴煉，利用專利微過濾純化小分子膠原胜肽與總支鏈胺基酸（BCAA）。",
    process: "0脂肪、0膽固醇、0人工抗生素。小分子胜肽吸收率高於傳統煲湯 3.8 倍。",
    origin: "台灣 嘉義竹崎高山原生林農場（契作編號 #CY-042）",
    specs: "60ml × 12入 恆溫金屬銅禮盒",
    ceoSignatureNote: "市面上的滴雞精常帶有腥臊味或過度油膩，深霖做的是生醫級清透甘醇。喝下去五秒鐘，溫熱直達胃底。",
    badge: "世界頂級 iTQi 風味絕佳 3 星獎"
  },
  {
    id: "prod-3",
    name: "深霖・極濃小分子金絲燕窩胜肽飲",
    englishName: "Imperial Pure Swiftlet Nest Bio-Peptide Extract",
    category: "天然無添加高端保健品",
    description: "每瓶含有高濃度天然特級金絲燕窩，蘊含純淨天然唾液酸（NANA）。結合瑞士低溫酵素靶向水解專利，將珍稀燕窩活性轉化為小分子胜肽，好吸收不黏膩。",
    process: "無添加漂白劑、無人工防腐劑、無化學增稠凝膠、微甜採用台灣在地無毒紅棗冰糖熬汁。",
    origin: "頂級溯源天然金絲洞燕與台灣嚴選在地調和",
    specs: "75ml × 6入 典藏木質皮盒",
    ceoSignatureNote: "很多人問我燕窩為什麼能做到這麼清爽？因為我們沒有用任何化學膠體來充數。你每一口吃到的，都是紮實純淨的膠原胜肽。",
    badge: "國際 Clean Label 雙潔淨標章認證"
  },
  {
    id: "prod-4",
    name: "深霖・台灣野山原生樟芝多醣活萃飲",
    englishName: "Formosa Antrodia Cinnamomea Polysaccharide Active Drink",
    category: "深霖生醫機能補給",
    description: "採用台灣特有種椴木栽培原生牛樟芝，提取高純度總三萜類（Triterpenoids）與活性 β-多醣體。專為現代高壓菁英打造的極致元氣守護者。",
    process: "低溫超臨界流體純化技術，去除苦澀雜質，保留原始生物活性指標成分。",
    origin: "台灣 苗栗三義原生復育深林基地",
    specs: "20ml × 15支 霧面深綠金銅精裝",
    ceoSignatureNote: "台灣特有的牛樟芝是全球生醫界讚嘆的瑰寶。深霖的任務就是用最乾淨透明的數據，將它的護衛力量完美呈現在世界面前。",
    badge: "生醫研發專利字號 #I782914"
  }
];

export const HONORS_DATA: HonorItem[] = [
  {
    year: "2024",
    title: "世界品質評鑑大賞 (Monde Selection) 特級金獎 (Grand Gold)",
    organization: "國際品質評鑑組織 (布魯塞爾)",
    category: "國際品質認證",
    description: "以「深霖梨山極品有機冬茶」與「冷萃黑羽滴雞精」獲頒全球最高榮譽特級金獎，評審團特別讚譽其潔淨無添加之純粹風味。"
  },
  {
    year: "2023",
    title: "比利時 iTQi 國際頂級美味三星獎章 (Superior Taste Award 3 Stars)",
    organization: "International Taste Institute",
    category: "國際風味權威",
    description: "由歐洲米其林主廚與品酒師盲測評選，深霖系列品項以 92.4% 罕見高分摘下最高榮譽三星評等。"
  },
  {
    year: "2023",
    title: "獲選《Tatler》台灣 Generation T (Gen.T) 亞洲新銳青年領袖",
    organization: "Tatler Asia",
    category: "商業影響力",
    description: "肯定傅克深以深厚海外生醫科研背景振興在地農業，開創台灣高端生技與有機農產外銷新典範之卓越貢獻。"
  },
  {
    year: "2022",
    title: "中華民國永續農業科技創新聯盟 副理事長",
    organization: "台灣農業科技發展促進會",
    category: "社會公職",
    description: "倡導小農高價契作機制與生物農藥減量示範區，推動台灣精品農產品邁向碳足跡溯源認證。"
  },
  {
    year: "2021",
    title: "國立臺灣大學 生化科技學系 客座實務專家",
    organization: "國立臺灣大學",
    category: "學術傳承",
    description: "定期主持青年返鄉農創育成專題論壇，啟發新一代台灣農業生醫交叉領域科研人才。"
  }
];
