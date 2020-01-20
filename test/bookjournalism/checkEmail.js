(function(){
    const formElem = document.querySelector('.email-form');

    function emailCheck(e) {
        e.preventDefault();
        const inputElem = formElem.querySelector('input');
        const exptext = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;;

        if(!(exptext.test(inputElem.value))){
            alert('이메일 형식이 올바르지 않습니다.');
            inputElem.value ='';
            return false;
        }else{
            alert('감사합니다.');
            inputElem.value ='';
            return true;
        }
    }


    formElem.addEventListener('submit', emailCheck);
})();