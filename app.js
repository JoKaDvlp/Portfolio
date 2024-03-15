const cards = document.querySelectorAll(".card")

cards.forEach(card => {
    card.addEventListener("click",()=>{
        // let ouvert = document.querySelector(".ouvert")
        let ouvert = document.querySelector(".ouvert")
        ouvert.classList.remove("ouvert")
        card.classList.add("ouvert")
    })
});