// Projects data
const projects = [
    {
        title: "2024年妝品市場評估報告",
        description: "全面分析化妝品市場趨勢、經濟規模、產品發展、法規重點與新技術應用",
        background: "隨著疫情復甦，化妝品市場迎來新一輪發展機遇與挑戰。本報告全面評估2024年全球與亞洲化妝品市場現狀與未來趨勢，為相關企業提供市場洞察與發展建議。",
        goals: [
            "回顧2022-2023年市場發展與消費者行為變化",
            "分析全球與亞洲化妝品市場經濟規模與增長動力",
            "探討產品市場趨勢與區域差異",
            "梳理各國化妝品法規重點與合規要求",
            "預測新技術應用與未來市場發展方向"
        ],
        process: [
            "資料收集：整合行業報告、市場調研與消費者數據",
            "市場分析：評估疫後復甦情況與消費者行為變化",
            "趨勢研究：識別各區域市場熱點與產品發展方向",
            "法規梳理：比較各國化妝品監管框架與要求差異",
            "技術評估：研究AI、VR/AR等新技術在化妝品行業的應用",
            "前景預測：基於數據與趨勢分析提出未來發展展望"
        ],
        techDetails: [
            "研究方法：市場數據分析",
            "數據來源：行業報告、政府統計、企業財報與消費者調查",
            "分析工具：Excel用於數據處理與趨勢分析",
            "報告製作：使用專業排版與設計工具呈現研究結果"
        ],
        results: [
            "市場回顧：疫情復甦帶動需求回升，線上銷售主導，天然環保與功能性產品受青睞",
            "經濟規模：全球市場2022年達930億美元，亞洲市場由男性美妝與環保意識驅動增長",
            "產品趨勢：全球個性化產品增加，亞洲各區域呈現不同特點，台灣偏好極簡主義與永續包裝",
            "法規重點：各國對化妝品定義有差異，台灣實施全面管理法規，全球趨向源頭管理",
            "技術應用：AI與大數據實現個人化配方，VR/AR提供虛擬試妝體驗，生物技術開發精準成分",
            "未來展望：市場朝個性化、智能化、綠色化方向發展，同時面臨法規趨嚴與消費者需求升級"
        ],
        tech: ["市場分析", "數據研究", "趨勢預測", "行業報告"],
        image: "zp.jpg",
        category: "other",
        featured: true
    },
    {
        title: "人力資源分析報告",
        description: "分析19159筆員工數據，找出影響離職因素與留任特徵，提供企業管理建議",
        background: "企業面臨人才流失問題，需要通過數據分析找出真正願意留在公司的人才特徵，以提升員工留任率。本研究基於19159筆原始資料，透過數據清洗與分析，找出影響員工離職的關鍵因素，並提供實用的管理建議。",
        goals: [
            "分析員工離職因素，找出真正願意留在公司的人才特徵",
            "協助企業提升員工留任率",
            "提供基於數據的管理建議"
        ],
        process: [
            "數據收集：獲取19159筆員工資料",
            "數據清洗：刪除整筆缺失數據",
            "變量定義：設定目標變量（target=0表示留任，target=1表示離職）",
            "特徵分析：分析前公司形態、工作變動時間、學歷、專業領域、相關經驗等變量",
            "相關性分析：計算各變量與離職率的相關性",
            "結果整理：歸納主要發現並提出管理建議"
        ],
        techDetails: [
            "數據處理：使用Python、Excel進行數據清洗與分析",
            "統計方法：相關性分析、比例分析",
            "視覺化工具：使用Excel繪製數據圖表",
            "報告製作：使用Canva設計專業分析報告"
        ],
        results: [
            "相關經驗：有相關經驗者留任率略高（留任88.2%，離職85.0%）",
            "教育程度與專業：研究所學歷留任率略高（28.0% vs 24.1%）；STEM背景員工佔絕大多數，人文學科在留任群體中比例較高",
            "公司類型：私營企業員工比例最高，早期創業公司離職率略高",
            "工作變動頻率：從未換過工作的員工離職率更高（6.5% vs 3.7%）",
            "變量相關性：城市發展指數與離職呈最強負相關（-0.42），城市發展程度越低，離職率越高",
            "管理建議：優化招聘策略、提供清晰職涯發展路徑、關注低發展城市員工需求、為創業公司背景員工提供穩定感"
        ],
        tech: ["Python", "數據分析", "統計方法", "Canva"],
        image: "hrp.png",
        category: "hr",
        featured: true,
        
    },
    {
        title: "HR Trend: Retention of Talent（人才留任趨勢）",
        description: "探討影響員工留任的關鍵因素，包含隱藏人才、DEI策略、混合辦公、員工發展與福利等",
        featured: true,
        background: "在當今競爭激烈的就業市場中，人才留任已成為企業人力資源管理的核心挑戰。本研究旨在探討影響員工留任的關鍵因素，並提供實用的策略建議，幫助企業提高員工忠誠度和降低人才流失率。",
        goals: [
            "分析隱藏人才（Hidden Talent）的特性與招募策略",
            "探討多元、公平與包容（DEI）策略對人才留任的影響",
            "評估混合辦公模式的優缺點及實施方法",
            "研究員工發展計畫與福利制度對留任的重要性",
            "提供基於實證的人才留任最佳實踐建議"
        ],
        process: [
            "文獻回顧：系統性分析人才留任相關研究與理論",
            "案例研究：深入研究Google等成功企業的人才留任策略",
            "策略整合：結合理論與實證研究，提出全面的留任策略框架",
            "實施建議：針對不同類型企業提供可行的實施方案"
        ],
        techDetails: [
            "研究方法：混合研究法，結合定量數據分析與定性案例研究",
            "分析框架：SMART原則（具體、可衡量、可實現、相關性、時限性）",
            "視覺化工具：使用PowerPoint與Canva呈現研究結果與建議"
        ],
        results: [
            "隱藏人才策略：透過包容性職缺設計、技能導向招聘及平等培訓機會，降低進入職場門檻",
            "DEI實施框架：建立明確標準，透過員工回饋與長期目標推動組織公平",
            "混合辦公模式：分析四種模式（隨意混合、結構化混合、主管排班混合、混合組合）的適用情境",
            "員工發展計畫：提出個人發展計畫（IDP）實施流程，包含前置規劃、會議、執行與評估",
            "福利制度優化：確認員工最重視的三大福利（醫療保險、壽險、退休金）並提供實施建議"
        ],
        tech: ["Canva", "趨勢預測", "人力資源管理"],
        image: "PS.png",
        category: "hr",
        
    },
    {
        title: "正大聯合會計師事務所實習生招募社群宣傳",
        description: "為正大聯合會計師事務所設計的實習生招募社群宣傳圖片",
        background: "正大聯合會計師事務所需要吸引優秀的實習生加入團隊，透過社群媒體進行招募宣傳是接觸目標族群的有效方式。本專案旨在設計吸引人的社群宣傳圖片，以提高實習生招募的曝光度和申請率。",
        goals: [
            "設計視覺吸引力強的社群宣傳圖片",
            "清晰傳達實習職位資訊和申請方式",
            "展現會計師事務所的專業形象",
            "吸引目標族群（會計、財務相關科系學生）的注意"
        ],
        process: [
            "需求分析：了解事務所的品牌形象、目標受眾和招募需求",
            "設計構思：選擇適合的配色、排版和視覺元素",
            "內容整理：精簡實習職位描述、資格要求和申請方式",
            "設計製作：使用Canva進行圖片設計和排版",
            "修改優化：根據回饋進行調整，確保視覺效果和訊息傳達清晰"
        ],
        techDetails: [
            "設計工具：Canva專業版",
            "色彩應用：使用事務所品牌色系，確保視覺一致性",
            "排版技巧：運用層次分明的排版突顯重要資訊",
            "字體選擇：使用專業且易讀的字體，提升閱讀體驗"
        ],
        results: [
            "成功設計出兩款社群宣傳圖片，適合在不同社群平台使用",
            "宣傳圖片清晰傳達實習職位資訊、申請資格和聯絡方式",
            "視覺設計符合事務所專業形象，同時具有吸引力",
            "提高了實習生招募的曝光度和申請率"
        ],
        tech: ["Canva", "社群媒體行銷", "視覺設計"],
        image: "rc1.png",
        category: "design",
        
    },
    {
        title: "正大聯合會計師事務所海報宣傳",
        description: "為正大聯合會計師事務所設計的專業形象海報",
        background: "正大聯合會計師事務所需要提升品牌形象和知名度，透過海報宣傳是展示專業服務和企業文化的有效方式。本專案旨在設計專業且具吸引力的海報，以強化事務所在目標客戶心中的專業形象。",
        goals: [
            "設計專業且具視覺吸引力的海報",
            "清晰傳達事務所的核心服務和價值主張",
            "強化品牌形象和專業可信度",
            "吸引潛在客戶和合作夥伴的注意"
        ],
        process: [
            "品牌分析：深入了解事務所的品牌定位、核心價值和目標受眾",
            "設計構思：選擇適合的視覺元素、配色和排版風格",
            "內容整理：精簡服務項目、專業優勢和聯絡資訊",
            "設計製作：使用Canva進行海報設計和排版",
            "修改優化：根據回饋進行調整，確保視覺效果和訊息傳達清晰"
        ],
        techDetails: [
            "設計工具：Canva",
            "色彩應用：使用專業且穩重的色調，展現會計事務所的可靠形象",
            "排版技巧：運用清晰的層次結構，突顯核心服務和價值主張",
            "視覺元素：選用適合的圖像和圖標，增強視覺吸引力"
        ],
        results: [
            "成功設計出專業且具吸引力的海報",
            "海報清晰傳達事務所的核心服務、專業優勢和聯絡方式",
            "視覺設計符合事務所專業形象，同時具有現代感",
            "提升了品牌形象和專業可信度"
        ],
        tech: ["Canva", "品牌設計", "視覺傳達"],
        image: "ps1.png",
        category: "design",
        
    },
    {
        title: "虛擬口紅試妝系統",
        description: "使用電腦視覺技術實現的虛擬口紅試妝系統，讓用戶可以在線上試用不同品牌和色號的口紅",
        background: "隨著科技進步與疫情後消費行為改變，線上購物與虛擬試妝工具逐漸成為美妝產業的新趨勢。許多消費者在購買口紅時，常因無法預覽上妝效果而產生選擇困難，甚至導致色號錯誤與退貨等問題。加上實體試用品存在衛生疑慮與環境浪費問題，促使我們思考是否能藉由人工智慧與即時影像技術，提供一種更便捷、安全且友善環境的試妝方式。",
        goals: [
            "開發精確的唇部檢測系統，實現多人臉部定位功能",
            "模擬多種口紅質地效果，包括霧面、珠光和絲絨",
            "提供智能膚色分析與口紅推薦功能",
            "實現口紅收藏功能，方便用戶記錄喜愛的產品"
        ],
        process: [
            "需求確認與設計規劃：分析使用者需求後，制定系統基本功能與使用者操作流程。",
            "技術選型與原型製作：選用 MediaPipe 作為臉部特徵點偵測技術，並以 Streamlit 架設前端操作平台。",
            "唇部遮罩與試色模擬：透過 OpenCV 技術實現唇部即時著色與妝效處理。",
            "個人化推薦實作：建立膚色分析邏輯，配合 HSV 色彩空間判斷適合色系。",
            "測試與調整：透過不同膚色、光線與鏡頭設備進行測試，持續優化演算法與使用者體驗。"
        ],
        techDetails: [
            "MediaPipe Face Mesh：用於臉部與唇部特徵點偵測，可快速且準確捕捉使用者嘴唇區域。",
            "OpenCV：處理即時影像，實現口紅試色、妝感模擬（霧面、絲絨、珠光）與色彩濾鏡等功能。",
            "Streamlit：作為前端框架，結合 Python 後端邏輯，提供簡潔的操作介面與即時串流預覽功能。",
            "色彩推薦演算法：根據使用者膚色特徵進行 HSV 色域轉換與分類，推薦適合的色系。"
        ],
        results: [
            "使用者僅需透過瀏覽器開啟網站，即可啟用即時鏡頭，體驗虛擬試妝流程。功能包含：",
            "即時唇部偵測與口紅試色模擬",
            "三種妝感選擇（霧面、絲絨、珠光）",
            "依膚色推薦色號功能",
            "色彩濃度與透明度調整",
            "使用者介面簡潔、操作直觀"
        ],
        tech: ["Python", "MediaPipe", "OpenCV", "Streamlit"],
        image: "mk.png",
        category: "design"
    },
    // ...existing code...
    {
        title: "融合達悟族圖騰與自然花朵的印花設計",
        description: "將達悟族傳統圖騰與自然花朵元素結合的創新印花設計",
        background: "在多元文化逐漸受到重視的今日，設計不再僅僅追求視覺美感，更成為傳遞文化與價值的重要媒介。原住民族文化中蘊藏著豐富的圖騰語言與自然哲學，而「達悟族」作為台灣的重要族群之一，其幾何圖案與象徵意義深具文化代表性。本專案旨在將達悟族傳統圖騰與自然中的花朵元素結合，透過創新的印花設計，傳遞對自然與文化的敬意，並推廣原住民族文化之美。",
        goals: [
            "文化融合：將達悟族傳統幾何圖騰與花朵元素結合，創造自然與文化和諧共融的設計",
            "視覺傳達：以紅色與黑色展現族群原色，搭配柔和粉色呈現生命力與對比美感",
            "實用應用：開發出具文化意涵與美感的實體商品——帆布袋，使文化設計融入日常生活",
            "文化傳承：透過商品設計與視覺語言，讓更多人認識與尊重達悟族文化，實現設計與社會的連結"
        ],
        process: [
            "文化研究與圖騰分析：蒐集達悟族的幾何圖騰資料，了解其象徵意義與文化內涵，作為設計基礎",
            "自然元素選擇：選定花朵作為象徵自然與生命力的核心元素，融入圖騰紋理，延伸出柔中帶剛的視覺效果",
            "創意發想與草圖繪製：以花朵為主體，將族群幾何圖案巧妙置入花蕊之中，強調融合與尊重的意象",
            "色彩搭配與優化：運用代表達悟族文化的紅（#C80B04）與黑（#060707），搭配柔和粉色（#F39391）作為花瓣色，營造溫柔卻堅韌的視覺對比",
            "印花設計排版與測試：進行圖案編排與實體輸出測試，確認在帆布材質上的呈現效果與細節保留度"
        ],
        techDetails: [
            "設計工具：Canva、Photoshop 用於圖騰轉化與花朵描繪",
            "印花技術：數位直噴印刷（DTG）應用於帆布袋，呈現細膩圖樣與飽和色彩",
            "色彩應用：以品牌色票為基準調整配色，強化視覺一致性與文化辨識度",
            "產品製作：選用天然帆布材質，展現自然主題精神，兼具實用與環保"
        ],
        results: [
            "設計成品：帆布袋，最終印花設計應用於帆布袋，展現花朵與達悟族圖騰融合的意象，圖案置中排列，凸顯文化核心",
            "視覺特色：紅黑粉的強烈色彩對比使整體設計具張力又不失柔和，幾何花蕊象徵文化根基，花瓣展現延伸與成長",
            "意義延伸：本商品不僅為日常生活用品，更是一件能「背在身上的文化展演品」",
            "潛力發展：可延伸應用至T-shirt、筆記本、明信片等文創產品，擴大文化設計影響力"
        ],
        tech: ["Canva", "數位直噴印刷", "色彩管理", "帆布材質應用"],
        image: "印花.jpg",
        category: "design"
    },
    {
        title: "二手時尚集點APP使用者介面",
        description: "為了推動「可持續時尚與環保行為」設計的APP使用者介面",
        background: "在快時尚盛行的今日，衣物過度消費導致資源浪費與環境污染。GreenWardrobe 旨在透過數位平台，鼓勵大眾參與二手衣物的回收與再利用，實踐可持續時尚，減少碳足跡，並提升環保意識​",
        goals:[ 
            "設計一個直觀易用的APP界面，鼓勵用戶參與二手時尚交易和環保行為",
            "鼓勵用戶參與衣物回收、捐贈與再利用行動。",
            "提供積分獎勵機制，提升用戶參與度。",
            "提升大眾對可持續時尚的認識與實踐。"
        ],
        process:[
            "需求分析與資料蒐集：研究二手衣物市場趨勢與用戶需求，分析現有環保集點機制與合作通路。​",
            "平台設計與開發：設計用戶友善的介面，方便用戶上傳與瀏覽衣物資訊，建立會員系統與積分計算機制，整合衣物資訊管理與交易功能。​",
            "測試與優化：進行功能測試，確保平台穩定運作。根據用戶回饋進行介面與功能優化。​"
        ],
        techDetails: [
            "前端技術：使用 HTML、CSS、JavaScript 建立響應式網頁介面。​",
            "後端技術：設計資料結構管理會員資訊與衣物資料，實作積分計算與交易紀錄功能。​",
            "資料安全：採用基本的資料驗證與加密措施，保護用戶資訊。​"
        ],
        results: [
            "網站原型完成：成功開發並部署 GreenWardrobe 網站原型，展示核心功能與介面設計。",
            "用戶介面設計：設計直觀且易於操作的介面，提升用戶體驗。​",
            "功能實作：實現基本的會員註冊、衣物上架、瀏覽與積分計算功能。​",
            "環保推廣：透過平台宣導可持續時尚理念，提升大眾環保意識。"
        ],
        tech: ["HTML", "CSS", "JavaScript"],
        image: "green.png",
        category: "design"
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // 首頁標題動畫
    setupHeroAnimation();
    
    // 背景粒子效果
    setupParticles();
    
    // 時間軸動畫
    setupTimelineAnimation();
    
    // 項目卡片懸停效果
    setupProjectCardHover();
    
    // Animate sections on scroll
    setupScrollAnimation();
    
    // Load projects
    loadProjects('all');
    
    // Setup filter buttons
    setupProjectFilter();
    
    // Setup carousel
    setupCarousel();
    
    // Setup dark mode
    setupDarkMode();
    
    // Setup ScrollSpy
    setupScrollSpy();
    
    // Setup contact form
    setupContactForm();
    
    // Back to top button
    setupBackToTop();
    
    // Animate skill bars
    animateSkillBars();
    
    // Mobile menu toggle
    setupMobileMenu();
    
    // 設置鼠標特效
    setupCursorEffect();
    
    // 設置證書輪播功能
    setupCertificateTabs();
    
    // 窗口大小變化時重新生成粒子
    window.addEventListener('resize', () => {
        setupParticles();
    });
});

