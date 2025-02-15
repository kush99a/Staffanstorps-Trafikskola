const hamburger = document.getElementById('hamburger-icon');
const mobileMenu = document.getElementById('mobile-menu');


hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});


mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});