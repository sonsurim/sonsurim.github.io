(function(){
    let visible = false;

    $('body').click(function(e){

        if(e.target === $('#js-modal-icon')[0]){
            visible = !visible;
            $('#js-modal').addClass('js-showing');

            if(!visible){
                $('#js-modal').removeClass('js-showing');
            }
        }else{
            visible = false;
            $('#js-modal').removeClass('js-showing');
        }
    });
})();

// document 클릭시는 항상 class가 remove 되어야 하고 모달이 보이지 않아야 하기 때문에
// visible = false로 항시 설정해둔다.
// 모달 클릭시에만 !visible을 해줌으로 if문을 더 간결하게 한다.