// Mobile Menu Toggle
function setupMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    const body = document.body;
    const navItems = document.querySelectorAll('.nav-links a');
    
    // Toggle menu on hamburger click
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // 防止點擊事件冒泡
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // 強制重新計算佈局，確保導覽列顯示
        if (navLinks.classList.contains('active')) {
            navLinks.style.display = 'flex';
        }
        
        console.log('Menu toggled, active:', navLinks.classList.contains('active')); // 檢查切換狀態
    });
    
    // Close menu when nav item is clicked and scroll to section
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            console.log('Menu item clicked:', item.textContent); // 記錄點擊
            e.preventDefault(); // 防止默認的錨點行為
            e.stopPropagation(); // 阻止事件冒泡
            
            // 關閉選單
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
            
            // 獲取目標區域並滾動
            const targetId = item.getAttribute('href').substring(1);
            console.log('Target section ID:', targetId);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // 立即滾動到目標區域
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // 70px 的偏移量避免被導覽列遮擋
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (
            navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !menuToggle.contains(e.target)
        ) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
}

// Scroll Animation
function setupScrollAnimation() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// Load Projects
function loadProjects(category) {
    const grid = document.querySelector('.portfolio-grid');
    grid.innerHTML = '';
    
    // 找到HR Trend項目並放在最前面
    const hrTrendProject = projects.find(p => p.title.includes('HR Trend'));
    let sortedProjects = [...projects];
    
    if (hrTrendProject) {
        // 將HR Trend項目從原數組中移除
        sortedProjects = projects.filter(p => p !== hrTrendProject);
        // 將HR Trend項目放在最前面
        sortedProjects.unshift(hrTrendProject);
    }
    
    const filteredProjects = category === 'all' ? 
        sortedProjects : 
        sortedProjects.filter(project => project.category === category);
    
    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.category = project.category;
        
        // 為HR Trend項目添加釘選標記
        const isPinned = project.title.includes('HR Trend');
        
        const hasLink = project.link && project.link !== '#';
        card.innerHTML = `
            <div class="project-link" style="cursor: pointer;">
                ${isPinned ? '<div class="pinned-badge"><i class="fas fa-thumbtack"></i> 釘選</div>' : ''}
                <img src="${project.image}" alt="${project.title}">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tech-stack">
                        ${project.tech.map(t => `<span>${t}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;

        // 添加點擊事件，跳轉到專案詳細頁面
        card.addEventListener('click', () => {
            // 將專案資訊存儲到 localStorage
            localStorage.setItem('currentProject', JSON.stringify(project));
            // 跳轉到專案詳細頁面
            window.location.href = 'projectdetail.html';
        });

        if (hasLink) {
            card.addEventListener('click', () => {
                window.open(project.link, '_blank');
            });
        }
        grid.appendChild(card);
    });
}

