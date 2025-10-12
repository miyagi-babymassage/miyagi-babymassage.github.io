function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}

let lastScrollTop = 0;
window.addEventListener("scroll", function(){
  let st = window.pageYOffset || document.documentElement.scrollTop;
  const nav = document.getElementById("bottomNav");
  const header = document.getElementById("mainHeader");

  if (st > 100) {
    nav.style.bottom = "0";      // 下ナビ表示
    header.style.top = "-80px";  // ヘッダー非表示
  } else {
    nav.style.bottom = "-60px";  // 下ナビ隠す
    header.style.top = "0";      // ヘッダー戻すmmmm
  }
  lastScrollTop = st <= 0 ? 0 : st;
}, false);
