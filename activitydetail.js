// activitydetail.js
// 專業酷炫的活動詳情互動效果

document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const container = document.getElementById('activity-detail');

  if (!container) return;

  // 動態進場動畫
  container.style.opacity = 0;
  container.style.transform = 'translateY(40px)';
  setTimeout(() => {
    container.style.transition = 'opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)';
    container.style.opacity = 1;
    container.style.transform = 'translateY(0)';
  }, 100);

  // 活動資料
  const activityData = {
    beach: {
      title: '國際親善大使團 × 搖滾實驗室｜淨灘大報社',
      img: 'clean.jpg',
      date: '2023.10 - 2024.04',
      desc: '於新北福隆海水浴場參與大型淨灘行動，分組合作，清理海灘垃圾並推動垃圾分類。',
      highlights: [
        '團隊合作與分工，提升溝通協調能力',
        '學習垃圾分類與環保知識',
        '實地參與，體會社會責任與永續行動'
      ],
      icon: '<i class="fas fa-leaf"></i>',
      theme: '#27ae60'
    },
    stall: {
      title: '創業擺攤實作',
      img: 'baitan.jpg',
      date: '2024.03',
      desc: '與三位組員合作進行為期一個月、每週擺攤一天的創業實作，販售魚板湯與拳頭飯糰，共銷售99碗魚板湯與142顆飯糰，營收突破5,000元。從備料到銷售全程參與，培養了團隊合作、臨場應變與顧客服務等實戰能力，收穫豐富。',
      highlights: [
        '全程參與備料、銷售與顧客服務',
        '學習創業流程與現場應變',
        '提升團隊合作與溝通能力'
      ],
      icon: '<i class="fas fa-utensils"></i>',
      theme: '#e67e22'
    }
  };

  const data = activityData[type];

  if (data) {
    container.innerHTML = `
      <button id="back-btn" style="position:absolute;left:24px;top:24px;background:rgba(255,255,255,0.8);border:none;border-radius:50%;width:44px;height:44px;box-shadow:0 2px 8px rgba(0,0,0,0.08);font-size:1.3rem;cursor:pointer;transition:background 0.2s;"><i class='fas fa-arrow-left'></i></button>
      <div class="activity-detail-card" style="max-width:600px;margin:60px auto 32px auto;padding:40px 32px 32px 32px;background:#fff;border-radius:22px;box-shadow:0 4px 32px rgba(44,62,80,0.10);display:flex;flex-direction:column;align-items:center;">
        <div class="activity-detail-icon" style="font-size:2.8rem;color:${data.theme};margin-bottom:12px;">${data.icon}</div>
        <h2 class="activity-detail-title" style="font-size:2rem;font-weight:700;margin-bottom:10px;letter-spacing:1px;line-height:1.2;background:linear-gradient(90deg,${data.theme},#3498db 80%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:popTitle 0.7s cubic-bezier(.4,2,.6,1);">${data.title}</h2>
        <img src="${data.img}" alt="${data.title}" class="activity-detail-img" style="width:90%;max-width:340px;border-radius:16px;box-shadow:0 2px 16px rgba(44,62,80,0.10);margin:18px 0 18px 0;transition:transform .3s;cursor:pointer;">
        <div class="activity-detail-date" style="color:#888;font-size:1.08rem;margin-bottom:10px;">${data.date}</div>
        <p style="font-size:1.08rem;margin-bottom:18px;">${data.desc}</p>
        <ul style="text-align:left;font-size:1.05rem;line-height:1.7;margin-bottom:0;padding-left:1.2em;">
          ${data.highlights.map(h=>`<li>${h}</li>`).join('')}
        </ul>
      </div>
      <style>
        @keyframes popTitle {0%{transform:scale(0.8);opacity:0;}100%{transform:scale(1);opacity:1;}}
        .activity-detail-img:hover {transform:scale(1.07) rotate(-2deg);box-shadow:0 8px 32px rgba(52,152,219,0.13);}
        #back-btn:hover {background:#f2f6fa;}
      </style>
    `;
    // 返回上一頁
    document.getElementById('back-btn').onclick = () => history.back();
  } else {
    container.innerHTML = '<p style="text-align:center;font-size:1.2rem;margin-top:80px;">查無此活動內容。</p>';
  }
});