// Project Filter
function setupProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Filter projects
            const category = btn.dataset.filter;
            loadProjects(category);
        });
    });
}

// Carousel
function setupCarousel() {
    const carousel = document.querySelector('.carousel-container');
    if (!carousel) return;
    
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const slidesContainer = document.querySelector('.carousel-slides');
    
    let currentIndex = 0;
    let autoSlideInterval;
    let startX, moveX, isDragging = false;
    
    // 初始化輪播
    function initCarousel() {
        // 顯示第一張幻燈片
        showSlide(0);
        
        // 啟動自動輪播
        startAutoSlide();
        
        // 添加拖曳功能
        setupDragEvents();
        
        // 滑鼠懸停時暫停自動輪播
        carousel.addEventListener('mouseenter', pauseAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);
        
        // 觸摸設備支持
        carousel.addEventListener('touchstart', pauseAutoSlide);
        carousel.addEventListener('touchend', startAutoSlide);
    }
    
    // 顯示指定幻燈片
    function showSlide(index) {
        // 更新索引
        currentIndex = index % slides.length;
        if (currentIndex < 0) currentIndex = slides.length - 1;
        
        // 隱藏所有幻燈片
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.transform = 'scale(0.95)';
            slide.style.opacity = '0';
        });
        
        // 顯示當前幻燈片
        slides[currentIndex].classList.add('active');
        slides[currentIndex].style.transform = 'scale(1)';
        slides[currentIndex].style.opacity = '1';
        
        // 更新導航點
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }
    
    // 啟動自動輪播
    function startAutoSlide() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 5000);
    }
    
    // 暫停自動輪播
    function pauseAutoSlide() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
    }
    
    // 設置拖曳事件
    function setupDragEvents() {
        // 滑鼠事件
        slidesContainer.addEventListener('mousedown', dragStart);
        slidesContainer.addEventListener('mousemove', dragMove);
        slidesContainer.addEventListener('mouseup', dragEnd);
        slidesContainer.addEventListener('mouseleave', dragEnd);
        
        // 觸摸事件
        slidesContainer.addEventListener('touchstart', dragStart);
        slidesContainer.addEventListener('touchmove', dragMove);
        slidesContainer.addEventListener('touchend', dragEnd);
    }
    
    // 開始拖曳
    function dragStart(e) {
        pauseAutoSlide();
        isDragging = true;
        startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        slidesContainer.style.cursor = 'grabbing';
    }
    
    // 拖曳移動
    function dragMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        moveX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        const diff = moveX - startX;
        
        // 根據拖曳方向決定下一張幻燈片
        if (Math.abs(diff) > 50) {
            isDragging = false;
            slidesContainer.style.cursor = 'grab';
            if (diff > 0) {
                showSlide(currentIndex - 1); // 向右拖曳，顯示上一張
            } else {
                showSlide(currentIndex + 1); // 向左拖曳，顯示下一張
            }
        }
    }
    
    // 結束拖曳
    function dragEnd() {
        isDragging = false;
        slidesContainer.style.cursor = 'grab';
        startAutoSlide();
    }
    
    // 下一張和上一張按鈕
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            pauseAutoSlide();
            showSlide(currentIndex + 1);
            startAutoSlide();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            pauseAutoSlide();
            showSlide(currentIndex - 1);
            startAutoSlide();
        });
    }
    
    // 導航點
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            pauseAutoSlide();
            showSlide(index);
            startAutoSlide();
        });
    });
    
    // 初始化輪播
    initCarousel();
}

