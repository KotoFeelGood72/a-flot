jQuery(document).ready(function($){

    var swiper = new Swiper(".new-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: "#new-next",
        prevEl: "#new-prev",
      },
      breakpoints: {
        1: {
          slidesPerView: 1,
  
        },
        768: {
          slidesPerView: 1,
  
        },
        769: {
          slidesPerView: 2,
        },
        1240: {
          slidesPerView: 2,
        },
        1241: {
          slidesPerView: 3,
        },
       
      },
      
    });
    var swiper = new Swiper(".new-slider-1", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: "#new-next-1",
        prevEl: "#new-prev-1",
      },
      breakpoints: {
        1: {
          slidesPerView: 1,
  
        },
        768: {
          slidesPerView: 1,
  
        },
        769: {
          slidesPerView: 2,
        },
        1240: {
          slidesPerView: 2,
        },
        1241: {
          slidesPerView: 3,
        },
       
      },
      
    });

});