
// other js interactivity goes here


/*=============== SWIPER PROJECTS ===============*/

let swiperProjects = new Swiper(".projects__container", {

    // cssMode: true,
    loop: true,
    spaceBetween: 24,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },

    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
    },

});
