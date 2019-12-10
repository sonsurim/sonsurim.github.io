(function modal(){

    const SHOWING_CN = "js-showing";

    const modalIcon = document.getElementById('js-modal-icon');
    const modal = document.getElementById('js-modal');

    let visible = false;
    console.log(visible);
    document.addEventListener('click',function onoff(e){
        if(e.target === modalIcon){
            visible = !visible;
            if(visible){
                modal.classList.add(SHOWING_CN);
            }else if(!visible){
                modal.classList.remove(SHOWING_CN);
            }
        } else {
            visible = false;
            modal.classList.remove(SHOWING_CN);
        }

});})();

// document 클릭시는 항상 class가 remove 되어야 하고 모달이 보이지 않아야 하기 때문에
// visible = false로 항시 설정해둔다.
// 모달 클릭시에만 !visible을 해줌으로 if문을 더 간결하게 한다.


