
// Projects data
const projects = [
    {
        title: "人臉網格檢測應用",
        description: "使用MediaPipe進行人臉網格檢測，支援即時攝像頭和圖片處理兩種模式",
        background: "隨著人工智慧技術的發展，人臉網格檢測技術在面部識別、表情分析和AR應用等領域扮演著重要角色。本系統運用MediaPipe技術，實現即時人臉網格檢測，為用戶提供直觀的視覺化效果。",
        goals: [
            "開發即時人臉網格檢測功能",
            "支援圖片上傳處理模式",
            "提供直觀的視覺化界面",
            "確保系統的實時性和穩定性"
        ],
        process: [
            "技術選型：選擇MediaPipe作為核心技術",
            "界面開發：使用Streamlit構建友好的用戶界面",
            "功能實現：開發即時攝像頭和圖片處理模式",
            "系統優化：確保檢測的準確性和實時性"
        ],
        techDetails: [
            "MediaPipe：人臉網格檢測核心技術",
            "Python：主要開發語言",
            "OpenCV：圖像處理和攝像頭操作",
            "Streamlit：網頁界面開發框架"
        ],
        results: [
            "實現即時人臉網格檢測",
            "支援圖片上傳和處理",
            "提供流暢的用戶體驗",
            "適用於面部識別和AR應用"
        ],
        tech: ["Python", "MediaPipe", "OpenCV", "Streamlit"],
        image: "face.jpg",
        category: "design"
    },
    {
        title: "圖像處理系統",
        description: "提供基礎的圖像處理功能，包括濾鏡效果、RGB色彩調整、亮度和對比度控制",
        background: "隨著數位內容的普及，對圖像處理的需求日益增加。本系統提供直觀的圖像處理工具，讓使用者能夠輕鬆調整圖片的各種參數，實現理想的視覺效果。",
        goals: [
            "開發直觀的用戶界面，方便用戶上傳和處理圖像",
            "提供多種基礎圖像處理功能",
            "實現濾鏡效果和RGB色彩調整",
            "支援亮度和對比度的精確控制"
        ],
        process: [
            "技術選型：選擇合適的圖像處理框架",
            "界面開發：使用Streamlit框架開發簡潔易用的網頁界面",
            "功能整合：實現濾鏡、RGB調色、亮度和對比度調整",
            "系統優化：進行多輪測試和改進"
        ],
        techDetails: [
            "Python：主要開發語言",
            "Streamlit：用於構建網頁界面",
            "OpenCV：圖像處理核心庫",
            "濾鏡效果：支援原始和RGB調色",
            "參數調整：支援RGB通道(-100~100)、亮度(-100~100)和對比度(0.00~2.00)控制"
        ],
        results: [
            "建立了功能完整的圖像處理系統",
            "實現濾鏡效果和RGB色彩調整",
            "支援亮度和對比度的精確控制",
            "提供流暢的使用者體驗"
        ],
        tech: ["Python", "Streamlit", "OpenCV"],
        image: "xiu.jpg",
        category: "design"
    },
    {
        title: "AI GPT對話助手",
        description: "基於GPT模型的智能對話系統，提供自然流暢的人機交互體驗",
        background: "隨著人工智慧技術的發展，智能對話系統在日常生活和工作中扮演著越來越重要的角色。本專案旨在開發一個基於GPT模型的對話助手，為用戶提供智能化的對話服務，協助解決各類問題和需求。",
        goals: [
            "建立直觀的用戶介面，方便用戶進行對話互動",
            "整合GPT模型，提供智能化的回答和建議",
            "確保系統回答的準確性和實用性",
            "優化使用者體驗，提供流暢的對話互動"
        ],
        process: [
            "技術選型：選擇合適的GPT模型和開發框架",
            "介面開發：使用Streamlit框架開發簡潔易用的網頁介面",
            "模型整合：整合GPT模型，實現智能對話功能",
            "系統優化：進行多輪測試和優化，提升對話質量"
        ],
        techDetails: [
            "Python：主要開發語言，用於後端邏輯實現",
            "Streamlit：用於構建直觀的網頁介面",
            "GPT模型：處理自然語言對話，提供智能化回答"
        ],
        results: [
            "建立了一個功能完整的智能對話系統",
            "提供流暢、自然的對話體驗",
            "支持多種對話場景和需求",
            "具備良好的擴展性和可維護性"
        ],
        tech: ["Python", "Streamlit", "GPT"],
        image: "gpt.jpg",
        category: "design"
    },
    {
        title: "法規知識簡易問答系統",
        description: "打造智能化的法規諮詢助手",
        background: "隨著交通法規的不斷更新與複雜化，民眾在理解和查詢相關規定時常遇到困難。本系統旨在運用AI技術，為使用者提供便捷、準確的法規諮詢服務，幫助民眾更好地了解和遵守交通法規。",
        goals: [
            "建立直觀的用戶介面，方便民眾快速查詢交通法規",
            "整合AI模型，提供智能化的法規解釋和建議",
            "確保系統回答的準確性和實用性",
            "優化使用者體驗，提供清晰的問答互動流程"
        ],
        process: [
            "資料庫建置：收集和整理最新的交通法規資料，建立結構化的知識庫",
            "AI模型整合：使用大型語言模型處理用戶查詢，提供準確的法規解釋",
            "介面開發：使用Streamlit框架開發簡潔易用的網頁介面",
            "系統測試：進行多輪測試和優化，確保回答的準確性和實用性"
        ],
        techDetails: [
            "Python：主要開發語言，用於後端邏輯實現",
            "Streamlit：用於構建直觀的網頁介面",
            "大型語言模型：處理自然語言查詢，提供智能化回答"
        ],
        results: [
            "建立了一個功能完整的法規問答系統",
            "提供準確、及時的法規諮詢服務",
            "優化了使用者體驗，降低查詢門檻",
            "協助民眾更好地理解和遵守交通法規"
        ],
        tech: ["Python", "Streamlit", "AI模型"],
        image: "fg.jpg",
        category: "design"
    },
    {
        title: "AI Gemini語音助手",
        description: "整合Google Gemini多模態大模型與gTTS語音合成引擎，打造了一個智能助手。",
        background: "隨著人工智慧技術的快速發展，自然語言處理(NLP)和語音合成(TTS)技術已成為人機交互的核心。根據市場研究，全球語音助手市場預計將在2025年達到157億美元規模",
        goals: [
            "本地運行：開發一個完全在本地運行的應用，無需依賴雲端服務，保護用戶隱私",
            "用戶友好介面：提供直觀且易於使用的用戶介面，方便用戶操作和查看結果"
        ],
        process: [
            "技術選型：選擇 Google 推出的開源模型 Gemma 3，該模型具備強大的視覺理解能力，支持多語言處理，並能處理長文本上下文",
            "使用 Streamlit 作為前端框架，快速構建交互式網頁應用",
            "集成 Gemma 3 模型，對上傳的內容進行處理，提取文字信息"
        ],
        techDetails: [
            "Gemma 3 模型：一款輕量級的開源 AI 模型，具備視覺理解、多語言處理和長文本上下文處理能力，適合在本地環境中運行",
            "Streamlit 框架：一個用於構建數據應用的開源 Python 庫，能快速構建交互式網頁應用，適合展示 AI 模型的處理結果",
        ],
        results: [
            "直觀的用戶界面和操作流程",
        ],
        tech: ["Python", "Gemma 3", "Streamlit"],
        image: "yuyin.jpg",
        category: "design"
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
    {
      title: "HR Trend: Retention of Talent 人才留任策略研究",
      description: "探討企業吸引與留住人才的多元策略，包括開發隱藏人才、落實DEI、多元工作模式等",
      background: "在全球化與遠距工作的發展趨勢下，企業正面臨前所未有的人才競爭壓力。如何「吸引、培育、留任」關鍵人才，已成為企業人資策略的核心議題。本專案旨在探討當前HR的熱門趨勢：人才留任（Retention of Talent），透過多角度分析，找出企業可採行的有效策略，包括開發隱藏人才、落實DEI、多元工作模式、員工發展計畫與福利制度等。",
      goals: [
        "探討企業吸引與留住人才的多元策略。",
        "分析隱藏人才與多元勞動力對企業的價值。",
        "建立員工發展與個人職涯規劃的實務流程。",
        "彙整國際企業（如Google）的人資實踐案例作為參考。",
        "製作一份視覺化且易於理解的資訊圖表，提高大眾對人才管理的認識。"
      ],
      process: [
        "資料蒐集與整理：參考國內外人力資源相關報告與實務案例，包含DEI策略、IDP制度、Google的人資政策等。",
        "架構設計與內容規劃：將重點分為六大主題：隱藏人才、DEI策略、混合辦公、員工發展計畫、福利制度與Google實務案例。",
        "視覺統整與排版：運用顏色分類與圖示輔助，清晰呈現各項策略，讓讀者一目了然。",
        "反覆修正與優化：依據回饋修正內容，確保資訊正確性與排版美觀性。"
      ],
      techDetails: [
        "設計工具：使用Canva或Figma進行資訊圖表製作。",
        "內容彙整：運用Excel、Google文件協作整理資料。",
        "可視化呈現：透過icon、流程圖與色塊分類強化資訊閱讀效率。",
        "團隊協作：分工完成資料查找、內容撰寫、設計製作與最終彙整。"
      ],
      results: [
        "資訊圖表完成：製作出一張完整且易於理解的HR留才趨勢圖，包含六大主題，圖文並茂。",
        "策略整合能力提升：團隊成員對人資發展、DEI、混合工作制度等有更深入理解。",
        "應用實務案例：透過Google的人資實踐，有效結合理論與實際應用。",
        "後續應用潛力：此專案內容可作為企業內訓教材、學術報告或人資部門政策提案基礎。"
      ],
      tech: ["Canva", "Excel", "Google Docs"],
      image: "PS.png",
      category: "design"
    },
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
    
    const filteredProjects = category === 'all' ? 
        projects : 
        projects.filter(project => project.category === category);
    
    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.category = project.category;
        
        const hasLink = project.link && project.link !== '#';
        card.innerHTML = `
            <div class="project-link" style="cursor: pointer;">
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
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    
    // Auto slide change
    const slideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
    
    function showSlide(index) {
        // Update index
        currentIndex = index % slides.length;
        if (currentIndex < 0) currentIndex = slides.length - 1;
        
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Show current slide
        slides[currentIndex].classList.add('active');
        
        // Update dots
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }
    
    // Next and Previous buttons
    nextBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        showSlide(currentIndex + 1);
    });
    
    prevBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        showSlide(currentIndex - 1);
    });
    
    // Dots navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(index);
        });
    });
}

// Dark Mode Toggle
function setupDarkMode() {
    const toggle = document.getElementById('darkModeToggle');
    const icon = toggle.querySelector('i');
    
    toggle.addEventListener('click', () => {
        document.body.setAttribute('data-theme', 
            document.body.getAttribute('data-theme') === 'dark' ? '' : 'dark');
        
        icon.className = document.body.getAttribute('data-theme') === 'dark' ? 
            'fas fa-sun' : 'fas fa-moon';
        
        localStorage.setItem('theme', document.body.getAttribute('data-theme') || '');
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
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

// Contact Form
function setupContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Form validation and submission feedback
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            // Simulate form submission (in real app, send data to server)
            alert(`感謝您的來信，${name}！\n我會盡快回覆您。`);
            form.reset();
        } else {
            alert('請填寫所有必填欄位');
        }
    });
}

// Back to Top Button
function setupBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animate Skill Bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const level = bar.getAttribute('data-level');
                bar.style.width = `${level}%`;
            }
        });
    }, { threshold: 0.3 });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}
