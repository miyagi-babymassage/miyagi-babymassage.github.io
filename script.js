// 年号
document.getElementById('year').textContent = new Date().getFullYear();

// ハンバーガーメニュー制御
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
