const initApp = () => {
  const hamburgerBtn = document.querySelector("#hamburger-button");
  const mobileMenu = document.querySelector("#mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerBtn.classList.toggle('toggle-btn')
  };
  hamburgerBtn.addEventListener('click', toggleMenu);
  mobileMenu.addEventListener('click', toggleMenu);
};
document.addEventListener('DOMContentLoaded', initApp);
