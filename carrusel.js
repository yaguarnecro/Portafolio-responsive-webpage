var swiper = new Swiper('.swiper-container', {
    autoHeight: true,
    slidesPerView: 4,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1740: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        769: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 1,
            spaceBetween: 2,
        },
    },

});