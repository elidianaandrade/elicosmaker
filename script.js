/* TOGGLE MENU ACTIVE */
function toggleMenuActive() {
  const toggleNav = document.getElementById('header-bar');
  toggleNav.classList.toggle('active');
}

const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', toggleMenuActive);
/* TOGGLE MENU ACTIVE END */
