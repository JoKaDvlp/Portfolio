const cards = document.querySelectorAll(".card")

cards.forEach(card => {
    card.addEventListener("click",()=>{
        let ouvert = document.querySelector(".ouvert")
        ouvert.classList.remove("ouvert")
        card.classList.add("ouvert")
    })
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
  },
});