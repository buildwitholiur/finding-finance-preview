document.addEventListener("DOMContentLoaded", function () {
  // Testimonial Slider
  var swiperTestimonial = new Swiper(".swiper--testimonial", {
    slidesPerView: 2.5,
    spaceBetween: 16,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".testimonial__slider-btn--next",
      prevEl: ".testimonial__slider-btn--prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
      },
      767: {
        slidesPerView: 1.5,
      },
      991: {
        slidesPerView: 2.5,
      },
    },
  });

  var gallerySlider = new Swiper(".swiper--loan", {
    effect: "coverflow",
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.8,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination--loan",
      type: "bullets",
      clickable: true,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 2.2,
      slideShadows: false,
    },
  });

  // HAMBURGER MENU TOGGLER
  document.querySelectorAll(".navbar__toggler").forEach((toggler) => {
    toggler.addEventListener("click", () => {
      const headerArea = toggler.closest(".header-area");
      headerArea.classList.toggle("header-area--active");
      toggler.classList.toggle("change");
      document.body.classList.toggle("overflow-hidden");
    });
  });
});