// Dark Mode Toggle
function setupDarkMode() {
    const toggle = document.getElementById('darkModeToggle');
    const icon = toggle.querySelector('i');
    
    toggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? '' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        
        icon.className = newTheme === 'dark' ? 
            'fas fa-sun' : 'fas fa-moon';
        
        localStorage.setItem('theme', newTheme);
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Scroll Spy
function setupScrollSpy() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Contact Form with EmailJS
function setupContactForm() {
    const form = document.getElementById('contact-form');
    
    // 初始化EmailJS
    emailjs.init("YCQOSzFk0VVStdVML"); // 請替換為您的EmailJS用戶ID
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 獲取表單數據
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // 表單驗證
        if (!name || !email || !message) {
            alert('請填寫所有必填欄位');
            return;
        }
        
        // 顯示發送中狀態
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 發送中...';
        submitBtn.disabled = true;
        
        // 準備發送的數據
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            to_name: 'kaiiix', // 收件人名稱
            reply_to: email
        };
        
        // 發送電子郵件
        emailjs.send('service_9xi5ohy', 'template_czeki7s', templateParams) // 請替換為您的服務ID和模板ID
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert(`感謝您的來信，${name}！\n我會盡快回覆您。`);
                form.reset();
            }, function(error) {
                console.log('FAILED...', error);
                alert('發送失敗，請稍後再試或直接發送郵件至 kaiiix.cc@gmail.com');
            })
            .finally(() => {
                // 恢復按鈕狀態
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            });
    });
}

