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
        // showStatus();
    };
};

function showName(){
    greetingContainer.classList.add('hide');
    saveName();
};

function saveName(){
    localStorage.setItem('user', currentUser);
};

function greetingSubmitHandler(){
    currentUser = greetingInput.value;
    greetingInput.value = '';
    showName();
};

function init(){
    loadName();
    greetingForm.addEventListener('submit', greetingSubmitHandler);
    todoForm.addEventListener('submit', todoSubmitHandler);
    todoStatus.addEventListener('click', clickStatusHandler);
};

init();
