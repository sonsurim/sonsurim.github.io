const toDoForm = document.querySelector(".js-todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-todo-list");

const TODOS_LS = "ToDoList";
let toDos = [];

function saveToDo(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}


function clickDelHandler(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDo();
}

function paintToDo(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const checkBtn = document.createElement("button");
    const buttonSpan = document.createElement("span");
    const newID = toDos.length + 1;
    checkBtn.classList.add("checkBtn");
    checkBtn.addEventListener("click",clickDelHandler);
    span.innerText = text;
    li.id = newID;
    li.classList.add("todo-list");
    li.appendChild(checkBtn);
    li.appendChild(span);
    checkBtn.appendChild(buttonSpan);
    toDoList.appendChild(li);
    const toDosObj = {
        text : text,
        id : newID
    }
    toDos.push(toDosObj);
    saveToDo();
}


function loadToDo(){
    const loadedToDo = localStorage.getItem(TODOS_LS);
    if(loadedToDo !== null){
        const parsedToDo = JSON.parse(loadedToDo);
        parsedToDo.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function submitHandler(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit",submitHandler);
}

init();