document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("menuToggle");
  const menuOverlay = document.getElementById("menuOverlay");
  const menuClose = document.getElementById("menuClose");

  if (menuToggle && menuOverlay && menuClose) {
    menuToggle.addEventListener("click", function() {
      menuOverlay.classList.add("active");
    });

    menuClose.addEventListener("click", function() {
      menuOverlay.classList.remove("active");
    });
  }
});
