// ===== script.js (ローカル画像版) =====
// Supabase不使用。images/フォルダ内の固定ファイルを直接参照します。
// 画像を更新する場合は同じファイル名で上書きしてNetlifyに再デプロイするだけでOKです。

// ── 表示データ ─────────────────────────────────────────────────
const defaultData = {
  "heroImage": "images/hero.webp",
  "baseDesigns": [
    { "name": "ワンカラー",       "desc": "シンプルで上品な美しさ",       "emoji": "🌸", "image": "images/base-design-1.webp" },
    { "name": "グラデーション",   "desc": "自然なグラデで指先を美しく",   "emoji": "✨", "image": "images/base-design-2.webp" },
    { "name": "フレンチ",         "desc": "清潔感のある王道デザイン",     "emoji": "🤍", "image": "images/base-design-3.webp" }
  ],
  "options": [
    { "name": "ストーン追加", "price": "¥110", "emoji": "💎", "image": "images/option-1.webp" },
    { "name": "ラメライン",   "price": "¥550", "emoji": "✨", "image": "images/option-2.webp" },
    { "name": "マグネット",   "price": "¥550", "emoji": "🌸", "image": "images/option-3.webp" }
  ],
  "combos": [
    { "name": "ワンカラー＋ストーン",           "emoji": "🌸", "image": "images/combo-1.webp" },
    { "name": "グラデーション＋ラメライン",     "emoji": "✨", "image": "images/combo-2.webp" },
    { "name": "フレンチ＋シンプルアート",       "emoji": "🤍", "image": "images/combo-3.webp" },
    { "name": "ワンカラー＋アート＋ストーン",   "emoji": "💎", "image": "images/combo-4.webp" }
  ],
  "recommend": [
    "初めてネイルをする方",
    "シンプル・ナチュラルが好きな方",
    "お仕事上、派手なネイルができない方",
    "短時間で綺麗に仕上げたい方"
  ],
  "faq": [
    { "q": "追加料金はかかりますか？",       "a": "オプション追加の場合のみ頂戴します。" },
    { "q": "どのくらい持ちますか？",         "a": "個人差はありますが、3〜4週間程度です。" },
    { "q": "爪に優しいジェルはありますか？", "a": "自爪を削らないパラジェルや、フィルイン等のお爪に優しい施術方法をご用意しております。" }
  ],
  "footerText": "シンプルだけど、自分らしく輝く指先へ。",
  "optionMonthlyBadge": "毎月デザインが変わる♡",
  "comboDesc": "組み合わせ次第で自分だけの特別なデザインに ♡",
  "popImage": "images/pop.webp"
};

// ── レンダリング ───────────────────────────────────────────────
function render(data) {
  // Hero
  const hi = document.getElementById('hero-img');
  if (hi && data.heroImage) hi.src = data.heroImage;

  // Base designs
  const grads = [
    'linear-gradient(135deg,#fce4ed,#f8c8d8)',
    'linear-gradient(135deg,#f8d4e8,#f0b8d0)',
    'linear-gradient(135deg,#fde8f0,#f8d0e4)'
  ];
  const baseList = document.getElementById('base-list');
  if (baseList) {
    baseList.innerHTML = data.baseDesigns.map((d, i) => {
      const img = d.image
        ? `<img src="${d.image}" alt="${d.name}">`
        : `<span style="font-size:40px">${d.emoji}</span>`;
      return `<div class="base-card">
        <div class="base-card-img" style="${grads[i] || grads[0]}">${img}</div>
        <div class="base-card-body">
          <div class="base-card-name">${d.name}</div>
          <div class="base-card-desc">${d.desc}</div>
        </div></div>`;
    }).join('');
  }

  // Options
  const og = [
    'linear-gradient(135deg,#fce8f0,#f8d0e4)',
    'linear-gradient(135deg,#f8e0f4,#f0c8ec)',
    'linear-gradient(135deg,#fde8f0,#f8d8e8)'
  ];
  const optionsGrid = document.getElementById('options-grid');
  if (optionsGrid) {
    optionsGrid.innerHTML = data.options.map((o, i) => {
      const img = o.image
        ? `<img src="${o.image}" alt="${o.name}">`
        : `<span style="font-size:24px">${o.emoji}</span>`;
      const price = o.price || '';
      return `<div class="option-card">
        <div class="option-card-img" style="background:${og[i] || og[0]}">${img}</div>
        <div class="option-card-name">${o.name}</div>
        ${price ? `<div style="text-align:center;padding-bottom:10px"><span class="option-card-price">${price}</span></div>` : ''}
      </div>`;
    }).join('');
  }

  const badge = document.getElementById('monthly-badge');
  if (badge) badge.textContent = data.optionMonthlyBadge || '';

  const popImg = document.getElementById('pop-img');
  if (popImg && data.popImage) popImg.src = data.popImage;

  // Combo
  const cg = [
    'linear-gradient(135deg,#fce4ed,#f8c8d8)',
    'linear-gradient(135deg,#f8d8f0,#f0c0e4)',
    'linear-gradient(135deg,#fde8f4,#fad0e8)',
    'linear-gradient(135deg,#fce0ec,#f4b8cc)'
  ];
  const comboScroll = document.getElementById('combo-scroll');
  if (comboScroll) {
    comboScroll.innerHTML = data.combos.map((c, i) => {
      const img = c.image
        ? `<img src="${c.image}" alt="${c.name}">`
        : `<span style="font-size:22px">${c.emoji}</span>`;
      return `<div class="combo-card"><div class="combo-card-img" style="background:${cg[i] || cg[0]}">${img}</div></div>`;
    }).join('');
  }

  const comboDesc = document.getElementById('combo-desc');
  if (comboDesc) {
    comboDesc.innerHTML =
      `<strong>${data.comboDesc}</strong><br>スタッフと相談しながらお好みでカスタマイズできます`;
  }

  const recommendList = document.getElementById('recommend-list');
  if (recommendList) {
    recommendList.innerHTML = (data.recommend || []).map(r => `<li>${r}</li>`).join('');
  }

  const faqList = document.getElementById('faq-list');
  if (faqList) {
    faqList.innerHTML = (data.faq || []).map(f =>
      `<div class="faq-item"><div class="faq-q">${f.q}</div><div class="faq-a">${f.a}</div></div>`
    ).join('');
  }

  const footerText = document.getElementById('footer-text');
  if (footerText) footerText.textContent = data.footerText || '';
}

