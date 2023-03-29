let swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + ( '0' + (index + 1)) + "</span>";
      },
    },
    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    }
  });