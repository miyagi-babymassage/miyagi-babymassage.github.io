// メニュー開閉
const menuToggle = document.getElementById('menu-toggle');
const siteNav = document.getElementById('site-nav');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', () => {
  siteNav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  siteNav.classList.remove('active');
});

// メニュー外クリックで閉じる
document.addEventListener('click', (e) => {
  if (siteNav.classList.contains('active') && !siteNav.contains(e.target) && e.target !== menuToggle) {
    siteNav.classList.remove('active');
  }
});