// ── DOM読み込み完了後に描画 ────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  render(defaultData);
});

// ======== POP MODAL ========
let popScale = 1, popX = 0, popY = 0;
let lastDist = 0;
let isDragging = false, dragStartX = 0, dragStartY = 0, dragBaseX = 0, dragBaseY = 0;
let lastTap = 0;

function openPop() {
  const modal = document.getElementById('pop-modal');
  const img = document.getElementById('pop-img');
  if (!img || !img.src || img.src === window.location.href) return;
  popScale = 1; popX = 0; popY = 0;
  applyTransform();
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closePop() {
  document.getElementById('pop-modal').classList.remove('open');
  document.body.style.overflow = '';
}
function applyTransform() {
  const img = document.getElementById('pop-img');
  if (img) img.style.transform = `translate(${popX}px,${popY}px) scale(${popScale})`;
}

// タッチ・マウスイベントはDOM構築後に設定
document.addEventListener('DOMContentLoaded', function() {
  const inner = document.getElementById('pop-inner');
  if (!inner) return;

  inner.addEventListener('touchstart', e => {
    if (e.touches.length === 1) {
      const now = Date.now();
      if (now - lastTap < 300) {
        popScale = popScale > 1 ? 1 : 2.5; popX = 0; popY = 0; applyTransform();
        lastTap = 0; return;
      }
      lastTap = now;
      isDragging = true;
      dragStartX = e.touches[0].clientX;
      dragStartY = e.touches[0].clientY;
      dragBaseX = popX; dragBaseY = popY;
    } else if (e.touches.length === 2) {
      isDragging = false;
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      lastDist = Math.sqrt(dx * dx + dy * dy);
    }
    e.preventDefault();
  }, { passive: false });

  inner.addEventListener('touchmove', e => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      popScale = Math.min(Math.max(popScale * (dist / lastDist), 0.5), 6);
      lastDist = dist;
      applyTransform();
    } else if (e.touches.length === 1 && isDragging && popScale > 1) {
      popX = dragBaseX + (e.touches[0].clientX - dragStartX);
      popY = dragBaseY + (e.touches[0].clientY - dragStartY);
      applyTransform();
    }
    e.preventDefault();
  }, { passive: false });

  inner.addEventListener('touchend', e => {
    if (e.touches.length < 2) isDragging = false;
    if (popScale < 1) { popScale = 1; popX = 0; popY = 0; applyTransform(); }
  });

  inner.addEventListener('wheel', e => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.85 : 1.18;
    popScale = Math.min(Math.max(popScale * delta, 0.5), 6);
    applyTransform();
  }, { passive: false });

  let mouseDown = false, mStartX = 0, mStartY = 0, mBaseX = 0, mBaseY = 0;
  inner.addEventListener('mousedown', e => {
    if (popScale <= 1) return;
    mouseDown = true; mStartX = e.clientX; mStartY = e.clientY; mBaseX = popX; mBaseY = popY;
  });
  window.addEventListener('mousemove', e => {
    if (!mouseDown) return;
    popX = mBaseX + (e.clientX - mStartX); popY = mBaseY + (e.clientY - mStartY); applyTransform();
  });
  window.addEventListener('mouseup', () => mouseDown = false);

  const modal = document.getElementById('pop-modal');
  if (modal) modal.addEventListener('click', e => {
    if (e.target.id === 'pop-modal') closePop();
  });

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePop(); });
});
