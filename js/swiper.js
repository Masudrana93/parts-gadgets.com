//for Section-1 == main slider
var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

//for Section-1 == Shop by category Slider
var swiper = new Swiper(".mySwiper2", {
      slidesPerView: 5,
      spaceBetween: 30,
      navigation: {
        nextEl: ".category-button-next2",
        prevEl: ".category-button-prev2",
      },
    });