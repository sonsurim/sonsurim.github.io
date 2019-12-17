const todoContainer = document.querySelector('.todo-container');
const todoTitle = todoContainer.querySelector('.title');
const todoForm = todoContainer.querySelector('form');
const todoInput = todoContainer.querySelector('input');

let todoList = [];
let count = 0;

function loadTodo(){
    todoContainer.classList.remove('hide');
    const currentUser = localStorage.getItem('user');
    const currentTodo = localStorage.getItem('todolist');
    todoTitle.textContent = `${currentUser}님의 오늘의 할 일`;
    if(currentTodo !== null){
        const parseTodo = JSON.parse(currentTodo);
        todoList = parseTodo;
        parseTodo.forEach(function(toDo){
            showTodo(toDo.text);
        });
    }
};

function makeTodo(text){
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const span = document.createElement('span');
    const completeBtn = document.createElement('button');
    const completeSpan = document.createElement('span');
    const delBtn = document.createElement('button');
    completeBtn.addEventListener("click",clickCompleteHandler);
    completeBtn.classList.add('complete-btn');
    completeSpan.classList.add('check');
    completeBtn.appendChild(completeSpan);
    delBtn.addEventListener("click",clickDelHandler);
    delBtn.classList.add('delete-btn');
    li.dataset.id = todoList.length + 1;
    span.textContent = text;
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

}

function showTodo(text){
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const span = document.createElement('span');
    const completeBtn = document.createElement('button');
    const completeSpan = document.createElement('span');
    const delBtn = document.createElement('button');
    completeBtn.addEventListener("click",clickCompleteHandler);
    completeBtn.classList.add('complete-btn');
    completeSpan.classList.add('check');
    completeBtn.appendChild(completeSpan);
    delBtn.addEventListener("click",clickDelHandler);
    delBtn.classList.add('delete-btn');
    span.textContent = text;
    delBtn.textContent = `X`;
    li.appendChild(completeBtn);
    li.appendChild(span);
    li.appendChild(delBtn);
    ul.appendChild(li);
    getId();
    completeCheck();
    saveTodo();
};

function completeCheck(){
    const li = document.querySelectorAll('li');
    const btn = li[count].querySelector('button');
    const check = btn.querySelector('.check');
    if(todoList[count].complete){
        if(todoList[count].complete){
            li[count].classList.add('complete');
            check.textContent = '✍';
        }
    }
    count++;
}

function deleteTodo(){
    const ul = document.querySelector('ul');
    while(ul.hasChildNodes()){
        ul.removeChild(ul.firstChild);
    }
    localStorage.removeItem('todolist');
    todoList = [];
};

function saveTodo(){
    localStorage.setItem('todolist',JSON.stringify(todoList));
};

function getId(){
    const li = document.querySelectorAll('li');
    for(let i = 0; i < li.length; i++){
        li[i].dataset.id = i + 1;
        todoList[i].id = parseInt(li[i].dataset.id);
    }
    saveTodo();
}


// event handler
function todoSubmitHandler(e){
    e.preventDefault();
    makeTodo(todoInput.value);
    todoInput.value = '';
}

function clickCompleteHandler(e){
    const li = e.target.parentNode;
    const check = e.target.querySelector('.check');
    if(!(todoList[li.dataset.id - 1].complete)){
        todoList[li.dataset.id - 1].complete =!(todoList[li.dataset.id - 1].complete);
        li.classList.add('complete');
        check.textContent = '✍';
    }else if(todoList[li.dataset.id - 1].complete){
        todoList[li.dataset.id - 1].complete =!(todoList[li.dataset.id - 1].complete);
        li.classList.remove('complete');
        check.textContent = '';
    }
    saveTodo();
}

function clickDelHandler(e){
    const ul = document.querySelector('ul');
    const li = e.target.parentNode;
    ul.removeChild(li);
    const cleanTodo = todoList.filter(function(toDo){
        return toDo.id !== parseInt(li.dataset.id);
    });
    todoList = cleanTodo;
    saveTodo();
}

function clickClearHandler(e){
    deleteTodo();
    saveTodo();
}

function clickResetHandler(){
    localStorage.removeItem('user');
    deleteTodo();
    saveTodo();
    window.location.reload();
}