let about = document.getElementById("about")
let contact = document.getElementById("contact")
let projets = document.getElementById("projets")
let echaps = document.querySelectorAll(".modal img")
let modal = document.querySelector(".modal")

let aboutContent = document.querySelector(".about-content")
let contactContent = document.querySelector(".contact-content")
let projetsContent = document.querySelector(".projets-content")

about.addEventListener("click",()=>{
    let divActive = document.querySelector(".open")
    if (divActive) {
        divActive.classList.remove("open")
        divActive.classList.add("none")
    }
    let titreActive = document.querySelector(".blue")
    if (titreActive) {
        titreActive.classList.remove("blue")
    }
    aboutContent.classList.add("open")
    aboutContent.classList.remove("none")
    about.classList.add("blue")
})
contact.addEventListener("click",()=>{
    let divActive = document.querySelector(".open")
    if (divActive) {
        divActive.classList.remove("open")
        divActive.classList.add("none")
    }
    let titreActive = document.querySelector(".blue")
    if (titreActive) {
        titreActive.classList.remove("blue")
    }
    contactContent.classList.add("open")
    contactContent.classList.remove("none")
    contact.classList.add("blue")
})
projets.addEventListener("click",()=>{
    let divActive = document.querySelector(".open")
    if (divActive) {
        divActive.classList.remove("open") 
        divActive.classList.add("none")       
    }
    let titreActive = document.querySelector(".blue")
    if (titreActive) {
        titreActive.classList.remove("blue")
    }
    projetsContent.classList.add("open")
    projetsContent.classList.remove("none")
    projets.classList.add("blue")
})
echaps.forEach(echap=>{
    echap.addEventListener("click",()=>{
        let titreActive = document.querySelector(".blue")
        let divActive = document.querySelector(".open")
        divActive.classList.remove("open")
        divActive.classList.add("none")
        titreActive.classList.remove("blue")
    })
})