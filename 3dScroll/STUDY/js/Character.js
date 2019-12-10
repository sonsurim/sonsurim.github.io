function Character(info){   // 생성자라 앞에 c를 대문자로 함, 캐릭터 만들어주는 함수, info : 정보를 담고 있는 객체를 매개변수로 받아온다.
    // character class (캐릭터 자체 크기,위치 결정하는 클래스)를 가지는 제일 바깥 div element를 생성
    // 변수에 넣지 않고 this.mainElem으로 함
    // this로 하는 이유? 캐릭터 생성자를 통해서 만들어낼 인스턴스 객체에 이 자체를 속성으로 쓰겠다
    this.mainElem = document.createElement('div');
    this.mainElem.classList.add('character');
    // 더하기로 보기좋게 연결해줌
    this.mainElem.innerHTML =  ''
    + '<div class="character-face-con character-head">'
        + '<div class="character-face character-head-face face-front"></div>'
        + '<div class="character-face character-head-face face-back"></div>'
    + '</div>'
    + '<div class="character-face-con character-torso">'
        + '<div class="character-face character-torso-face face-front"></div>'
        + '<div class="character-face character-torso-face face-back"></div>'
    + '</div>'
    + '<div class="character-face-con character-arm character-arm-right">'
        + '<div class="character-face character-arm-face face-front"></div>'
        + '<div class="character-face character-arm-face face-back"></div>'
    + '</div>'
    + '<div class="character-face-con character-arm character-arm-left">'
        + '<div class="character-face character-arm-face face-front"></div>'
        + '<div class="character-face character-arm-face face-back"></div>'
    + '</div>'
    + '<div class="character-face-con character-leg character-leg-right">'
        + '<div class="character-face character-leg-face face-front"></div>'
        + '<div class="character-face character-leg-face face-back"></div>'
    + '</div>'
    + '<div class="character-face-con character-leg character-leg-left">'
        + '<div class="character-face character-leg-face face-front"></div>'
        + '<div class="character-face character-leg-face face-back"></div>'
    + '</div>';

    document.querySelector('.stage').appendChild(this.mainElem);

    //info.xPos : 화면상의 클릭한 위치의 x좌표를 비율로 변환한 것
    this.mainElem.style.left = info.xPos + '%';
    // 스크롤여부 체크하는 속성
    this.scrollState = false;
    // 바로 이전(마지막) 스크롤 위치
    this.lastScrollTop = 0;
    // 객체의 속성으로 등록 > 각 객체마다 속성자체가 생김 > 접근하기 훨씬 용이
    this.xPos = info.xPos;
    // character의 이동속도 > 방향키를 누르면 speed의 값만큼 이동하도록
    this.speed = info.speed;
    // 캐릭터 방향
    this.direction;
    // 좌우 이동중인지 아닌지 확인하는 속성 (keydown중이면 true, 아니면 false)
    this.runningState = false;
    // requestAnimation의 리턴값을 이용해서 cancle을 해주어야해서 그 리턴값을 저장해 놓을 속성
    this.rafId;
    // prototype 메소드여서 this로 접근 가능
    this.init();
}

