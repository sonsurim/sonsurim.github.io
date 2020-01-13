# todolist - Personal

## 프로젝트 소개
* **제목** : Local Stroage를 활용한 todolist

* **기간** : 2019.12.10 ~ 2019.12.18

* **URL** : [https://sonsurim.github.io/todolist/index.html](https://sonsurim.github.io/todolist/index.html)

* **개발 환경** : HTML, CSS, JavaScript, VScode, Git

* **프로젝트 목표와 내용**
    > - **목표** : JavaScript에 대한 이해도 향상
    > - **내용** : DB를 이용하지 않고 Local Storage를 이용하여 url에 기존의 캐시를 남겨두고 해당 url로 들어오면 사용자 본인의 todolist를 언제든지 볼 수 있는 사이트입니다.

* **프로젝트 진행 시 문제점** : Local Storage에 대한 이해도가 부족하여 complete 기능을 구현하는데에 있어 어려움을 겪었습니다.

* **프로젝트 문제점 해결방법** : Local Storage에 대한 공부와 무작정 바로 개발을 하는 것이 아닌 테스트로 코드를 먼저 짜는 방법(TDD)을 이용함으로써 해결할 수 있었습니다.

* **느낀점 및 배운점** : 기존의 방식은 별도의 준비과정 없이 필요 함수만 생각한 채 작성을 한 코드가 대다수였기 때문에 추후에 수정 과정과 추가 기능들에 있어 어려움을 많이 겪었습니다. 해당 프로젝트부터는 TDD를 적용하여 개발을 해 보았습니다. 기존의 코드를 작성하고 실패하고 다시 작성하는 경우와 달리 처음부터 실패, 성공, 리팩토리를 여러차례 겪어보니 더더욱 코드가 간결해지는 것을 느낄 수 있었습니다.

## 프로젝트 소스 코드
![todo1](https://sonsurim.github.io/portfolio/img/todo1.PNG)<br/>
페이지의 초기 화면을 담당하는 함수입니다.<br/>
사용자가 입력하는 이름을 Local Storage에 저장해두어 저장해 둔 이름이 있을 경우, 이름과 함께 그 사람의 할 일 목록을 불러오는 구조로 만들어 두었습니다.

![todo2](https://sonsurim.github.io/portfolio/img/todo2.PNG)<br/>
todo.js의 변수입니다.<br/>

![todo5](https://sonsurim.github.io/portfolio/img/todo5.PNG)<br/>
todolist의 element들을 생성하기 위한 함수입니다.<br/>

![todo6](https://sonsurim.github.io/portfolio/img/todo6.PNG)<br/>
element의 생성과 함께 Local Storage에 들어갈 객체를 생성하는 함수입니다.<br/>

![todo10](https://sonsurim.github.io/portfolio/img/todo10.PNG)<br/>
객체를 JSON으로 문자열화하여 Local Storage에 저장하는 함수입니다.<br/>

![todo7](https://sonsurim.github.io/portfolio/img/todo7.PNG)<br/>
Local Storage에 저장한 함수를 파싱하여 객체로 불러옴과 동시에 화면에 사용자의 이름과 할 일 목록을 출력시키는 함수입니다.<br/>

## 프로젝트 구현 이미지
![todo16](https://sonsurim.github.io/portfolio/img/todo16.PNG)<br/>
![todo17](https://sonsurim.github.io/portfolio/img/todo17.PNG)<br/>
레이아웃은 같지만 화면에 따라 목록의 크기가 작아지거나 커지게 만들어 하나의 디자인으로 모바일, 타블렛, PC에서 모두 사용가능하도록 만들어주었습니다. 입력하는 값이 Local Storage에 저장되는 것을 볼 수 있습니다.