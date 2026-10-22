/* =========================
   MENÚ PARA CELULAR
========================= */

const menuBtn = document.getElementById("menuBtn");

const nav = document.querySelector("nav");


if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("open");

    });

}


/* =========================
   ANIMACIONES AL HACER SCROLL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {

        threshold: 0.15

    }

);


revealElements.forEach((element) => {

    observer.observe(element);

});