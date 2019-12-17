const todoContainer = document.querySelector('.todo-container');
const todoTitle = todoContainer.querySelector('.title');
const todoForm = todoContainer.querySelector('form');
const todoInput = todoContainer.querySelector('input');

let todoList = [];
let idCount = 0;
let checkCount = 0;

function getId(){

    /*
    * todoList에서의 li는 많기 때문에 querySelectorAll로 여러개를 잡아온다
    * li[n]번째에 접근하기 위해서 for문을 사용하는데 forEach + for문을 사용하게 될 경우
    * 불필요하게 많이 사용이 된다. 이를 방지하고자 idCount라는 변수 선언
    * forEach가 실행될때마다 idCount 변수에 +1씩 증가 > for문의 i와 같은 효과
    * li의 n번째 자식을 잡아올 수 있음, li의 n번째 자식에게 data-id를 count로 줌
    * 실제 local에 저장되는 todoList의 id도 똑같이 count로 줌 (li.data-id === todoList.id)
    * 삭제하는데에 사용할 수 있음
    */

    const li = document.querySelectorAll('li');

    li[idCount].dataset.id = idCount + 1;
    todoList[idCount].id = idCount + 1;
    idCount++;

    saveTodo();
};

function completeCheck(){

    /* checkCount 변수를 사용한 이유?
    *  loadTodo에서 forEach로 이미 차례대로 각각 실행되기 때문에
    * forEach + for문을 사용하면 낭비일 것 같아서 checkCount라는 변수로 대체
    */

    const li = document.querySelectorAll('li');
    const btn = li[checkCount].querySelector('button');
    const check = btn.querySelector('.check');

    if(todoList[checkCount].complete){
        if(todoList[checkCount].complete){
            check.textContent = '✍';
            li[checkCount].classList.add('complete');
        }
    }
    checkCount++;
};

function makeElem(text){
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');
    const completeSpan = document.createElement('span');
    const completeBtn = document.createElement('button');

    li.dataset.id = todoList.length + 1;
    span.textContent = text;
    delBtn.textContent = `X`;
    delBtn.classList.add('delete-btn');
    completeBtn.classList.add('complete-btn');
    completeSpan.classList.add('check');

    completeBtn.appendChild(completeSpan);
    li.appendChild(completeBtn);
    li.appendChild(span);
    li.appendChild(delBtn);
    ul.appendChild(li);

    completeBtn.addEventListener("click",clickCompleteHandler);
    delBtn.addEventListener("click",clickDelHandler);
};

function makeTodo(text){
    makeElem(text);

    const newObj = {
        id : todoList.length + 1,
        text : text,
        complete : false
    };

    todoList.push(newObj);
    saveTodo();
};

function loadTodo(){
    const currentUser = localStorage.getItem('user');
    const currentTodo = localStorage.getItem('todolist');

    todoContainer.classList.remove('hide');
    todoTitle.textContent = `${currentUser}님의 오늘의 할 일`;

    if(currentTodo !== null){
        const parseTodo = JSON.parse(currentTodo);
        todoList = parseTodo;
        parseTodo.forEach(function(toDo){
            showTodo(toDo.text);
        });
    };
};

function showTodo(text){
    makeElem(text);
    getId();
    completeCheck();
    saveTodo();
};

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




// event handler
function todoSubmitHandler(e){
    e.preventDefault();
    makeTodo(todoInput.value);
    todoInput.value = '';
};

function clickClearHandler(e){
    deleteTodo();
    saveTodo();
};

function clickResetHandler(){
    localStorage.removeItem('user');
    deleteTodo();
    saveTodo();
    window.location.reload();
};

function clickCompleteHandler(e){
    const li = e.target.parentNode;
    const check = e.target.querySelector('.check');

    if(!(todoList[li.dataset.id - 1].complete)){
        check.textContent = '✍';
        li.classList.add('complete');
        todoList[li.dataset.id - 1].complete =!(todoList[li.dataset.id - 1].complete);
    }else if(todoList[li.dataset.id - 1].complete){
        check.textContent = '';
        li.classList.remove('complete');
        todoList[li.dataset.id - 1].complete =!(todoList[li.dataset.id - 1].complete);
    }

    saveTodo();
};

function clickDelHandler(e){

    /* delEvent 실행순서
    * x를 누르면 이벤트 발생
    * 엘리먼트만 먼저 삭제
    * filter함수 실행
    * (filter로 발생한 toDo에는todoList 배열안의 객체들이 각각 담겨있음
    * li.dataset.id와 toDo.id를 같게 설정해두었기 때문에
    * 둘의 id값이 다른값을 제외한 것만 걸러내고 나머지는 cleanTodo에 담아둠)
    * 현재 todoList에 걸러낸 값을 넣어둠
    * 값 저장 함수 실행
    */

    const ul = document.querySelector('ul');
    const li = e.target.parentNode;

    const cleanTodo = todoList.filter(function(toDo){
        return toDo.id !== parseInt(li.dataset.id);
    });

    todoList = cleanTodo;
    ul.removeChild(li);
    saveTodo();
};