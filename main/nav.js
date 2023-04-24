{
    const nav= document.querySelector(".nav__list");
    const navButton=document.querySelector(".nav__button");
    const menuOpen=document.querySelector(".menu-open");
    const menuClose=document.querySelector(".menu-close");
    const overlay=document.querySelector(".nav__overlay");

    navButton.addEventListener("click", () => {
        nav.classList.toggle("nav__list-open");
        menuOpen.classList.toggle("menu-open-active");
        menuClose.classList.toggle("menu-close-active");
        overlay.classList.toggle("nav__overlay-active");
    });

}
