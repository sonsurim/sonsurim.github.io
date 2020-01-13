# Mole Game - Personal

## 프로젝트 소개
* **제목** : 타이머 함수를 이용한 두더지 잡기 게임

* **기간** : 2019.09.16 ~ 2019.10.01

* **URL** : [https://sonsurim.github.io/moleGame/index.html](https://sonsurim.github.io/moleGame/index.html)

* **개발 환경** : HTML, CSS, JavaScript, VScode, Git

* **프로젝트 목표와 내용**
    > - **목표** : 콜백 함수에 대한 이해도 향상
    > - **내용** : pc, tablet, mobile 총 3벌 작업하였으며 setTimeout 함수를 이용하여 제작한 반응형 두더지 잡기 게임 사이트입니다.

* **프로젝트 내 조건**
    > - 9개의 두더지 굴이 초기 화면에 등장해야 한다.
    > - 시작 버튼이 있어야 하며 사용자가 시작 버튼을 누를 경우, 게임이 시작된다.
    > - 게임이 시작되고 나서 1초 후, 첫 번째 두더지가 랜덤한 굴에서 나와야 한다.
    > - 두더지가 나타난 두더지 굴을 사용자가 클릭할 경우, 두더지를 잡은 것으로 간주한다.
    > - 두더지가 나타난 두더지 굴을 사용자가 3초 내에 클릭하지 않을 경우, 두더지를 잡지 못한 것으로 간주한다.
    > - 사용자가 두더지를 잡거나 제한 시간(3초)가 초과되었을 경우, 1초의 추가 간격을 두고 또다시 랜덤한 두더지 굴에서 두더지가 나타나야 한다.
    > - 다음에 두더지가 나타나는 두더지 굴은 바로 이전 순번에 두더지가 나타났던 굴과는 다른 굴이어야만 한다.
    > - 사용자가 두더지를 잡을 수 기회는 10번으로 제한한다.
    > - 10번의 시도가 끝난 후에는 (맞힌 횟수 / 10) X 100으로 계산하여 사용자의 점수를 화면에 표기해준다.
    > - 사용자의 점수가 표기된 후, 재시작 버튼이 나타나야 한다.
    > - 재시작 버튼을 누를 경우, 다시 게임이 시작되어야 한다.

* **프로젝트 진행 시 문제점** : 콜백 함수에 대한 이해도가 부족하여 원하는 조건의 게임을 구현하는 데에 있어 문제점을 겪었습니다.

* **프로젝트 문제점 해결 방법** : setTimeout 함수에 대한 공부와 callback 함수에 대해 실제 적용 사례를 공부함으로써 해결할 수 있었습니다.

* **느낀 점 및 배운 점** : 원하는 조건에 해당하며 실제로 반응과 작동이 되는 사이트를 만드는 데에 큰 재미를 느꼈습니다. 콜백 함수를 이용하여 더욱 새롭고 다양한 사이트를 만들어 보고 싶습니다. 아직 기초 수준의 지식이지만 이 내용을 잊지 않고 기록해두어 블로그에 정리를 하며 콜백 함수에 대해 조금 더 알아가는 계기가 된 프로젝트였습니다.

## 프로젝트 소스 코드
![mole1](https://sonsurim.github.io/portfolio/img/mole1.PNG)<br/>
![mole1-1](https://sonsurim.github.io/portfolio/img/mole1-1.PNG)<br/>
9개의 두더지 굴을 초기에 세팅해주는 함수입니다.<br/>
hole의 이미지는 css로 미리 구현을 해놓은 뒤, 랜덤한 번호로 두더지를 불러와야 하기 때문에 img의 id에 차례대로 id 값을 넣어주었습니다.

![mole2](https://sonsurim.github.io/portfolio/img/mole2.PNG)<br/>
게임을 시작하는 버튼의 이벤트 핸들러 함수입니다.<br/>
시작 버튼을 누르는 순간, 사용자의 게임 여부를 판단하는 isPlay 변수를 true로 바꿔줌과 동시에 시작 버튼을 비활성화로 만들어 줍니다.<br/>
setTimeout 함수를 이용하여 버튼을 누르고 1초 뒤, 게임을 시작하게 만들어 주었습니다.

![mole3](https://sonsurim.github.io/portfolio/img/mole3.PNG)<br/>
![mole3-1](https://sonsurim.github.io/portfolio/img/mole3-1.PNG)<br/>
두더지를 불러주며 게임을 작동하는 함수입니다.<br/>
난수를 생성하여 해당 난수 자리에 있는 두더지를 불러주며 기회를 체크하기 위한 turn 변수를 1씩 증가시켜 주었습니다.<br/>
못 잡을 경우와 잡을 경우를 대비하여 moleAgain에 대한 리턴 값을 missMole이라는 변수에 담아주었습니다.<br/>

![mole3-2](https://sonsurim.github.io/portfolio/img/mole3-2.PNG)<br/>
두더지를 잡는 순간, catchMole이라는 이벤트 핸들러 함수가 발생합니다.

![mole5](https://sonsurim.github.io/portfolio/img/mole5.PNG)<br/>
두더지를 제거하며 두더지를 다시 부르고 마지막 턴에 모달을 띄우는 함수입니다.<br/>
기존에 나와 있는 두더지를 제거하고 두더지가 또 나오지 않게 타이머를 해제해 주었습니다.<br/>
그 후, 1초 뒤에 게임을 다시 시작해 주었습니다.<br/>
startGame과 moleAgain을 통해 두더지의 등장을 표현해 주었습니다.<br/>

![mole4](https://sonsurim.github.io/portfolio/img/mole4.PNG)<br/>
두더지를 잡았다는 표시를 해주는 함수입니다.<br/>
잡은 횟수를 체크하기 위한 count 변수에 1을 증가시킨 뒤, 그 값을 화면에 표시해 주었습니다.

![mole6](https://sonsurim.github.io/portfolio/img/mole6.PNG)<br/>
잡은 횟수, 도전 기회를 초기화 시켜주는 함수와 모달을 띄워주는 함수입니다.

## 프로젝트 구현 이미지
![mole7](https://sonsurim.github.io/portfolio/img/mole7.PNG)<br/>
![mole8](https://sonsurim.github.io/portfolio/img/mole8.PNG)<br/>
![mole9](https://sonsurim.github.io/portfolio/img/mole9.PNG)<br/>
레이아웃은 같지만 화면에 따라 게임의 크기가 작아지거나 커지게 만들어 하나의 디자인으로 모바일, 태블릿, PC에서 모두 사용 가능하도록 만들어주었습니다.