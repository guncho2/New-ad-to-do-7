
function onReady() {//select Dom Elelments METHODS BETWEEN HTMLS AND JAVSCRIPT
  const addToDoForm = document.getElementById('addToDoForm');//<form id
  const newToDoText = document.getElementById('newToDoText');// <label for=
  //"newToDoText"><input type="text" id="newToDoText">
  const toDoList = document.getElementById('toDoList');//<ul id="toDoList">
  const deleteBtn = document.getElementById('delete-btn');

  addToDoForm.addEventListener('submit', () => {

    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li');


    let checkbox = document.createElement('input');


    checkbox.type = "checkbox";


    newLi.textContent = title;


    newLi.appendChild(checkbox);

    toDoList.appendChild(newLi)

    newToDoText.value = '';


  });

  deleteBtn.addEventListener('click', e => {
    let boxes = document.querySelectorAll("input[type='checkbox']")

    for(let box of boxes){
      if(box.checked){
        toDoList.removeChild(box.parentNode);
      }
    }
  })
}


window.onload = function() {
  onReady();
};