// Back to Top Button
function setupBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;
    
    // 監聽滾動事件
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    // 點擊事件 - 平滑滾動到頂部
    backToTop.addEventListener('click', () => {
        // 添加點擊動畫效果
        backToTop.classList.add('clicked');
        
        // 平滑滾動到頂部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // 移除點擊動畫效果
        setTimeout(() => {
            backToTop.classList.remove('clicked');
        }, 300);
    });
    
    // 添加懸停效果
    backToTop.addEventListener('mouseenter', () => {
        backToTop.classList.add('hover');
    });
    
    backToTop.addEventListener('mouseleave', () => {
        backToTop.classList.remove('hover');
    });
}

// Animate Skill Bars and Circles
function animateSkillBars() {
    // 處理傳統進度條
    const skillBars = document.querySelectorAll('.progress-bar');
    
    // 處理圓形進度條
    const skillCircles = document.querySelectorAll('.skill-circle-progress');
    
    // 創建觀察者
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 檢查是否是傳統進度條
                if (entry.target.classList.contains('progress-bar')) {
                    const bar = entry.target;
                    const level = bar.getAttribute('data-level');
                    bar.style.width = `${level}%`;
                    bar.classList.add('animate');
                    
                    // 百分比數字顯示已移除
                }
                // 檢查是否是圓形進度條
                else if (entry.target.classList.contains('skill-circle-progress')) {
                    const circleProgress = entry.target;
                    const percent = parseInt(circleProgress.getAttribute('data-percent'));
                    const circleFill = circleProgress.querySelector('.skill-circle-fill');
                    const percentText = circleProgress.querySelector('.skill-percent');
                    
                    // 計算圓形進度條的偏移量
                    // 圓的周長約為 2πr，這裡r=35，所以周長約為220
                    const circumference = 2 * Math.PI * 35;
                    const offset = circumference - (percent / 100) * circumference;
                    
                    // 設置初始偏移量
                    circleFill.style.strokeDashoffset = circumference;
                    circleFill.style.strokeDasharray = circumference;
                    
                    // 使用setTimeout來創建動畫效果
                    setTimeout(() => {
                        circleFill.style.strokeDashoffset = offset;
                    }, 100);
                    
                    // 數字計數動畫
                    if (percentText) {
                        // 初始隱藏百分比文字
                        percentText.style.opacity = '0';
                        percentText.style.transform = 'scale(0.8)';
                        
                        // 添加hover事件顯示百分比
                        circleProgress.addEventListener('mouseenter', () => {
                            percentText.style.opacity = '1';
                            percentText.style.transform = 'scale(1)';
                            animateCounter(percentText, percent);
                        });
                        
                        // 添加mouseleave事件隱藏百分比
                        circleProgress.addEventListener('mouseleave', () => {
                            percentText.style.opacity = '0';
                            percentText.style.transform = 'scale(0.8)';
                        });
                    }
                }
            }
        });
    }, { threshold: 0.3 });
    
    // 觀察所有進度條元素
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
    
    // 觀察所有圓形進度條元素
    skillCircles.forEach(circle => {
        observer.observe(circle);
    });
}

