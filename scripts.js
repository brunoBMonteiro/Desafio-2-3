const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")
const modal = document.querySelector(".modal")

for(let card of cards){
    card.addEventListener("click", function(){
        modalOverlay.classList.add("active")
        const blogId = card.getAttribute("id")
        modalOverlay.querySelector("iframe").src= `https://blog.rocketseat.com.br/${blogId}`
    });
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})
    
