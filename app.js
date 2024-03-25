const cards = document.querySelectorAll(".card")

cards.forEach(card => {
    card.addEventListener("click",()=>{
        let ouvert = document.querySelector(".ouvert")
        ouvert.classList.remove("ouvert")
        card.classList.add("ouvert")
    })
});

const swiper = new Swiper(".swiper", {
    effect: "slide",
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });