// ==========================================
// SAIDOW.COM - PROJECT DATA
// Her proje için detay sayfası içeriği (project.html?id=slug)
// ==========================================

const PROJECTS = {

  /* ---------- DESIGN ---------- */

  "momora": {
    section: "Industrial Design",
    category: "Mezuniyet Projesi / Medikal",
    title: "MOMORA — Maternal Care Kit",
    meta: "İTÜ EUT 4923E Graduation Project · 2026",
    desc: "Hamile anneler için kan basıncı takibi, dinamolu hava şişirme mekanizması ve modüler ısı terapisi sunan medikal bakım kiti. Kol bandı (sleeve), kan basıncı ölçüm modülü ve ısıtma modülünden (Warming Care Module) oluşan modüler sistem; markalama, ambalaj tasarımı ve teknik çizimlerle birlikte uçtan uca geliştirildi.",
    images: 7
  },

  "yacht": {
    section: "Industrial Design",
    category: "Gemi & Yat Tasarımı",
    title: "12m Lobster Yacht Design",
    meta: "İTÜ ENT 453E Basic Principles of Yacht Design · 2025-2026",
    desc: "12 metrelik Lobster tipi yatın konsept geliştirme, eskiz, hidrostatik analiz, 3D yüzey modelleme, kesit (sections) ve iç mekan tasarımını kapsayan bütünsel yat tasarım projesi. Proje kapsamında hidrostatik değerleri otomatik hesaplayan Rhino eklentisi de geliştirildi.",
    images: 5
  },

  "funky-daft": {
    section: "Industrial Design",
    category: "Yapısal Ürün Tasarımı",
    title: "FUNKY DAFT — Structural Speaker",
    meta: "İTÜ Structural Speaker Design · Organic Sound Sculpting",
    desc: "Daft Punk müzik altyapısının yapay zeka destekli 3D ses dalga formuna dönüştürülmesiyle tasarlanan amorf, lavanta renkli akustik hoparlör. Ortografik görünüşler, teknik çizimler, enjeksiyon kalıplama odaklı patlatılmış görünüm (exploded view) ve mekan içi render çalışmalarıyla tamamlandı.",
    images: 6
  },

  "urban-nexus": {
    section: "Industrial Design",
    category: "Kent Mobilyası / Studio II",
    title: "Maçka Urban Nexus",
    meta: "İTÜ Urban Units Design · Maçka Parkı · 2024-2025",
    desc: "Maçka Parkı için siyah çelik ve su geçirmez ahşaptan (WPC) üretilen modüler kent mobilyası ailesi: yürüyüş yolu aydınlatmaları, piknik formasyonu, çöp kutusu, oturma elemanı, dar masa ve çeşme. Saha senaryoları, teknik çizimler ve fiziksel model ile desteklendi.",
    images: 6
  },

  "multimate": {
    section: "Industrial Design",
    category: "Mekanik Ürün Tasarımı",
    title: "MultiMate Tool — Takı Sanatı Kiti",
    meta: "İTÜ Industrial Design Studio III · 2024",
    desc: "Takı tasarımcıları için geliştirilen çok amaçlı el aleti kiti: ergonomik yan keski, çıtçıt pensesi, mezura ve iplik takma sistemi tek üründe birleştirildi. Moodboard, süreç eskizleri, mock-up'lar ve Rhinoceros teknik çizimleriyle geliştirildi.",
    images: 5
  },

  "catia-chess": {
    section: "Industrial Design",
    category: "Parametrik Solid Modelleme",
    title: "Askeri Temalı CATIA Satranç Takımı",
    meta: "İTÜ ENT 230E Parametric Solid Modeling and Design · CATIA V5",
    desc: "II. Dünya Savaşı temalı parametrik satranç takımı: Piyon (asker miğferi), Kale (beton sığınak), At (Me 262 savaş uçağı), Fil (füze), Vezir ve Şah figürleri ile kabartma haritalı satranç tahtası. Tüm parçalar CATIA V5 ile parametrik katı model olarak tasarlandı ve teknik çizimleri üretildi.",
    images: 7
  },

  "smart-faucet": {
    section: "Industrial Design",
    category: "Provokatif Tasarım & Mekanizma",
    title: "Provocative Smart Faucet",
    meta: "İTÜ EUT 367E Intr. to Mechanical Design · 2024-2025",
    desc: "Su tüketimi bilincini artırmayı hedefleyen provokatif akıllı armatür. Dokunmatik ekran, hareket sensörü, basınç kademeleri ve debi sınırlaması ile kullanıcıyı davranış değişikliğine zorlayan 'forced choice / behaviour barrier' mekanizması üzerine kurgulandı. Parça çözümü, kullanıcı senaryosu ve gerçekçi mekan renderlarıyla sunuldu.",
    images: 5
  },

  "halo-studio": {
    section: "Industrial Design",
    category: "Spekülatif Çalışma Alanı",
    title: "Halo Studio — Smarter Environment",
    meta: "İTÜ Speculative Designs · Studio IV",
    desc: "Geleceğin akıllı çalışma ortamları için spekülatif tasarım çalışması: sürüklenebilir raylı koltuk, yürünebilir zemin paneli ve rollable OLED ekran ünitesi. Aynı kapsamda 2030 gelecek senaryosu üzerine kurgulanan Firetape ürün konsepti de geliştirildi.",
    images: 1
  },

  "marble-stand": {
    section: "Industrial Design",
    category: "Mekan & Stant Tasarımı",
    title: "Turkish Stones — Mermer Sergi Standı",
    meta: "İTÜ EUT 355E Space Organization · Final Jury 2025",
    desc: "Türk mermerlerinin zenginliğini sergileyen fuar standı tasarımı: ham bloktan cilalı yüzeye üretim sürecini anlatan interaktif deneyim alanı, mermer kule vitrinler, gizli depolamalı oturma/masa alanı ve kilitli küre mekanizmalı mermer bardak altlığı hediyelikleri.",
    images: 6
  },

  "ozlem-kristal": {
    section: "Industrial Design",
    category: "Cam & Metal İmalatı / Staj",
    title: "Özlem Kristal — Sanatsal Cam Objeler",
    meta: "Endüstriyel Tasarım Stajı · Özlem Kristal San. A.Ş. · Haz-Ağu 2025",
    desc: "30 günlük endüstriyel staj sürecinde kristal cam ve metal hediyelik ürünler üzerine çalışıldı: vitro lazer cam içi işleme ile Dört Ayaklı Minare, Zerzevan Kalesi ve Diyarbakır şehir çizgisi objeleri, kalıp yapımı, döküm, kumlama ve trofe tasarımları (Galatasaray plaketi dahil).",
    images: 5
  },

  "water-gun": {
    section: "Industrial Design",
    category: "Antropometri & Prototipleme",
    title: "Ergonomik Su Tabancası Oyuncak",
    meta: "İTÜ EUT 272E Human Factors · Grup Projesi",
    desc: "Çocuk ve yetişkin el ölçülerine uygun antropometrik analizlerle tasarlanan su tabancası oyuncağı. Antropometrik çizimler, ortografik projeksiyonlar ve strafor köpük carving tekniğiyle üretilen 1:1 fiziksel mock-up ile doğrulandı.",
    images: 3
  },

  "hivennel": {
    section: "Industrial Design",
    category: "İmalat & Ahşap Tasarımı",
    title: "Hivennel Kulübe & Ahşap Masa Lambası",
    meta: "İTÜ EUT 220E Studio I & Assembly · 2023-2024",
    desc: "İki el işçiliği projesi: Hivennel — modüler altıgen geometrili, birlikte yaşam (co-living) konseptli ahşap köpek kulübesi; ve çift kollu, ledli masif ahşap masa lambası. Her ikisi de eskizden fiziksel prototipe uzanan üretim süreçleriyle tamamlandı.",
    images: 3
  },

  /* ---------- CODE ---------- */

  "hull-plugin": {
    section: "Software & Interaction",
    category: "Rhino CAD Eklentisi",
    title: "Unified Yacht Hull Generator Plugin",
    meta: "Python · RhinoScript · İTÜ Yacht Design · 2025-2026",
    desc: "Rhinoceros 3D için Python ile geliştirdiğim CAD eklentisi: kullanıcı tanımlı tasarım girdilerinden (LOA, BWL, draft, blok katsayısı vb.) parametrik yat gövdesi üretir, hidrostatik değerleri otomatik hesaplar ve teyit raporu oluşturur. Tasarımcının saatler süren gövde modelleme işini saniyelere indirir.",
    images: 4
  },

  "beyin-finance": {
    section: "Software & Interaction",
    category: "FinTech Girişimi & AWS Backend",
    title: "Beyin Finance — Algoritmik Trading Platformu",
    meta: "İTÜ Çekirdek & AWS Startups · 2022-Günümüz · beyinfinance.com",
    desc: "İTÜ Çekirdek Ön Kuluçka programına kabul edilen FinTech girişimimiz. 3 kişilik ekipte AWS tabanlı sunucu backend mimarisini geliştirdim, veri görselleştirme sistemlerini kurdum ve mobil uygulama arayüzlerini etkileşim tasarımıyla iyileştirdim. AWS Startups'tan toplam $25.000 hibe desteği aldı; 2026'da marka tescil başvurusu yapıldı.",
    link: "https://beyinfinance.com",
    images: 0
  },

  "taskisla": {
    section: "Software & Interaction",
    category: "Multiplayer Oyun & Arayüz",
    title: "Taşkışla Online",
    meta: "Interaction Design · Game UI/UX",
    desc: "İTÜ Taşkışla kampüsü konseptli izometrik multiplayer oyun tasarımı. Oyun arayüz mimarisi, karakter ve ekonomi sistemleri ile Sezon Kartı (Season Pass) UI/UX seti tasarlandı.",
    images: 1
  },

  "xox": {
    section: "Software & Interaction",
    category: "Oyun Mekaniği & Algoritma",
    title: "XOX 2.0 — Tap to Match",
    meta: "Interaction Design · Puzzle Game Engine",
    desc: "Klasik XOX'u yeniden yorumlayan strateji oyunu: dock sistemi mekaniği, dinamik sıra takibi ve özel desen eşleştirme algoritmaları. Oyun kuralları, mekanikler ve multiplayer özellikleriyle birlikte tasarlandı.",
    images: 1
  },

  "plathue": {
    section: "Software & Interaction",
    category: "Mobil Oyun Tasarımı",
    title: "PlatHue — Color Platformer",
    meta: "Interaction Design · 2D Action Platformer",
    desc: "Dinamik renk değiştirme mekaniği üzerine kurulu refleks bazlı mobil platformer: doğru rengi seçerek platformlara tutun, lav engellerinden kaç. Oyun mekaniği, seviye tasarımı ve arayüz ekranları geliştirildi.",
    images: 1
  },

  "hackathon": {
    section: "Software & Interaction",
    category: "Ödüllü Oyun Projeleri",
    title: "Memory Looper & Windy Wand",
    meta: "İTÜ GameTech Hackathon 2.liği · Mersin Technoscope 1.liği",
    desc: "İki ödüllü oyun projesi: Windy Wand — 2019 \"Fikrinle Yürü Fikrinle Büyü\" Dijital Oyun Yarışması (Mersin Technoscope) birinciliği; Memory Looper — 2022 İTÜ GameTech Hackathon (GoodJob Games) ikinciliği kazanan hafıza döngüsü temalı oyun tasarımı.",
    images: 0
  }
};

// Kart sıralaması (önceki/sonraki gezinmesi için)
const PROJECT_ORDER = [
  "momora","yacht","funky-daft","urban-nexus","multimate","catia-chess",
  "smart-faucet","halo-studio","marble-stand","ozlem-kristal","water-gun","hivennel",
  "hull-plugin","beyin-finance","taskisla","xox","plathue","hackathon"
];
