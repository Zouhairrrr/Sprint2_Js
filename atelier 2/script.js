// Select all html elements within class ".box" and stock them in an array "panels"
const panels = document.querySelectorAll('.box')

function growBox(){
        this.classList.toggle("boxgrow")
};
function textreset(){
        this.classList.toggle("textreset")
}

// for each item in array add event listener 
panels.forEach(item => item.addEventListener("click", growBox));
panels.forEach(item => item.addEventListener("transitionend", textreset));
