document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");
  const closeBtn = document.getElementById("close");

  hamburger.addEventListener("click", () => {
    nav.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
