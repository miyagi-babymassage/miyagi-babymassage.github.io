document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const slideMenu = document.getElementById("slide-menu");
  const closeBtn = document.getElementById("close-btn");

  menuToggle.addEventListener("click", () => {
    slideMenu.classList.add("active");
  });
  closeBtn.addEventListener("click", () => {
    slideMenu.classList.remove("active");
  });
});
