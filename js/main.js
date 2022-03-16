//hamburger-menu

const nav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");
const menuBtn = document.querySelector('.menu-btn');

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        menuBtn.classList.add('open');
    } else {
        nav.setAttribute("data-visible", false);
        menuBtn.classList.remove('open');
    }
})