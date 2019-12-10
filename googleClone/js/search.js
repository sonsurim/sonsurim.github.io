(function serach(){

    const SHADOW_CN = "js-shadow";

    const searchContainer = document.getElementById('js-search');
    const searchForm = document.getElementById('js-form');
    const searchInput = searchForm.querySelector('input');

    const searchBtnForm = document.getElementById('js-btn');
    const searchBtn = document.querySelector('input');

    document.addEventListener('click',function(e){
        if(e.target === searchInput){
            searchContainer.classList.add(SHADOW_CN);
        }else{
            searchContainer.classList.remove(SHADOW_CN);
        }
    });

    searchForm.addEventListener('submit',function(e){
        e.preventDefault();
        const currentValue = searchInput.value;
        location.href = `https://www.google.com/search?q=${currentValue}&oq=${currentValue}&aqs=chrome..69i57j0l4j69i61.2532j0j7&sourceid=chrome&ie=UTF-8`
    });

    searchBtnForm.addEventListener('click',function(){
        const btnValue = searchInput.value;
        location.href = `https://www.google.com/search?q=${btnValue}&oq=${btnValue}&aqs=chrome..69i57j0l4j69i61.2532j0j7&sourceid=chrome&ie=UTF-8`
});})();