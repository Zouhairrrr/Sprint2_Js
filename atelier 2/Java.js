

var Slide = document.querySelectorAll(".Photos");




Slide.forEach(Photo => Photo.addEventListener('click' ,show));
function show(){
    this.classList.toggle("Overview")
};

 
// var Slide = document.getElementsByTagName(".P");

// Slide.forEach(Element => Element.addEventListener('' ,Getout));
// function Getout(){
// this.classList.toggle("Outover")
// };
