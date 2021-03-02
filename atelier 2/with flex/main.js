

// var boxes = document.querySelectorAll('.box');


// boxes.forEach ((box) => {
//         box.addEventListener("click", () => {
//             removeBoxses();
//             box.classList.add("zoom");});
// });

// function removeBoxses(){
//    boxes.forEach((box) => {
//     box.classList.remove("zoom");
//    });
// };

//the top and bottom title;

// var title = document.querySelectorAll('.top');

// title.forEach('')



var boxes = document.querySelectorAll('.box');

boxes.forEach (box => box.addEventListener("click", function(){this.classList.toggle("zoom")}));
// boxes.forEach (box => box.addEventListener("click", function(){this.classList.toggle("zoom")}));

// function removeBoxses(){
//    boxes.forEach((box) => {
//     box.classList.remove("zoom");
//    });
// };











// var titletop = document.querySelectorAll('.titre_top"');

// titletop.forEach((top) =>{
//     top.addEventListener(boxes(), () =>{
//         removeslidtop();
//         top.classList.add("slidtop");
//     });
// });