// 數字計數動畫函數
function animateCounter(element, targetValue) {
    let currentValue = 0;
    const duration = 1500; // 動畫持續時間（毫秒）
    const increment = targetValue / (duration / 16); // 每幀增加的值
    
    const updateCounter = () => {
        currentValue += increment;
        if (currentValue < targetValue) {
            element.textContent = `${Math.floor(currentValue)}%`;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = `${targetValue}%`;
        }
    };
    
    requestAnimationFrame(updateCounter);
}

// 當點擊作品時，將作品資訊存儲到 localStorage
function viewProjectDetail(project) {
    localStorage.setItem('currentProject', JSON.stringify(project));
    window.location.href = 'projectdetail.html';
}

// 創建背景粒子效果
function setupParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    
    // 清空容器
    container.innerHTML = '';
    
    // 創建粒子
    const particleCount = window.innerWidth < 768 ? 15 : 30; // 移動設備上減少粒子數量
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // 隨機大小
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // 隨機位置
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // 隨機動畫延遲
        particle.style.animationDelay = `${Math.random() * 15}s`;
        
        // 隨機動畫持續時間
        particle.style.animationDuration = `${Math.random() * 15 + 15}s`;
        
        container.appendChild(particle);
    }
}

// 設置時間軸動畫
function setupTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // 添加延遲，使時間軸項目依次顯示
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 200); // 每項延遲 200ms
            }
        });
    }, { threshold: 0.2 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// 設置首頁標題動畫
function setupHeroAnimation() {
    // 標題和副標題已經在 CSS 中設置了動畫
    // 這裡可以添加額外的動畫邏輯
}

// 設置項目卡片懸停效果
function setupProjectCardHover() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const projectInfo = card.querySelector('.project-info');
        if (!projectInfo) return;
        
        // 檢查是否已經有覆蓋層
        if (!card.querySelector('.project-overlay')) {
            // 創建項目覆蓋層
            const overlay = document.createElement('div');
            overlay.classList.add('project-overlay');
            
            // 獲取項目標題和技術
            const title = card.querySelector('h3')?.textContent || '項目詳情';
            const techStack = card.querySelector('.tech-stack')?.innerHTML || '';
            
            // 設置覆蓋層內容
            overlay.innerHTML = `
                <h3>${title}</h3>
                <p>點擊查看詳情</p>
                <div class="tech-stack">${techStack}</div>
            `;
            
            projectInfo.appendChild(overlay);
        }
    });
}

