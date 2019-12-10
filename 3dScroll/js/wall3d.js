(function(){
    const stageElem = document.querySelector('.stage');
    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar');
    const mousePos = {
        x : 0,
        y : 0
    };
    let maxScrollValue;

    function resizeHandler(){
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    };

    window.addEventListener('scroll', function(){
        const scrollPer = pageYOffset / maxScrollValue;
        const zMove = scrollPer * 980 - 490;
        houseElem.style.transform = 'translateZ(' + zMove + 'vw)';
        barElem.style.width = scrollPer * 100 + '%';
    });

    window.addEventListener('mousemove', function(e){
        mousePos.x = -1 + (e.clientX / this.window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / this.window.innerHeight) * 2;
        stageElem.style.transform = 'rotateX(' + mousePos.y * 5 + 'deg) rotateY(' + mousePos.x * 5 + 'deg)';
    });

    window.addEventListener('resize', resizeHandler);

    stageElem.addEventListener('click', function(e){
        new Character({
            xPos : e.clientX / window.innerWidth * 100,
            speed : Math.random() * 0.5 + 0.3
        });
    })

    resizeHandler();
})();