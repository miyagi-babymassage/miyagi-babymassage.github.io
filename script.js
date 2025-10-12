const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// メニューの開閉
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  navMenu.classList.toggle('open');
});

// メニュー外をクリックで閉じる
document.addEventListener('click', (e) => {
  if (navMenu.classList.contains('open') &&
      !navMenu.contains(e.target) &&
      !menuToggle.contains(e.target)) {
    navMenu.classList.remove('open');
    menuToggle.classList.remove('open');
  }
});
