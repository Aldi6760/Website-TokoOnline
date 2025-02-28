//swiper 
var swiper = new Swiper('.home', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,  // Slide otomatis setiap 3 detik
        disableOnInteraction: false, // Tetap autoplay meskipun user interaksi
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
