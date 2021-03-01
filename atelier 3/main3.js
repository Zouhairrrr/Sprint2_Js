let addToDoButton = document.getElementById('addToDo');
let todocontainer = document.getElementById('todocontainer');
let ib = document.getElementById('ib');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.innerHTML = ib.value;
    todocontainer.appendChild(paragraph);
    ib.value = "";
    paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = "line-through";    
    })
    paragraph.addEventListener('dblclick', function(){
    todocontainer.removeChild(paragraph);
    })
})

