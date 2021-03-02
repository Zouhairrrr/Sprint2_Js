

var Slid = document.querySelectorAll(".Photos");
// console.log(Slid)



Slid.forEach(Photos => Photos.addEventListener('click' ,show));
function show(){

    this.classList.toggle("Overview");

};

