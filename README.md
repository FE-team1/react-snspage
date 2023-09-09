
## ➡️ 프로젝트 소개

  페이지네이션, 게시물 및 댓글 CRUD 기능을 구현한 게시판 프로젝트

## ➡️ 프로젝트 개요

  첫 메인 페이지와 faker.js 이미지를 활용한 게시글 형태(모달을 이용하여 게시물을 추가)의 게시판 페이지

## ➡️ 진행 팀원 소개

<table style="margin-left: auto; margin-right: auto; width: 600px; height: 200px;">
  <tr>
    <td><a href="">🥰 김가영</a></td>
    <td><a href="">❄️ 권희식</a></td>
    <td><a href="">🦊 장상준</a></td>
  </tr>
</table>

## ➡️ 역할 분담


  - 테마 구현(레이아웃 디자인), CRUD / 가영
  - 목 데이터 생성, 페이지네이션, README.md 작성 / 상준
  - 로그인 구현, 공용 컴포넌트 생성 / 희식


## ➡️ 와이어프레임
<img width="1680" alt="KakaoTalk_Photo_2023-09-09-13-09-04 003" src="https://github.com/FE-team1/react-snspage/assets/134191815/bc07c209-a92c-4604-8316-6473a8b98bad">
<img width="1680" alt="KakaoTalk_Photo_2023-09-09-13-09-04 002" src="https://github.com/FE-team1/react-snspage/assets/134191815/7d05a617-8c2d-477f-a4f3-02520c03ce0d">
<img width="1680" alt="KakaoTalk_Photo_2023-09-09-13-09-04 001" src="https://github.com/FE-team1/react-snspage/assets/134191815/7053ea1c-f999-4e9f-ace9-c24cb0a5b888">





## ➡️ 문서화 - 상세 작업 과정

📋 스프린트

<a href=""></a>

📅 데일리 스크럼

<table style="margin-left: auto; margin-right: auto; width: 600px; height: 200px;">
  <tr>
    <td><a href="">🥰 김가영</a></td>
    <td><a href="">❄️ 권희식</a></td>
    <td><a href="">🦊 장상준</a></td>
  </tr>
</table>

## ➡️ 폴더 구조 

   ```javascript
- src
  - __mock__
    - mockPost.js
  - components
    - Buttons.js
    - footer.js
    - Input.js
  - hooks
    - custom-input.js
  - pages
    - board
      - index.js
  - componenets
    - addOpenModal.js
    - oneComment.js
    - onePost.js
    - pagination.js
    - Paging.css
    - style.js
   - index.js
  - routes
    - routes.js
  - utils
    - validate.js

```

## ➡️ 사용 라이브러리

```
- REACT
- faker.js , shortid : 목데이터 생성
- react-router-dom : 라우팅 연결
- react-paginate : 페이지네이션
- fortawesome : 아이콘
- styled-components, styled-reset : css-in-js
```

## ➡️ 진행과정

### 9/5
- 토이 프로젝트 회의(컨벤션 규칙 지정 및 개발 파트 분배)

### 9/6
- 리액트 메인페이지 만들기 시작
- index.js와 Create관련 모달창을 구현
- 목데이터 완성
- 라우팅 연결 및 컨밴션, 프로젝트 세팅 작업, 사용 라이브러리 설치


### 9/7
- 웹사이트 로그인 로직 구현(css x)
- 무한 스크롤 구현 시작(feat/pagination)
- 메인페이지 CSS와 onePost, oneComment 구현

### 9/8
- 댓글 CRUD 기능 구현중 ...
- 로그인 로직 구현 완료[custom hook, 유효성 검사(utils), 공용 컴포넌트(input) 추가]
- footer(css 구현 x)
- 페이지네이션 구현으로 전환(feat/pagination)

## ➡️ 회고록

#### 아쉬운 점

#### 개선할 점

