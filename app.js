const cards = document.querySelectorAll(".card")

cards.forEach(card => {
    card.addEventListener("click",()=>{
        let ouvert = document.querySelector(".ouvert")
        ouvert.classList.remove("ouvert")
        card.classList.add("ouvert")
    })
});

let swiper = new Swiper(".mySwiper", {
  loop: true,
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

let cartesProjets = document.querySelectorAll(".carte-projet")
let imgs = document.querySelectorAll(".img-projet")
let descrProjet = document.querySelectorAll(".descr-projet")

cartesProjets.forEach((carteProjet, pos) => {
  carteProjet.addEventListener("mouseenter",()=>{
    imgs[pos].classList.add("transition-img")
    descrProjet[pos].classList.add("transition-txt")
  })
  carteProjet.addEventListener("mouseleave", ()=>{
    imgs[pos].classList.remove("transition-img")
    descrProjet[pos].classList.remove("transition-txt")
  })
});