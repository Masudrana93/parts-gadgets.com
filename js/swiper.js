//for Section-1 == main slider
var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      
    });

//for Section-2 == Shop by category Slider
var swiper = new Swiper(".mySwiper2", {
      slidesPerView: 5,
      spaceBetween: 30,
      navigation: {
        nextEl: ".category-button-next2",
        prevEl: ".category-button-prev2",
      },
      breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
      
    }
    });

//for Section-3 == Top Sales Slider
    var swiper = new Swiper(".mySwiper3", {
      slidesPerView: 4,
      // grid: {
      //   rows: 2,
      // },
      spaceBetween: 30,
      navigation: {
        nextEl: ".top-sales-button-next",
        prevEl: ".top-sales-button-prev",
      },
      breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
      
    }
    });

    //for Section-4 == Car Parts Slider
    var swiper = new Swiper(".mySwiper4", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".car-parts-button-next",
        prevEl: ".car-parts-button-prev",
      },
      breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      
    }
    });

     //for Section-5 == Tractor Parts Slider
    var swiper = new Swiper(".mySwiper5", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".tractor-parts-button-next",
        prevEl: ".tractor-parts-button-prev",
      },
      breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      
    }
    });


     //for Section-6 == Harvester Parts Slider
    var swiper = new Swiper(".mySwiper6", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".harvester-parts-button-next",
        prevEl: ".harvester-parts-button-prev",
      },
      breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      
    }
    });


     //for Section-7 == Motorbike Parts Slider
    var swiper = new Swiper(".mySwiper7", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".motorbike-parts-button-next",
        prevEl: ".motorbike-parts-button-prev",
      },
      breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      
    }
    });


    //for Section-7 == Deal of the day Slider
    var swiper = new Swiper(".mySwiper8", {
    slidesPerView: 2,
    grid: {
      rows: 2,
      fill: 'row'
    },
    spaceBetween: 30,
    navigation: {
      nextEl: ".deal-of-day-button-next",
      prevEl: ".deal-of-day-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: false, // Set to true if you want infinite loop
    breakpoints: {
      0: {
        slidesPerView: 1,
        grid: {
          rows: 1
        }
      },
      768: {
        slidesPerView: 2,
        grid: {
          rows: 2
        }
      }
    }
  });

  //for Section- == New Product Slider
var swiper = new Swiper(".mySwiper9", {
      navigation: {
        nextEl: ".new-product-swiper-button-next",
        prevEl: ".new-product-swiper-button-prev",
      },
      
    });

// For*** Single Page*** product view ******
  function changeImage(el) {
      const mainImg = document.getElementById("mainImage");
      mainImg.src = el.src;

      // Remove active from all thumbnails
      document.querySelectorAll(".thumbnail-image").forEach(img => img.classList.remove("active"));

      // Add active to clicked thumbnail
      el.classList.add("active");
     }

