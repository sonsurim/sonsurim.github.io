const greetingContainer = document.querySelector('.greeting-container');
const greetingTitle = greetingContainer.querySelector('p');
const greetingForm = greetingContainer.querySelector('form');
const greetingInput = greetingContainer.querySelector('input');

let currentUser;

function loadName(){
    currentUser = localStorage.getItem('user');
    if (currentUser !== null){
        showName();
        loadTodo();
    };
};

function showName(){
    greetingContainer.classList.add('hide');
    saveName();
};

function saveName(){
    localStorage.setItem('user', currentUser);
};

function greetingSubmitHandler(e){
    currentUser = greetingInput.value;
    greetingInput.value = '';
    showName();
};

function init(){
    const clear = document.querySelector('.clear');
    loadName();
    greetingForm.addEventListener('submit', greetingSubmitHandler);
    todoForm.addEventListener('submit', todoSubmitHandler);
    clear.addEventListener('click', clickClearHandler);
};

init();