// 캐릭터는 제 자리에 있고 벽이 다가오니까 앞으로 다가오는 것처럼 보임
// 캐릭터는 스크롤 방향에 따라서 방향만 셋팅, 걸어가는 애니메이션 세팅만 해주면 됨
// 스크롤이 발생 > .running class 추가 >  팔,다리가 움직이는 애니메이션 실행 (함수 > Character객체의 메소드로 생성)
// 생성자로 생성해낸 인스턴스 객체가 공통으로 사용하는 속성이나 메소드는 프로토타입 객체에 생성 (걸어가는 기능은 공통 메소드이기 때문)
Character.prototype = {
    // 프로토타입 객체 자체를 빈 객체로 재정의를 하기 위해 원래 갖고있던 constructor속성을 보존해주어야 하기 때문에 따로 지정을 해줌.
    constructor : Character,
    init : function(){
        // this : Character
        // 이벤트핸들러에서 this는 이벤트를 실행시킨 주체(.앞의 객체), 하지만 캐릭터 생성자로 생성해낸 인스턴스 객체에 접근하기를 원함 > 이벤트 핸들러 밖의 self에 넣어둠 > this값 보존
        const self = this;
        window.addEventListener('scroll', function(){
            // setTimeout : 0.5초가 지나야 실행이 되는 함수
            // clearTimeout : setTimeout의 실행결과로 self.scrollState에 들어온 값을 취소해줌

            // 스크롤이 되는 동안 clearTimeout이 기다리지 않고 쉴새없이 setTimeout을 취소 > setTimeout 실행안됨
            // scroll 멈춤 > 마지막것만 clear안됨 > 0.5초뒤에 setTimeout이 실행
            clearTimeout(self.scrollState);

            // 스크롤 했을때 만약 self.scrollState가 true면 running을 붙여서 애니메이션을 줌
            if(!self.scrollState){
                // running 클래스 붙이는 건 scroll중 한번만 하면 됨
                self.mainElem.classList.add('running');
            }

            // 스크롤 >  0.5초뒤에 self.scrollState에 값을 넣어주는 함수가 실행 > setTimeout이 실행, 숫자값을 return > scrollState가 값을 갖고있음 > true
            self.scrollState = setTimeout(function(){
                self.scrollState = false;
                self.mainElem.classList.remove('running');
            }, 500);

            // 이전 스크롤 위치와 현재 스크롤 위치를 비교
            // 이전 값 > 현재 값 : 스크롤 올림 > 뒤를 봐야함
            // 이전 값 < 현재 값 : 스크롤 내림 > 앞을 봐야됨
            if(self.lastScrollTop > pageYOffset){
                self.mainElem.setAttribute('data-direction', 'backward');
            }else{
                self.mainElem.setAttribute('data-direction', 'forward');
            }

            // self.lastScrollTop : 스크롤 이벤트의 마지막 현재 위치 = 마지막 현재 위치
            self.lastScrollTop = pageYOffset;
        });

        // 방향 좌우설정 > keydown event
        window.addEventListener('keydown',function(e){
            // key누르고 있는동안 keydown이벤트가 반복되는 효과를 방지, request쪽에서 포지션을 갱신 >  event는 처음 한번만 실행되면 됨
            // self.runningState가 true일때만 return
            if (self.runningState) return;

            // e.keyCode 왼쪽 키 누른거
            if(e.keyCode === 37){
                self.direction = 'left';
                self.mainElem.setAttribute('data-direction', 'left');
                self.mainElem.classList.add('running');
                self.run(self);
                self.runningState = true;
                // e.keyCode 오른쪽 키 누른거
            }else if(e.keyCode === 39){
                self.direction = 'right';
                self.mainElem.setAttribute('data-direction', 'right');
                self.mainElem.classList.add('running');
                self.run(self);
                self.runningState = true;
            }
        });
        // 키보드 뗐을때
        window.addEventListener('keyup',function(e){
            self.mainElem.classList.remove('running');
            cancelAnimationFrame(self.rafId);
            self.runningState = false;
        });

    },
    run : function (self){
        if(self.direction === 'left'){
            self.xPos -= self.speed;
        }else if(self.direction === 'right'){
            self.xPos += self.speed;
        };

        // 화면의 왼쪽으로 최대 갈 수 있는 거리 (범위제한)
        if(self.xPos < 2){
            self.xPos = 2;
        }
        // 화면의 오른쪽으로 최대 갈 수 있는 거리 (범위제한)
        if(self.xPos > 88){
            self.xPos = 88;
        }

        self.mainElem.style.left = self.xPos + '%';

        // run 메소드 : position값 갱신하는 함수
        // requestAnimationFrame에서 반복 >  포지션 갱신 > 캐릭터 이동
        self.rafId = requestAnimationFrame(function(){
            self.run(self);
        });
    }
}

// scroll addEventListener
// 스크롤할때 running 클래스를 한번만 추가하게끔 만들어주어야 함, setTimeout부분은 0.5초 기다렸다가 실행이 되는 함수, 0.5초가 되기전에 스크롤은 계속 일어나고 스크롤이 일어날 때마다 clearTimeout (setTimeout을 취소하는 함수)가 실행이 돼서 스크롤을 할 동안은 setTimeout은 계속 취소가되는 것임 그래서 스크롤되는 동안에는 실행될 일이 없음 그러다가 스크롤을 멈추면 clearTimeout이 실행이 안돼서 0.5초 뒤에 마지막에 setTimeout이 딱 한번만 실행이 되는 것이다. setTimeout이 실행은 안되도 scrollState에 값은 세팅이 되기때문에 if부분도 1번만 실행이 되는 셈이다.

// scroll addEventListener 실행 과정
// 1. 처음 스크롤, self.scrollState == false, if문 한번 실행됨
// 2. setTimeout 자체는 실행이 되지 않지만 self.scrollState에 숫자값이 들어옴 > if문의 self.scrollState가 true로 변경, if문 실행안됨
// 3. 스크롤을 멈춰서 setTimeout이 실행이 될때 self.scrollState가 다시 false로 셋팅됨


// 캐릭터 이동 함수
// speed를 설정 > 방향키를 누르면 speed의 값만큼 이동하도록
// left값을 갱신하면 됨 > info.xPos 값 갱신
// keydown은 frame이 굉장히 적음 > 버벅임 > requestAnimationFrame 사용