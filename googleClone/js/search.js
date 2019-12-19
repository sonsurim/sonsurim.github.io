(function serach(){
    const searchContainer = document.querySelector('.search-container');
    const searchForm = document.getElementById('js-form');
    const searchInput = searchForm.querySelector('input');
    const searchBtnForm = document.getElementById('js-btn');
    const searchBtn = document.querySelector('input');

    document.addEventListener('click',function(e){
        if(e.target === searchInput){
            searchContainer.classList.add('js-shadow');
        }else{
            searchContainer.classList.remove('js-shadow');
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