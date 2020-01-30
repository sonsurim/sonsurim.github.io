(function serach(){
    const searchForm = document.getElementById('js-form');
    const searchInput = searchForm.querySelector('input');
    const searchBtnForm = document.getElementById('js-btn');
    const searchBtn = document.querySelector('input');

    document.addEventListener('click',function(e){
        const searchContainer = document.querySelector('.search-container');

        if(e.target === searchInput){
            searchContainer.classList.add('js-shadow');
        }else{
            searchContainer.classList.remove('js-shadow');
        }
    });

    searchForm.addEventListener('submit',function(e){
        e.preventDefault();
        const currentValue = searchInput.value;
        location.href = `https://www.google.com/search?q=${currentValue}`;
    });

    searchBtnForm.addEventListener('click',function(){
        const currentValue = searchInput.value;
        location.href = `https://www.google.com/search?q=${currentValue}`;
    });
})();