// 設置鼠標特效 - 人力資源主題
function setupCursorEffect() {
    const cursorDot = document.getElementById('cursor-dot');
    const cursorIcon = document.getElementById('cursor-icon');
    const cursorContainer = document.getElementById('cursor-container');
    
    if (!cursorDot || !cursorIcon || !cursorContainer) return;
    
    // 隱藏原生鼠標
    document.body.style.cursor = 'none';
    
    // 鼠標軌跡數組
    const trails = [];
    const maxTrails = 10;
    
    // 人力資源相關圖標
    const hrIcons = [
        '<i class="fas fa-user-tie"></i>',
        '<i class="fas fa-users"></i>',
        '<i class="fas fa-user-graduate"></i>',
        '<i class="fas fa-briefcase"></i>',
        '<i class="fas fa-chart-line"></i>',
        '<i class="fas fa-handshake"></i>',
        '<i class="fas fa-clipboard-list"></i>',
        '<i class="fas fa-award"></i>'
    ];
    
    // 創建鼠標軌跡元素
    for (let i = 0; i < maxTrails; i++) {
        const trail = document.createElement('div');
        trail.classList.add('cursor-trail');
        cursorContainer.appendChild(trail);
        trails.push({
            element: trail,
            x: 0,
            y: 0,
            delay: i * 2 // 每個軌跡點的延遲
        });
    }
    
    // 鼠標移動事件
    document.addEventListener('mousemove', (e) => {
        // 更新主鼠標點位置
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
        
        // 更新圖標位置
        cursorIcon.style.left = `${e.clientX}px`;
        cursorIcon.style.top = `${e.clientY - 30}px`;
        
        // 更新軌跡位置（帶延遲）
        setTimeout(() => {
            updateTrails(e.clientX, e.clientY);
        }, 10);
    });
    
    // 鼠標點擊事件
    document.addEventListener('mousedown', () => {
        cursorDot.classList.add('clicked');
        
        // 隨機顯示一個HR圖標
        showRandomHRIcon();
    });
    
    document.addEventListener('mouseup', () => {
        cursorDot.classList.remove('clicked');
        
        // 隱藏圖標
        setTimeout(() => {
            cursorIcon.classList.remove('show');
        }, 1000);
    });
    
    // 處理可點擊元素的懸停效果
    const clickableElements = document.querySelectorAll('a, button, .project-card, input[type="submit"], .social-link');
    
    clickableElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorDot.classList.add('hover');
            element.style.cursor = 'none';
        });
        
        element.addEventListener('mouseleave', () => {
            cursorDot.classList.remove('hover');
        });
    });
    
    // 更新軌跡位置
    function updateTrails(x, y) {
        trails.forEach((trail, index) => {
            setTimeout(() => {
                trail.x = x;
                trail.y = y;
                trail.element.style.left = `${x}px`;
                trail.element.style.top = `${y}px`;
                
                // 調整大小和透明度，使軌跡逐漸消失
                const scale = 1 - (index / maxTrails);
                const opacity = 1 - (index / maxTrails);
                trail.element.style.transform = `translate(-50%, -50%) scale(${scale})`;
                trail.element.style.opacity = opacity;
            }, trail.delay);
        });
    }
    
    // 顯示隨機HR圖標
    function showRandomHRIcon() {
        const randomIcon = hrIcons[Math.floor(Math.random() * hrIcons.length)];
        cursorIcon.innerHTML = randomIcon;
        cursorIcon.classList.add('show');
    }
    
    // 處理鼠標離開視窗
    document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = '0';
        trails.forEach(trail => {
            trail.element.style.opacity = '0';
        });
    });
    
    document.addEventListener('mouseenter', () => {
        cursorDot.style.opacity = '1';
    });
}

