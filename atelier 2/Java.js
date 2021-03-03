

var Slide = document.querySelectorAll(".Photos");




Slide.forEach(Photo => Photo.addEventListener('click' ,show));
function show(){
    this.classList.toggle("Overview");
}

Slide.forEach(Photo => Photo.addEventListener('click' ,mouve));
function mouve(){
    this.classList.toggle("Getin");
}
























// var  Slide=document.querySelectorAll(".Photos")
// Slide.forEach(Photo => Photo.addEventListener('click' ,show));
// function alpha(){
//     this.classList.toggle("Outover");
// };






    

// var Slide = document.querySelector(".P");

// Slide.forEach(Element => Element.addEventListener('click' ,Getout));
// function Getout(){
// this.classList.toggle("Outover")
// };
