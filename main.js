"use strict";
let addToDoButton = document.getElementById("addToDo"),
    inputField = document.getElementById("inputField"),
    toDoContainer = document.getElementById("toDoContainer");


addToDoButton.addEventListener('click', () => {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = 'line-through';

    });
    paragraph.addEventListener('dblclick', () => {
        toDoContainer.removeChild(paragraph);
    });

});

inputField.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        let paragraph = document.createElement('p');
        paragraph.classList.add('paragraph-styling');
        paragraph.innerText = inputField.value;
        toDoContainer.appendChild(paragraph);
        inputField.value = "";
    }

});