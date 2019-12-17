const todoContainer = document.querySelector('.todo-container');
const todoTitle = todoContainer.querySelector('p');
const todoForm = todoContainer.querySelector('form');
const todoInput = todoContainer.querySelector('input');

let todoList = [];

function loadTodo(){
    todoContainer.classList.remove('hide');
    const currentUser = localStorage.getItem('user');
    const currentTodo = localStorage.getItem('todolist');
    todoTitle.textContent = `${currentUser}님의 오늘의 할 일`;
    if(currentTodo !== null){
        const parseTodo = JSON.parse(currentTodo);
        parseTodo.forEach(function(toDo){
            showTodo(toDo.text);
        });
    }
};

function showTodo(text){
    todoContainer.classList.remove('hide');
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const span = document.createElement('span');
    const completeBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    completeBtn.addEventListener("click",clickCompleteHandler);
    completeBtn.classList.add('complete-btn');
    delBtn.addEventListener("click",clickDelHandler);
    delBtn.classList.add('delete-btn');
    li.dataset.id = todoList.length + 1;
    span.textContent = text;
    completeBtn.textContent = `🤗`;
    delBtn.textContent = `X`;
    li.appendChild(completeBtn);
    li.appendChild(span);
    li.appendChild(delBtn);
    ul.appendChild(li);
    const newObj = {
        id : todoList.length + 1,
        text : text,
        complete : false
    };
    todoList.push(newObj);
    saveTodo();
};

function saveTodo(){
    localStorage.setItem('todolist',JSON.stringify(todoList));
};

function todoSubmitHandler(e){
    e.preventDefault();
    showTodo(todoInput.value);
    todoInput.value = '';
}

function clickCompleteHandler(e){
    const li = e.target.parentNode;
    const currentTodo = localStorage.getItem('todolist');
    const parseTodo = JSON.parse(currentTodo);
    parseTodo[li.dataset.id - 1].complete = !(parseTodo[li.dataset.id - 1].complete);
    todoList = parseTodo;
    saveTodo();
}

function clickDelHandler(e){
    const ul = document.querySelector('ul');
    const li = e.target.parentNode;
    ul.removeChild(li);
    const cleanToDos = todoList.filter(function(toDo){
        // toDo에는 객체들이 각각 담겨있음 그 객체들중 갖고있는 id랑 내가 클릭한 li id랑 같으면 삭제, 다르면 그냥 함수 종료
        return toDo.id !== parseInt(li.dataset.id);
    });
    todoList = cleanToDos;
    saveTodo();
}

function clickClearHandler(e){
    const ul = document.querySelector('ul');
    while(ul.hasChildNodes()){
        ul.removeChild(ul.firstChild);
    }
    localStorage.removeItem('todolist');
    todoList = [];
    saveTodo();
}

function clickResetHandler(){
    const ul = document.querySelector('ul');
    while(ul.hasChildNodes()){
        ul.removeChild(ul.firstChild);
    }
    localStorage.removeItem('user');
    localStorage.removeItem('todolist');
    todoList = [];
    saveTodo();
    window.location.reload();
}