// 設置證書輪播功能
function setupCertificateTabs() {
    const carousels = document.querySelectorAll('.cert-carousel');
    
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.cert-slide');
        const dotsContainer = carousel.querySelector('.cert-dots');
        const prevBtn = carousel.querySelector('.cert-prev');
        const nextBtn = carousel.querySelector('.cert-next');
        
        if (!slides.length) return;
        
        let currentIndex = 0;
        let autoSlideInterval;
        let isPaused = false;
        
        // 創建輪播點
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('cert-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        // 切換到指定幻燈片
        function goToSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            const dots = dotsContainer.querySelectorAll('.cert-dot');
            dots.forEach(dot => dot.classList.remove('active'));
            
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentIndex = index;
        }
        
        // 下一張幻燈片
        function nextSlide() {
            const newIndex = (currentIndex + 1) % slides.length;
            goToSlide(newIndex);
        }
        
        // 上一張幻燈片
        function prevSlide() {
            const newIndex = (currentIndex - 1 + slides.length) % slides.length;
            goToSlide(newIndex);
        }
        
        // 設置自動輪播
        function setupAutoSlide() {
            if (autoSlideInterval) clearInterval(autoSlideInterval);
            
            autoSlideInterval = setInterval(() => {
                if (!isPaused) {
                    nextSlide();
                }
            }, 5000); // 每5秒切換一次
        }
        
        // 按鈕事件
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        
        // 滑鼠懸停時暫停自動輪播
        carousel.addEventListener('mouseenter', () => {
            isPaused = true;
        });
        
        carousel.addEventListener('mouseleave', () => {
            isPaused = false;
        });
        
        // 初始化自動輪播
        setupAutoSlide();
    });
}
window.addEventListener('DOMContentLoaded', function() {
  const floatingBackToTop = document.getElementById('floatingBackToTop');
  if (floatingBackToTop) {
    floatingBackToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
        floatingBackToTop.style.display = 'flex';
      } else {
        floatingBackToTop.style.display = 'none';
      }
    });
    // 預設隱藏
    floatingBackToTop.style.display = 'none';
  }
});
