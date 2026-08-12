// ==========================================
// SAIDOW.COM - PROJECT DATA
// Her proje için detay sayfası içeriği (project.html?id=slug)
// TR = varsayılan, _en = İngilizce çeviri
// ==========================================

const PROJECTS = {

  /* ---------- DESIGN ---------- */

  "momora": {
    section: "Endüstriyel Tasarım",
    category: "Mezuniyet Projesi / Medikal",
    title: "MOMORA — Maternal Care Kit",
    meta: "İTÜ EUT 4923E Mezuniyet Projesi · 2026",
    desc: "Hamile anneler için kan basıncı takibi, dinamolu hava şişirme mekanizması ve modüler ısı terapisi sunan medikal bakım kiti. Kol bandı (sleeve), kan basıncı ölçüm modülü ve ısıtma modülünden (Warming Care Module) oluşan modüler sistem; markalama, ambalaj tasarımı ve teknik çizimlerle birlikte uçtan uca geliştirildi.",
    section_en: "Industrial Design",
    category_en: "Graduation Project / Medical",
    title_en: "MOMORA — Maternal Care Kit",
    meta_en: "ITU EUT 4923E Graduation Project · 2026",
    desc_en: "A medical care kit for pregnant mothers featuring blood pressure monitoring, a dynamo-powered air inflation mechanism, and modular heat therapy. The modular system comprises a sleeve, blood pressure module, and Warming Care Module — developed end-to-end with branding, packaging design, and technical drawings.",
    images: 7
  },

  "yacht": {
    section: "Endüstriyel Tasarım",
    category: "Gemi & Yat Tasarımı",
    title: "12m Lobster Yat Tasarımı",
    meta: "İTÜ ENT 453E Yat Tasarımı Temel İlkeleri · 2025-2026",
    desc: "12 metrelik Lobster tipi yatın konsept geliştirme, eskiz, hidrostatik analiz, 3D yüzey modelleme, kesit (sections) ve iç mekan tasarımını kapsayan bütünsel yat tasarım projesi. Proje kapsamında hidrostatik değerleri otomatik hesaplayan Rhino eklentisi de geliştirildi.",
    section_en: "Industrial Design",
    category_en: "Naval & Yacht Design",
    title_en: "12m Lobster Yacht Design",
    meta_en: "ITU ENT 453E Basic Principles of Yacht Design · 2025-2026",
    desc_en: "A holistic yacht design project covering concept development, sketching, hydrostatic analysis, 3D surface modeling, sections, and interior design for a 12-meter Lobster type yacht. A Rhino plugin for automatic hydrostatic calculations was also developed as part of the project.",
    images: 5
  },

  "funky-daft": {
    section: "Endüstriyel Tasarım",
    category: "Yapısal Ürün Tasarımı",
    title: "FUNKY DAFT — Yapısal Hoparlör",
    meta: "İTÜ Yapısal Hoparlör Tasarımı · Organik Ses Yontma",
    desc: "Daft Punk müzik altyapısının yapay zeka destekli 3D ses dalga formuna dönüştürülmesiyle tasarlanan amorf, lavanta renkli akustik hoparlör. Ortografik görünüşler, teknik çizimler, enjeksiyon kalıplama odaklı patlatılmış görünüm (exploded view) ve mekan içi render çalışmalarıyla tamamlandı.",
    section_en: "Industrial Design",
    category_en: "Structural Product Design",
    title_en: "FUNKY DAFT — Structural Speaker",
    meta_en: "ITU Structural Speaker Design · Organic Sound Sculpting",
    desc_en: "An amorphous lavender acoustic speaker designed by transforming Daft Punk's music structure into an AI-assisted 3D sound waveform. Completed with orthographic views, technical drawings, injection molding-focused exploded view, and interior render studies.",
    images: 6
  },

  "urban-nexus": {
    section: "Endüstriyel Tasarım",
    category: "Kent Mobilyası / Stüdyo II",
    title: "Maçka Urban Nexus",
    meta: "İTÜ Kent Mobilyası Tasarımı · Maçka Parkı · 2024-2025",
    desc: "Maçka Parkı için siyah çelik ve su geçirmez ahşaptan (WPC) üretilen modüler kent mobilyası ailesi: yürüyüş yolu aydınlatmaları, piknik formasyonu, çöp kutusu, oturma elemanı, dar masa ve çeşme. Saha senaryoları, teknik çizimler ve fiziksel model ile desteklendi.",
    section_en: "Industrial Design",
    category_en: "Urban Furniture / Studio II",
    title_en: "Maçka Urban Nexus",
    meta_en: "ITU Urban Units Design · Maçka Park · 2024-2025",
    desc_en: "A modular urban furniture family crafted from black steel and waterproof wood (WPC) for Maçka Park: walkway lighting, picnic formations, waste bins, seating elements, narrow tables, and fountains. Supported by field scenarios, technical drawings, and a physical model.",
    images: 6
  },

  "multimate": {
    section: "Endüstriyel Tasarım",
    category: "Mekanik Ürün Tasarımı",
    title: "MultiMate Tool — Takı Sanatı Kiti",
    meta: "İTÜ Endüstriyel Tasarım Stüdyo III · 2024",
    desc: "Takı tasarımcıları için geliştirilen çok amaçlı el aleti kiti: ergonomik yan keski, çıtçıt pensesi, mezura ve iplik takma sistemi tek üründe birleştirildi. Moodboard, süreç eskizleri, mock-up'lar ve Rhinoceros teknik çizimleriyle geliştirildi.",
    section_en: "Industrial Design",
    category_en: "Mechanical Product Design",
    title_en: "MultiMate Tool — Jewelry Crafting Kit",
    meta_en: "ITU Industrial Design Studio III · 2024",
    desc_en: "A multi-purpose hand tool kit for jewelry craftspeople: ergonomic side cutter, snap pliers, tape measure, and threader system unified in a single product. Developed with moodboards, process sketches, mock-ups, and Rhinoceros technical drawings.",
    images: 5
  },

  "catia-chess": {
    section: "Endüstriyel Tasarım",
    category: "Parametrik Katı Modelleme",
    title: "Askeri Temalı CATIA Satranç Takımı",
    meta: "İTÜ ENT 230E Parametrik Katı Modelleme ve Tasarım · CATIA V5",
    desc: "II. Dünya Savaşı temalı parametrik satranç takımı: Piyon (asker miğferi), Kale (beton sığınak), At (Me 262 savaş uçağı), Fil (füze), Vezir ve Şah figürleri ile kabartma haritalı satranç tahtası. Tüm parçalar CATIA V5 ile parametrik katı model olarak tasarlandı ve teknik çizimleri üretildi.",
    section_en: "Industrial Design",
    category_en: "Parametric Solid Modeling",
    title_en: "Military Themed CATIA Chess Set",
    meta_en: "ITU ENT 230E Parametric Solid Modeling and Design · CATIA V5",
    desc_en: "A WWII-themed parametric chess set: Pawn (soldier helmet), Rook (concrete bunker), Knight (Me 262 warplane), Bishop (missile), Queen and King pieces with a relief map chessboard. All parts were modeled as parametric solids in CATIA V5 with technical drawings.",
    images: 7
  },

  "smart-faucet": {
    section: "Endüstriyel Tasarım",
    category: "Provokatif Tasarım & Mekanizma · Grup Projesi",
    title: "Provokatif Akıllı Armatür",
    meta: "İTÜ EUT 367E Mekanik Tasarıma Giriş · 2024-2025 · Grup Projesi (Said Uludağ, Ege Köse, Kuzey Şahin, Nihan Akbaş, Ahmet İspir)",
    desc: "Su tüketimi bilincini artırmayı hedefleyen provokatif akıllı armatür. Dokunmatik ekran, hareket sensörü, basınç kademeleri ve debi sınırlaması ile kullanıcıyı davranış değişikliğine zorlayan 'forced choice / behaviour barrier' mekanizması üzerine kurgulandı. Problem analizi, provokasyon konsepti, parça çözümü, kullanıcı senaryosu ve gerçekçi mekan renderlarıyla sunuldu.",
    section_en: "Industrial Design",
    category_en: "Provocative Design & Mechanism · Group Project",
    title_en: "Provocative Smart Faucet",
    meta_en: "ITU EUT 367E Intro to Mechanical Design · 2024-2025 · Group Project (Said Uludağ, Ege Köse, Kuzey Şahin, Nihan Akbaş, Ahmet İspir)",
    desc_en: "A provocative smart faucet designed to raise water consumption awareness. Built around a 'forced choice / behaviour barrier' mechanism featuring a touch screen, motion sensor, pressure stages, and flow restriction. Presented with problem analysis, provocation concept, part breakdown, user scenarios, and realistic interior renders.",
    images: 7
  },

  "halo-studio": {
    section: "Endüstriyel Tasarım",
    category: "Spekülatif Tasarım · Grup Projesi",
    title: "Halo Studio — Akıllı Çalışma Ortamı",
    meta: "İTÜ EUT 419E Endüstriyel Tasarım Stüdyo IV · 2025-2026 · Grup Projesi (Nisan Horuz, M. Said Uludağ, Murad İsgandarlı)",
    desc: "Geleceğin akıllı çalışma ortamları için spekülatif tasarım çalışması: sürüklenebilir raylı koltuk, yürünebilir zemin paneli, rollable OLED ekran ünitesi ve akıllı masa sistemi. Teknik çizimler, patlatılmış görünüm, malzeme analizi ve fiziksel mock-up ile desteklendi.",
    section_en: "Industrial Design",
    category_en: "Speculative Design · Group Project",
    title_en: "Halo Studio — Smarter Environment",
    meta_en: "ITU EUT 419E Industrial Design Studio IV · 2025-2026 · Group Project (Nisan Horuz, M. Said Uludağ, Murad İsgandarlı)",
    desc_en: "A speculative design study for future smart work environments: draggable rail chair, walkable floor panel, rollable OLED screen unit, and smart desk system. Supported by technical drawings, exploded views, material analysis, and physical mock-ups.",
    images: 0
  },

  "firetape": {
    section: "Endüstriyel Tasarım",
    category: "Spekülatif Tasarım · Grup Projesi",
    title: "Firetape — Spekülatif Ürün",
    meta: "İTÜ EUT 419E Endüstriyel Tasarım Stüdyo IV · 2025-2026 Isınma Projesi · Grup Projesi (Dilara Ağar, M. Said Uludağ, Nisan Horuz, Murad İsgandarlı)",
    desc: "2030 gelecek senaryosu üzerine kurgulanan spekülatif ürün konsepti. Fosil yakıt yasağı, plastik kullanımının yasaklanması ve biyomalzeme zorunluluğu çerçevesinde tasarlanan nanokimyasal ateş başlatma bandı. Kullanıcı senaryosu ve render çalışmalarıyla sunuldu.",
    section_en: "Industrial Design",
    category_en: "Speculative Design · Group Project",
    title_en: "Firetape — Speculative Product",
    meta_en: "ITU EUT 419E Industrial Design Studio IV · 2025-2026 Warm-Up Project · Group Project (Dilara Ağar, M. Said Uludağ, Nisan Horuz, Murad İsgandarlı)",
    desc_en: "A speculative product concept set in a 2030 future scenario. A nanochemical fire starter tape designed under fossil fuel bans, plastic prohibition, and mandatory biomaterials. Presented with user scenarios and render studies.",
    images: 0
  },

  "marble-stand": {
    section: "Endüstriyel Tasarım",
    category: "Mekan & Stant Tasarımı",
    title: "Turkish Stones — Mermer Sergi Standı",
    meta: "İTÜ EUT 355E Mekan Organizasyonu · Final Jüri 2025",
    desc: "Türk mermerlerinin zenginliğini sergileyen fuar standı tasarımı: ham bloktan cilalı yüzeye üretim sürecini anlatan interaktif deneyim alanı, mermer kule vitrinler, gizli depolamalı oturma/masa alanı ve kilitli küre mekanizmalı mermer bardak altlığı hediyelikleri.",
    section_en: "Industrial Design",
    category_en: "Space & Exhibition Stand",
    title_en: "Turkish Stones — Marble Exhibition Stand",
    meta_en: "ITU EUT 355E Space Organization · Final Jury 2025",
    desc_en: "A trade fair stand design showcasing the richness of Turkish marbles: an interactive experience zone illustrating the production process from raw block to polished surface, marble tower vitrines, hidden-storage seating/table area, and locked-sphere marble coaster souvenirs.",
    images: 6
  },

  "ozlem-kristal": {
    section: "Endüstriyel Tasarım",
    category: "Cam & Metal İmalatı / Staj",
    title: "Özlem Kristal — Sanatsal Cam Objeler",
    meta: "Endüstriyel Tasarım Stajı · Özlem Kristal San. A.Ş. · Haz-Ağu 2025",
    desc: "30 günlük endüstriyel staj sürecinde kristal cam ve metal hediyelik ürünler üzerine çalışıldı: vitro lazer cam içi işleme ile Dört Ayaklı Minare, Zerzevan Kalesi ve Diyarbakır şehir çizgisi objeleri, kalıp yapımı, döküm, kumlama ve trofe tasarımları (Galatasaray plaketi dahil).",
    section_en: "Industrial Design",
    category_en: "Glass & Metal Manufacturing / Internship",
    title_en: "Özlem Kristal — Artistic Glass Objects",
    meta_en: "Industrial Design Internship · Özlem Kristal Inc. · Jun-Aug 2025",
    desc_en: "Crystal glass and metal souvenir products developed during a 30-day industrial internship: 3D inner laser engraving of the Four-Legged Minaret, Zerzevan Castle, and Diyarbakır skyline objects, mold making, casting, sandblasting, and trophy designs (including Galatasaray plaque).",
    images: 5
  },

  "water-gun": {
    section: "Endüstriyel Tasarım",
    category: "Antropometri & Prototipleme · Grup Projesi",
    title: "Ergonomik Su Tabancası Oyuncak",
    meta: "İTÜ EUT 272E İnsan Faktörleri · Grup Projesi (Said Uludağ, Ahmet İspir, Ege Köse)",
    desc: "Çocuk ve yetişkin el ölçülerine uygun antropometrik analizlerle tasarlanan su tabancası oyuncağı. Antropometrik çizimler, ortografik projeksiyonlar, kullanıcı senaryosu ve strafor köpük carving tekniğiyle üretilen 1:1 fiziksel mock-up ile doğrulandı.",
    section_en: "Industrial Design",
    category_en: "Anthropometry & Prototyping · Group Project",
    title_en: "Ergonomic Toy Water Gun",
    meta_en: "ITU EUT 272E Human Factors · Group Project (Said Uludağ, Ahmet İspir, Ege Köse)",
    desc_en: "A water gun toy designed with anthropometric analysis for children's and adults' hand measurements. Validated with anthropometric drawings, orthographic projections, user scenarios, and a 1:1 physical mock-up produced with foam carving technique.",
    images: 3
  },

  "hivennel": {
    section: "Endüstriyel Tasarım",
    category: "İmalat & Ahşap Tasarımı",
    title: "Hivennel Kulübe & Ahşap Masa Lambası",
    meta: "İTÜ EUT 220E Stüdyo I & Montaj · 2023-2024",
    desc: "İki el işçiliği projesi: Hivennel — modüler altıgen geometrili, birlikte yaşam (co-living) konseptli ahşap köpek kulübesi; ve çift kollu, ledli masif ahşap masa lambası. Her ikisi de eskizden fiziksel prototipe uzanan üretim süreçleriyle tamamlandı.",
    section_en: "Industrial Design",
    category_en: "Manufacturing & Woodcraft",
    title_en: "Hivennel Kennel & Wooden Desk Lamp",
    meta_en: "ITU EUT 220E Studio I & Assembly · 2023-2024",
    desc_en: "Two handcrafted projects: Hivennel — a modular hexagonal co-living concept wooden dog kennel; and a dual-arm LED solid wood desk lamp. Both completed through production processes spanning from sketch to physical prototype.",
    images: 3
  },

  /* ---------- CODE ---------- */

  "hull-plugin": {
    section: "Yazılım & Etkileşim",
    category: "Rhino CAD Eklentisi",
    title: "Unified Yacht Hull Generator Eklentisi",
    meta: "Python · RhinoScript · İTÜ Yat Tasarımı · 2025-2026",
    desc: "Rhinoceros 3D için Python ile geliştirdiğim CAD eklentisi: kullanıcı tanımlı tasarım girdilerinden (LOA, BWL, draft, blok katsayısı vb.) parametrik yat gövdesi üretir, hidrostatik değerleri otomatik hesaplar ve teyit raporu oluşturur. Tasarımcının saatler süren gövde modelleme işini saniyelere indirir.",
    section_en: "Software & Interaction",
    category_en: "Rhino CAD Plugin",
    title_en: "Unified Yacht Hull Generator Plugin",
    meta_en: "Python · RhinoScript · ITU Yacht Design · 2025-2026",
    desc_en: "A Python CAD plugin for Rhinoceros 3D that generates parametric yacht hulls from user-defined design inputs (LOA, BWL, draft, block coefficient, etc.), automatically calculates hydrostatic values, and produces verification reports. Reduces hours of hull modeling to seconds.",
    images: 4
  },

  "beyin-finance": {
    section: "Yazılım & Etkileşim",
    category: "FinTech Girişimi & AWS Altyapısı",
    title: "Beyin Finance — Algoritmik Ticaret Platformu",
    meta: "İTÜ Çekirdek & AWS Startups · 2022-Günümüz · beyinfinance.com",
    desc: "İTÜ Çekirdek Ön Kuluçka programına kabul edilen FinTech girişimimiz. 3 kişilik ekipte AWS tabanlı sunucu backend mimarisini geliştirdim, veri görselleştirme sistemlerini kurdum ve mobil uygulama arayüzlerini etkileşim tasarımıyla iyileştirdim. AWS Startups'tan toplam $25.000 hibe desteği aldı; 2026'da marka tescil başvurusu yapıldı.",
    section_en: "Software & Interaction",
    category_en: "FinTech Startup & AWS Backend",
    title_en: "Beyin Finance — Algorithmic Trading Platform",
    meta_en: "ITU Çekirdek & AWS Startups · 2022-Present · beyinfinance.com",
    desc_en: "Our FinTech startup accepted into the ITU Çekirdek Pre-Incubation program. In a 3-person team, I developed the AWS-based server backend architecture, built data visualization systems, and improved mobile app interfaces through interaction design. Received a total $25,000 equity-free grant from AWS Startups; trademark application filed in 2026.",
    link: "https://beyinfinance.com",
    images: 3
  },

  "taskisla": {
    section: "Yazılım & Etkileşim",
    category: "Çok Oyunculu Oyun & Arayüz",
    title: "Taşkışla Online",
    meta: "Etkileşim Tasarımı · Oyun Arayüzü Tasarımı",
    desc: "İTÜ Taşkışla kampüsü konseptli izometrik çok oyunculu oyun tasarımı. Oyun arayüz mimarisi, karakter ve ekonomi sistemleri ile Sezon Kartı UI/UX seti tasarlandı.",
    section_en: "Software & Interaction",
    category_en: "Multiplayer Game & UI",
    title_en: "Taşkışla Online",
    meta_en: "Interaction Design · Game UI/UX",
    desc_en: "An isometric multiplayer game design based on the ITU Taşkışla campus concept. Game UI architecture, character and economy systems, and Season Pass UI/UX set were designed.",
    images: 1
  },

  "xox": {
    section: "Yazılım & Etkileşim",
    category: "Oyun Mekaniği & Algoritma",
    title: "XOX 2.0 — Tap to Match",
    meta: "Etkileşim Tasarımı · Bulmaca Oyun Motoru · Çevrimiçi Çok Oyunculu",
    desc: "Klasik XOX'u yeniden yorumlayan strateji oyunu: dock sistemi mekaniği, dinamik sıra takibi ve özel desen eşleştirme algoritmaları. Çevrimiçi eşleşme, arkadaşla oynama, global sohbet, başarı sistemi ve liderlik tablosuyla tam donanımlı çok oyunculu deneyim.",
    section_en: "Software & Interaction",
    category_en: "Game Mechanics & Algorithm",
    title_en: "XOX 2.0 — Tap to Match",
    meta_en: "Interaction Design · Puzzle Game Engine · Multiplayer Online",
    desc_en: "A strategy game reimagining classic XOX: dock system mechanics, dynamic turn tracking, and custom pattern matching algorithms. A fully-featured multiplayer experience with online matchmaking, friends play, global chat, achievement system, and leaderboards.",
    images: 17
  },

  "plathue": {
    section: "Yazılım & Etkileşim",
    category: "Mobil Oyun Tasarımı",
    title: "PlatHue — Renk Platformer",
    meta: "Etkileşim Tasarımı · 2D Aksiyon Platformer",
    desc: "Dinamik renk değiştirme mekaniği üzerine kurulu refleks bazlı mobil platformer: doğru rengi seçerek platformlara tutun, lav engellerinden kaç. Oyun mekaniği, seviye tasarımı ve arayüz ekranları geliştirildi.",
    section_en: "Software & Interaction",
    category_en: "Mobile Game Design",
    title_en: "PlatHue — Color Platformer",
    meta_en: "Interaction Design · 2D Action Platformer",
    desc_en: "A reflex-based mobile platformer built on dynamic color-switching mechanics: match the right color to grip platforms, dodge lava hazards. Game mechanics, level design, and interface screens were developed.",
    images: 1
  },

  "windy-wand": {
    section: "Yazılım & Etkileşim",
    category: "Yarışma Birincisi · Dijital Oyun",
    title: "Windy Wand — 1. Ödül",
    meta: "2019 Mersin Technoscope \"Fikrinle Yürü Fikrinle Büyü\" Dijital Oyun Yarışması · Birincilik",
    desc: "2019 Mersin Technoscope 'Fikrinle Yürü Fikrinle Büyü' Dijital Oyun Yarışması'nda birincilik kazanan oyun projesi. Rüzgar temalı mekanikler ve etkileşim tasarımıyla geliştirilen özgün oyun konsepti.",
    section_en: "Software & Interaction",
    category_en: "Competition Winner · Digital Game",
    title_en: "Windy Wand — 1st Prize",
    meta_en: "2019 Mersin Technoscope Digital Game Competition · 1st Place",
    desc_en: "The first-place winning game project in the 2019 Mersin Technoscope Digital Game Competition. An original game concept developed with wind-themed mechanics and interaction design.",
    images: 0
  },

  "hackathon": {
    section: "Yazılım & Etkileşim",
    category: "Hackathon İkincisi · Oyun",
    title: "Memory Looper",
    meta: "İTÜ GameTech Hackathon (GoodJob Games) · 2022 · İkincilik",
    desc: "2022 İTÜ GameTech Hackathon'da (GoodJob Games sponsorluğunda) ikincilik kazanan hafıza döngüsü temalı oyun tasarımı. Zaman döngüsü mekaniği ve hafıza bulmacaları üzerine kurulu özgün oyun konsepti.",
    section_en: "Software & Interaction",
    category_en: "Hackathon Runner-Up · Game",
    title_en: "Memory Looper",
    meta_en: "ITU GameTech Hackathon (GoodJob Games) · 2022 · 2nd Place",
    desc_en: "A memory loop-themed game design that won 2nd place at the 2022 ITU GameTech Hackathon (sponsored by GoodJob Games). An original game concept built on time-loop mechanics and memory puzzles.",
    images: 0
  }
};

// Kart sıralaması (önceki/sonraki gezinmesi için)
const PROJECT_ORDER = [
  "momora","yacht","funky-daft","urban-nexus","multimate","catia-chess",
  "smart-faucet","halo-studio","firetape","marble-stand","ozlem-kristal","water-gun","hivennel",
  "hull-plugin","beyin-finance","taskisla","xox","plathue","windy-wand","hackathon"
];
