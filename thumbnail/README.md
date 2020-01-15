# Make Thumbnail - Personal

## 프로젝트 소개
* **제목** : 썸네일 메이커 웹 사이트

* **기간** : 2019.12.23 ~ 2019.12.30

* **URL** : [https://sonsurim.github.io/thumbnail/index.html](https://sonsurim.github.io/thumbnail/index.html)

* **개발 환경** : HTML, CSS, JavaScript, Fontello, VScode, Git

* **프로젝트 목표와 내용**
    > - **목표** : JavaScript에 대한 이해도 향상 및 개발 블로그에 필요한 썸네일 제작에 필요한 사이트 구축
    > - **내용** :배너의 사이즈와 색, 폰트 사이즈 등으로 배너를 디자인할 수 있으며 간단하게 썸네일을 제작할 수 있는 사이트입니다.

* **프로젝트 진행 시 문제점** : 배경과 폰트 색을 동시에 바꾸는 토글 버튼 구현에 있어 어려움을 겪었습니다.

* **프로젝트 문제점 해결 방법** : 첫 번째 개인 프로젝트에서 공부하였던 내용을 참고하여 제작에 필요한 공부를 하여 문제를 해결하였습니다.

* **느낀 점 및 배운 점** : 기술 블로그를 작성하기 시작하면서 썸네일 제작에 귀찮음을 겪고 '사이트를 만들어 볼까?'하는 생각으로 제작한 사이트입니다. 첫 프로젝트들과 비교하였을 때에는 구현하기 막막했던 것들이 이제는 아이디어와 공부를 통해 손쉽게 사이트가 구현되는 것에 큰 성취감을 느꼈습니다. 아직 공부할 내용이 많지만 지금보다 더 열심히 노력해서 새로운 기술들도 많이 습득하고 더욱 성장하고 노력해야겠다는 점을 느낀 프로젝트였습니다.

## 프로젝트 소스 코드
![thumbnail3](https://sonsurim.github.io/portfolio/img/thumbnail3.PNG)<br/>
프로젝트에 사용된 전역 변수입니다.<br/>

![thumbnail4](https://sonsurim.github.io/portfolio/img/thumbnail4.PNG)<br/>
초기 세팅과 함께 이벤트 핸들러를 감싸는 초기화 함수입니다.<br/>

![thumbnail5](https://sonsurim.github.io/portfolio/img/thumbnail5.PNG)<br/>
각각 세팅에 필요한 함수를 분기함으로써 재사용성을 높였습니다.<br/>

![thumbnail6](https://sonsurim.github.io/portfolio/img/thumbnail6.PNG)<br/>
사용자가 클릭한 컬러 팔레트의 색을 가져와 배경을 세팅하는 함수입니다.<br/>

![thumbnail7](https://sonsurim.github.io/portfolio/img/thumbnail7.PNG)<br/>
폰트색과 배경색의 토글 버튼을 제어하는 이벤트 핸들러입니다.<br/>
캔버스의 토글 버튼 상태를 canvasObj의 속성값으로 저장하여 상태를 체크하고 해당 케이스별로 효과를 주었습니다.<br/>

![thumbnail8](https://sonsurim.github.io/portfolio/img/thumbnail8.PNG)<br/>
만들어진 썸네일을 데스크톱에 저장하는 함수입니다.<br/>
썸네일에 작성된 텍스트 내용을 파일명으로 하여 바로 저장할 수 있게 만들었습니다.<br/>


## 프로젝트 구현 이미지
![thumbnail1](https://sonsurim.github.io/portfolio/img/thumbnail1.PNG)<br/>
![thumbnail2](https://sonsurim.github.io/portfolio/img/thumbnail2.PNG)<br/>
컬러 팔레트로 색을 선택하고 적은 내용을 화면에 보여주는 것을 볼 수 있습니다.