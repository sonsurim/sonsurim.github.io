(function(){
    const stageElem = document.querySelector('.stage');
    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar');
    const mousePos = {  // clientX,Y 대신 쓰일 원점
        x : 0,
        y : 0
    };
    let maxScrollValue;

    // 브라우저 창 크기 변화있을 경우, 실행되는 이벤트 핸들러
    function resizeHandler(){
        // 전체 스크롤 할 수 있는 높이 = 문서 전체 높이 - 눈에 보이는 화면의 높이(스크롤바 길이)
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    };

    window.addEventListener('scroll', function(){
        // 스크롤퍼센트 = 현재 화면의 y위치 / 전체 스크롤 할 수 있는 높이
        const scrollPer = pageYOffset / maxScrollValue;
        // z축으로 움직일 양 = 스크롤 퍼센트 * 980 (1000으로 하면 화면에 꽉차서 3d효과를 주기 위해) - 490(첫 화면이 490vw 멀어져있음)
        const zMove = scrollPer * 980 - 490;
        // z축으로 움직임 > 원근감 조성
        houseElem.style.transform = `translateZ(${zMove}vw)`;

        // progress bar width를 스크롤 퍼센트로 함  > 스크롤 다 하면 가득참
        barElem.style.width = `${scrollPer * 100}%`;
    });

    window.addEventListener('mousemove', function(e){
        // clentX,Y는 왼쪽위가 원점이기 때문에 계산하기 쉽게 mousePos를 원점으로 세팅
        mousePos.x = -1 + (e.clientX / this.window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / this.window.innerHeight) * 2;
        // 축이 기준이 되기 때문에 서로 반대의 값으로 각도를 세팅
        stageElem.style.transform = `rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`;
    });

    // 브라우저 창 크기 변경될 때마다 스크롤할 수 있는 최대범위 새로 세팅해줌
    window.addEventListener('resize', resizeHandler);

    stageElem.addEventListener('click', function(e){
        // 기존에는 left값이 고정된 값이라 클릭하면 div생성되는 형식, 클릭했을때 e.clientX값을 %로 이용해서 해당 위치에 생성되게 변경해야한다. => e.clientX를 %로 변환
        // 현재 클릭한 위치 / 전체 폭 * 100은 퍼센트가 됨, e.clientX / window.innerWidth * 100 이 값을 new Character의 인자로 넣어주어야 하는데 바로 넣는 것이 아닌 객체를 이용해서 넣어준다.
        // 위와 같이 하는 이유? 이 외에도 다른 속성들을 추가해서 넣어주어야 하기 때문, 하지만 객체로 넣어서 Character 함수는 매개변수가 하나인 함수가 된다.
        new Character({
            xPos : e.clientX / window.innerWidth * 100,
            // 각자 캐릭터들이 다른 속도를 갖게 하기 위해 random 값을 생성, * 0.5하면 속도 좀 낮춤 + 0.3하면 0.3보다 느린애는 없음
            speed : Math.random() * 0.5 + 0.3
        });
    })

    // 스크롤 최대 범위설정 함수 초기 실행
    resizeHandler();


})();