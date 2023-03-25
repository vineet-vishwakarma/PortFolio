// Hamburger Toggle

const toggleButton = document.getElementById('nav-toggle');
const navLink = document.getElementById('nav-link');

toggleButton.addEventListener('click', () => {
    navLink.classList.toggle('active')
})

// Dynamic Text Animation

var typed = new Typed(".dynamic-text",{
    strings: ["Coder","Frontend","Developer"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true
});

// Swiper 

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    centeredSlides: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    KeyboardEvent:true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
