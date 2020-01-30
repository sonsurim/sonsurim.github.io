# Google Clone - Personal

## 프로젝트 소개
* **제목** : Google 똑같이 따라 해보기 (Google Clone)

* **기간** : 2019.08.19 ~ 2019.08.22

* **URL** : [https://sonsurim.github.io/googleClone/index.html](https://sonsurim.github.io/googleClone/index.html)

* **개발 환경** : HTML, CSS, JavaScript, jQuery, Fontello, VScode, Git

* **프로젝트 목표와 내용**
    > - **목표** : HTML, CSS, JavaScript 기본 이해도와 실력 향상
    > - **내용** : Google 사이트를 보고 최대한 똑같이 따라 한 Clone 사이트입니다.

* **프로젝트 진행 시 문제점** : HTML 레이아웃에 대한 낮은 이해도가 문제가 되었습니다.

* **프로젝트 문제점 해결 방법** : 구글 사이트에 적용된 CSS를 보며 해당 효과의 역할과 내용에 대해 정리하고 공부하면서 해결할 수 있었습니다.

* **느낀 점 및 배운 점** : 각각의 HTML 구조와 적용되는 CSS 효과가 달라도 구현되는 화면이 같을 수 있다는 점에 흥미가 생겨 빠른 속도로 마무리 지을 수 있었던 프로젝트였습니다.

## 프로젝트 소스 코드
[업데이트 일자 : 2020.01.30]
### AS-IS
![google_img5](https://sonsurim.github.io/portfolio/img/google_img5.PNG)<br/>
### TO-BE
![google_img7](https://sonsurim.github.io/portfolio/img/google_img7.PNG)<br/>
실제 사이트의 검색창 그림자 효과와 검색 기능을 작동시키는 함수입니다. 기존의 vanilla JavaScript로 작성한 코드를 jQuery로 변경하였습니다.

### AS-IS
![google_img6](https://sonsurim.github.io/portfolio/img/google_img6.PNG)<br/>
### TO-BE
![google_img8](https://sonsurim.github.io/portfolio/img/google_img8.PNG)<br/>
모달을 제어할 수 있는 함수입니다.<br/>
document 클릭 시는 항상 class가 remove 되어야 하고 모달이 보이지 않아야 하기 때문에 visible = false로 항시 설정해준 뒤, 모달 클릭 시에만 !visible을 해줌으로 if문을 더 간결하게 만들었습니다. 기존의 vanilla JavaScript로 작성한 코드를 jQuery로 변경하였습니다.


## 프로젝트 구현 이미지
![google_img1](https://sonsurim.github.io/portfolio/img/google_img1.PNG)<br/>
해당 페이지의 메인 화면입니다.

![google_img2](https://sonsurim.github.io/portfolio/img/google_img2.PNG)<br/>
실제 페이지와 똑같이 모달을 구현하였습니다.

![google_img3](https://sonsurim.github.io/portfolio/img/google_img3.PNG)
![google_img4](https://sonsurim.github.io/portfolio/img/google_img4.PNG)<br/>
실제 사이트를 연동시키는 script를 이용하여 검색을 할 수 있게 구현하였습니다.