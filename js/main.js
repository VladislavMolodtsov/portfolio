const toggle = document.querySelector('.toggle__bar');
const nav = document.querySelector('.navigation__bar');

if (toggle) {
    toggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}