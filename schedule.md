# 수업 개요

- 기간: 2025.05.27(화) ~ 2025.07.03(목) 24일간

## 할일

## 주차별 내용

### 1주차 (2025.05.27 화 ~ 2025.05.30 금, 4일)
* TodoList - vanilla JS 
* Counter App - Library 개발
* Todo List - Valilla JS + Library
* Counter App/Todo List - React

### 2주차 (2025.06.02 월 ~ 2025.06.05 목, 3일)
* 리액트 란? 리액트 개발환경 설정, create-react-app, Vite
* JSX, 가상 DOM, 리액트 렌더링
* 리액트의 핵심 Props, State

### 3주차 (2025.06.09 월 ~ 2025.06.13 금, 5일)
* 리액트 개발에 자주 사용하는 자바스크립트 문법
* 리액트 컴포넌트(함수형 컴포넌트, 클래스 컴포넌트)와 라이프 사이클
* 리액트 훅 - useState, useEffect
* 리액트 훅 - useRef, useReducer
* 리액트 훅 - useMemo, useCallback

### 4주차 (2025.06.16 월 ~ 2025.06.19 목, 4일)
* 고차 컴포넌트, 사용자 정의 훅 만들기
* React Router 기본 사용법 (Route, Link, Navigate 등)
* 동적 라우팅과 URL 파라미터 처리, 중첩 라우팅 (Nested Routes)
* Context API 기본 개념과 사용법, useContext 훅을 활용한 Context 관리

### 5주차 (2025.06.23 월 ~ 2025.06.26 목, 4일)
* Redux의 기본 개념과 구조 (스토어, 액션, 리듀서), Redux Toolkit 사용법
* Recoil, Zustand 소개와 간단한 사용법. 전역 상태 관리 시 성능 최적화 전략
* CSS Modules, styled-components, Tailwind CSS와 리액트 통합
* fetch와 axios를 활용한 HTTP 요청, React Query로 데이터 캐싱과 상태 관리

### 6주차 (2025.06.30 월 ~ 2025.07.03 목, 4일)
* 배포의 기본 개념, 배포 가능한 클라우드 서비스, 배포시 고려사항
* Next.js란?, App 라우터,  CSR/SSR, 데이터 fetching
* 게시판 프로젝트 실습 - 로그인, JWT 토큰 인증
* 게시판 프로젝트 실습 - 댓글 관리

# 수업 시간

## 1주차 (2025.05.27 화 ~ 2025.05.30 금, 4일)
### 공식 시간표
* TodoList - vanilla JS 
* Counter App - Library 개발
* Todo List - Valilla JS + Library
* Counter App/Todo List - React

### 1일차(2025.05.27 화)
#### 오전(3시간)
* 🧑‍💻 [개발 환경 구축](./README.md#2-개발-환경-구축)
* 🔊 [1장 리액트 빌드업](./workspace-ins/ch01-buildup)
  - 🔊 [1. 웹 개발의 변천사](./workspace-ins/ch01-buildup#1%EC%9E%A5-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%B9%8C%EB%93%9C%EC%97%85)
  - 🔊 [2. 리액트 개발에 자주 사용하는 자바스크립트 문법](./workspace-ins/ch01-buildup#2-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EC%97%90-%EC%9E%90%EC%A3%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AC%B8%EB%B2%95)

#### 오후(3시간)
* 01 전통적인 방식의 Todo List 테스트(서버에서 완성된 HTML 응답) 
  - 🧑‍💻 [01 Todo List](https://todo.fesp.shop)
* 02 SPA(Single Page Application)
  * Todo List 작성(HTML + vanillaJS)
    - 🧑‍💻 [01 목록 조회](./workspace-ins/ch01-buildup/todolist/01/index.html)
      + workspace/ch01-buildup/todolist/sample 폴더 복사해서 01 폴더 생성
    - 🧑‍💻 [02 등록](./workspace-ins/ch01-buildup/todolist/02/index.html)
      + workspace/ch01-buildup/todolist/01 폴더 복사해서 02 폴더 생성
    - 🧑‍💻 [03 수정](./workspace-ins/ch01-buildup/todolist/03/index.html)
      + workspace/ch01-buildup/todolist/02 폴더 복사해서 03 폴더 생성

#### 회고(1시간)
* 황수곤
  - Promise 이해 안됨
  - 피드백: Promise는 이전에 동기/비동기 함수의 차이와 콜백 함수의 차이를 먼저 이해해야 하므로 해당 단원의 PPT와 실습 예제 먼저 확인해 보고 정확히 모르는 부분에 대해서 다시 질문

#### 병아리반(1시간)
* 프로그래머스 문제 풀이
  - day03/05.js
  - day04/01.js
  - day04/02.js
  - day04/03.js
  - day04/04.js
  - day04/05.js

### 2일차(2025.05.28 수)
#### 오전(3시간)
* 02 SPA(Single Page Application)
  * Todo List 작성(HTML + vanillaJS)
    - 🧑‍💻 [04 삭제, 완성](./workspace-ins/ch01-buildup/todolist/04/index.html)
      - workspace/ch01-buildup/todolist/03 폴더 복사해서 04 폴더 생성
    - 🧑‍💻 [05 데이터를 기반으로 화면 리렌더링](./workspace-ins/ch01-buildup/todolist/05/index.html)
      - workspace/ch01-buildup/todolist/04 폴더 복사해서 05 폴더 생성
  * Counter(라이브리리 개발) 작성
    - 🧑‍💻 [01 HTML + JS](./workspace-ins/ch01-buildup/counter/01/index.html)
      - workspace/ch01-buildup/counter/sample 폴더 복사해서 01 폴더 생성
    - 🧑‍💻 [02 HTML 대신 JS로 UI 구성](./workspace-ins/ch01-buildup/counter/02/index.html)
      - workspace/ch01-buildup/counter/01 폴더 복사해서 02 폴더 생성

#### 오후(3시간)
* 02 SPA(Single Page Application)
  * Counter(라이브리리 개발) 작성
    - 🧑‍💻 [03 createElement() 함수 만들기](./workspace-ins/ch01-buildup/counter/03/index.html)
      - workspace/ch01-buildup/counter/02 폴더 복사해서 03 폴더 생성
    - 🧑‍💻 [04 createElement() 함수 하나로 통합](./workspace-ins/ch01-buildup/counter/04/index.html)
      - workspace/ch01-buildup/counter/03 폴더 복사해서 04 폴더 생성
    - 🧑‍💻 [05 createRoot(), render() 함수 만들기](./workspace-ins/ch01-buildup/counter/05/index.html)
      - workspace/ch01-buildup/counter/04 폴더 복사해서 05 폴더 생성
    - 🧑‍💻 [06 UI 구성 요소별 각각의 함수로 분리(컴포넌트로 만들기)](./workspace-ins/ch01-buildup/counter/06/index.html)
      - workspace/ch01-buildup/counter/05 폴더 복사해서 06 폴더 생성

#### 회고(1시간)
* 이호정
  - 복습을 어떻게 해야할지 모르겠음
  - 피드백: 수업때 만든 라이브러리 코드를 가능하면 이해하고 이해가 안되면 html에서 사용하는 코드만이라도 이해할 것

#### 병아리반(1시간)
* 프로그래머스 문제 풀이
  - day05/01.js
  - day05/02.js
  - day05/03.js

#### 저녁
* 23:00 ~ 23:10 황수곤
  - Reaction 라이브러리가 리액트랑 닮았다고 하는데 어는 부분이 닮았나?
    - 피드백: 아직 리액트를 배우지 않았기 때문에 설명해도 이해가 힘드니 리액트 배우면서 차차 이해할 수 있음
  - Reaction.createElement의 목적은 알겠는데 속성 추가와 자식 추가 하는 코드가 이해 안됨
    - 피드백: 내일 아침에 리뷰하면서 설명

### 3일차(2025.05.29 목)
#### 오전(3시간)
* 02 SPA(Single Page Application)
  * Counter(라이브리리 개발) 작성
    - 🧑‍💻 [07 상태(데이터) 변경시 자동으로 UI 리렌더링](./workspace-ins/ch01-buildup/counter/07/index.html)
      - workspace/ch01-buildup/counter/06 폴더 복사해서 07 폴더 생성

#### 오후(4시간)
* 02 SPA(Single Page Application)
  * Todo List 작성(vanillaJS + Lib)
    - 🧑‍💻 [06 Reaction.createElement() 사용해서 UI 구성](./workspace-ins/ch01-buildup/todolist/06/index.html)
    - 🧑‍💻 [07 UI 구성 요소별 각각의 함수로 분리(컴포넌트로 만들기)](./workspace-ins/ch01-buildup/todolist/07/index.html)
      - workspace/ch01-buildup/todolist/06 폴더 복사해서 07 폴더 생성 

### 4일차(2025.05.30 금)
#### 오전(3시간)
* 02 SPA(Single Page Application)
  * Todo List 작성(vanillaJS + Lib)
    - 🧑‍💻 [08 상태(데이터) 변경시 화면 리렌더링](./workspace-ins/ch01-buildup/todolist/08/index.html)
      - workspace/ch01-buildup/todolist/07 폴더 복사해서 08 폴더 생성

#### 오후(3시간)
* 03 React
  - 🧑‍💻 [01 Counter - React로 구현(React.createElement)](./workspace-ins/ch01-buildup/react/01/index.html)
    - workspace/ch01-buildup/react/sample/counter 폴더 복사해서 workspace/ch01-buildup/react/01 폴더 생성
  - 🧑‍💻 [02 Counter - React로 구현(JSX)](./workspace-ins/ch01-buildup/react/02/index.html)
    - workspace/ch01-buildup/react/01 폴더 복사해서 workspace/ch01-buildup/react/02 폴더 생성
  - 🧑‍💻 [03 Todo List - React로 UI 구성(JSX)](./workspace-ins/ch01-buildup/react/03/index.html)
    - workspace/ch01-buildup/react/02 폴더 복사해서 03 폴더 생성

#### 회고(1시간)
* 김태경
  - 퍼블리셔와 프론트엔드 개발자의 차이

* 김현지
  - 튀는 이력서와 면접에서 어떻게 해야 하나?
  
#### 병아리반(1시간)
* day05
  - 04.js
  - 05.js
* day06
  - 01.js
  - 02.js

## 2주차 (2025.06.02 월 ~ 2025.06.05 목, 3일)
### 공식 시간표
* 리액트 란? 리액트 개발환경 설정, create-react-app, Vite
* JSX, 가상 DOM, 리액트 렌더링
* 리액트의 핵심 Props, State



### 5일차(2025.06.02 월)
#### 오전(3시간)
* 03 React
  - 🧑‍💻 [04 Todo List - React 컴포넌트 분리](./workspace-ins/ch01-buildup/react/04/index.html)
    - workspace/ch01-buildup/react/03 폴더 복사해서 04 폴더 생성
  - 🧑‍💻 [05 Todo List - React 기능 추가](./workspace-ins/ch01-buildup/react/05/index.html)
    - workspace/ch01-buildup/react/04 폴더 복사해서 05 폴더 생성

#### 오후(3시간)
* 02 SPA(Single Page Application)
  * Counter(라이브리리 개발) 작성
    - 🧑‍💻 [08 컴포넌트를 모듈로 분리](./workspace-ins/ch01-buildup/counter/08/index.html)
      - workspace/ch01-buildup/counter/07 폴더 복사해서 08 폴더 생성
  * Todo List 작성(vanillaJS + Lib)
    - 🧑‍💻 [09 컴포넌트를 모듈로 분리](./workspace-ins/ch01-buildup/todolist/09/index.html)
      - workspace/ch01-buildup/todolist/08 폴더 복사해서 09 폴더 생성

#### 회고(1시간)
* 

#### 병아리반(30분)
* day06
  - 03.js
  - 04.js
  - 05.js

### 6일차(2025.06.04 수)
#### 오전(3시간)
* 03 React
  - 🧑‍💻 [06 Todo List - React 컴포넌트를 모듈로 분리](./workspace-ins/ch01-buildup/react/06)
    + workspace/ch01-buildup/react 폴더에서 다음 명령 실행
    ```sh
    npm init vite@latest
      Project name: 06
      Select a fremerork: React
      Select a variant: TypeScript
    cd 06
    npm i
    npm run dev
    ```

#### 오후(3시간)
* 🔊 [2장 React 시작하기](./workspace-ins/ch02-start)
  - 🔊 [1. React란?](./workspace-ins/ch02-start#1-react란)

* 2-1 리액트란?
  * Hello React
    - 🧑‍💻 [01 Hello HTML](./workspace-ins/ch02-start/hello/01.html)
    - 🧑‍💻 [02 Hello DOM](./workspace-ins/ch02-start/hello/02.html)
    - 🧑‍💻 [03 Hello React](./workspace-ins/ch02-start/hello/03.html)
      + workspace/ch02-start/hello/02.html 복사해서 03.html 생성
    - 🧑‍💻 [04 Hello JSX with babel](./workspace-ins/ch02-start/hello/04.html)
      + workspace/ch02-start/hello/03.html 복사해서 04.html 생성
  * Simple Todo List
    - 🧑‍💻 [05 Simple Todo List - HTML](./workspace-ins/ch02-start/todo/05.html)
    - 🧑‍💻 [06 Simple Todo List - React](./workspace-ins/ch02-start/todo/06.html)
    - 🧑‍💻 [07 Simple Todo List - React Component](./workspace-ins/ch02-start/todo/07.html)
      + workspace/ch02-start/todo/06.html 복사해서 07.html 생성
    - 🧑‍💻 [08 Simple Todo List - React Props](./workspace-ins/ch02-start/todo/08.html)
      + workspace/ch02-start/todo/07.html 복사해서 08.html 생성

* 🔊 [2. React 개발 환경 구축](./workspace-ins/ch02-start#2-react-개발-환경-구축)
* 🔊 [3. React 애플리케이션 배포](./workspace-ins/ch02-start#3-react-애플리케이션-배포)

#### 회고(1시간)
* 이호정
  - 왜 어떤 예제는 vite로 실행해야 하는가?
  - ch02-start/vite/09에서 Title 컴포넌트의 title Props는 없애고 하드코딩 하는것과 뭐가 다른가?

#### 병아리반(1시간)
* day06
  - 05.js
* day07
  - 01.js
  - 02.js

### 7일차(2025.06.05 목)
#### 오전(3시간)
* 2-2 리액트 개발 환경 구축
  - 🧑‍💻 [09 Vite로 개발 환경 구축 및 빌드, 배포](./workspace-ins/ch02-start/vite/09)
    + workspace/ch02-start/vite 폴더에서 다음 명령 실행
    ```sh
    npm init vite@latest
      Project name: 09
      Select a fremerork: React
      Select a variant: TypeScript
    cd 09
    npm i
    npm run dev
    ```

#### 오후(3시간)
* 🔊 [4. JSX](./workspace-ins/ch02-start#4-jsx)
* 🔊 [5. 속성 (Props)](./workspace-ins/ch02-start#5-속성-props)

* 2-3 Props
  - 🧑‍💻 [10 Button 컴포넌트에 Props 전달](./workspace-ins/ch02-start/props/10)
    + workspace/ch02-start/props 폴더에서 다음 명령 실행
    ```sh
    npm init vite@latest
      Project name: 10
      Select a fremerork: React
      Select a variant: TypeScript
    cd 10
    npm i # workspace/package.json에서 npm i 한 상태라면 생략
    npm run dev
    ```
    + workspace/ch01-buildup/react/02/index.html에서 컴포넌트 복사

* 🔊 [6. 상태 (State)](./workspace-ins/ch02-start#6-상태-state)
  - 🔊 [6.1 React.useState()](./workspace-ins/ch02-start#61-reactusestate)

#### 회고(1시간)
* 리액트 질의 응답

#### 병아리반(1시간)
* day07
  - 03.js
  - 04.js
  - 05.js

## 3주차 (2025.06.09 월 ~ 2025.06.13 금, 5일)
### 공식 시간표
* 리액트 개발에 자주 사용하는 자바스크립트 문법
* 리액트 컴포넌트(함수형 컴포넌트, 클래스 컴포넌트)와 라이프 사이클
* 리액트 훅 - useState, useEffect
* 리액트 훅 - useRef, useReducer
* 리액트 훅 - useMemo, useCallback


* 🔊 [4장 리액트 훅](./workspace-ins/ch04-hooks#4장-리액트-훅)
  - 🔊 [useMemo](./workspace-ins/ch04-hooks#usememo)
    + 🧑‍💻 [05 useMemo - 함수의 반환값을 memoize](./workspace-ins/ch04-hooks/05-useMemo)
  - 🔊 [useCallback](./workspace-ins/ch04-hooks#usecallback)
    + 🧑‍💻 [06 useCallback(함수 자체를 memoize), React.memo(컴포넌트를 memoize)](./workspace-ins/ch04-hooks/06-useCallback)



* 12장 앱 개발
  * 12-1 Todo List
    - 🧑‍💻 [03 useRef, useReducer로 상태 관리](./workspace-ins/ch12-app/todolist/03-hooks)
      + workspace/ch12-app/02-container 폴더 복사해서 03-hooks 폴더 생성
    - 🧑‍💻 [04 React.memo, useCallback으로 메모이제이션](./workspace-ins/ch12-app/todolist/04-memo)
      + workspace/ch12-app/03-hooks 폴더 복사해서 04-memo 폴더 생성
    - 🧑‍💻 [05 리액트 라우터 적용](./workspace-ins/ch12-app/todolist/05-router)
      + workspace/ch12-app/04-memo 폴더 복사해서 05-router 폴더 생성
    - 🧑‍💻 [06 API 서버 연동](./workspace-ins/ch12-app/todolist/06-api)
      + workspace/ch12-app/05-router 폴더 복사해서 06-api 폴더 생성
    - 🧑‍💻 [07 전역 상태 관리](./workspace-ins/ch12-app/todolist/07-global-state)
      + workspace/ch12-app/06-api 폴더 복사해서 07-global-state 폴더 생성
    - 🧑‍💻 [08 TanStack Query 사용](./workspace-ins/ch12-app/todolist/08-tanstack-query)
      + workspace/ch12-app/07-global-state 폴더 복사해서 08-tanstack-query 폴더 생성

### 8일차(2025.06.09 월)
#### 오전(3시간)
* 2-4 State
  - 🧑‍💻 [11 state 대신 컴포넌트 외부의 변수 사용시 문제점](./workspace-ins/ch02-start/state/11)
    + workspace/ch02-start/state 폴더에서 vite 프로젝트 생성(11)
    + workspace/ch02-start/state/sample/11.html 참고해서 컴포넌트 생성
* 🔊 [6.2 상태 사용시 유의사항](./workspace-ins/ch02-start#62-상태-사용시-유의사항)
  - 🧑‍💻 [12 이벤트 핸들러에서 state 값을 여러번 변경했을 때 문제점](./workspace-ins/ch02-start/state/12)
    + workspace/ch02-start/state 폴더에서 vite 프로젝트 생성(12)
    + workspace/ch02-start/state/sample/12.html 참고해서 컴포넌트 생성
  - 🧑‍💻 [13 상태관리 대상이 객체일 경우 주의 사항](./workspace-ins/ch02-start/state/13)
    + workspace/ch02-start/state 폴더에서 vite 프로젝트 생성(13)
    + workspace/ch02-start/state/sample/13.html 참고해서 컴포넌트 생성

#### 오후(3시간)
* 🧑‍💻 workspace/vite-template 프로젝트 생성
  - `npm init vite@latest vite-template`
  - [vite.config.js 파일 수정](./workspace-ins/ch02-start#viteconfigjs)
  - 불필요한 파일 삭제
* 🔊 [6.3 상태의 불변성 (immutability)](./workspace-ins/ch02-start#63-상태의-불변성-immutability)
  - 🧑‍💻 [14 상태관리 대상이 복합 객체일 경우 불변성 (feat. immer)](./workspace-ins/ch02-start/state/14)
    + workspace/vite-template 폴더 복사해서 14 폴더 생성
    + workspace/ch02-start/state/sample/14.html 참고해서 컴포넌트 생성
    + workspace 폴더에서 immer 라이브러리 설치
      - `npm i immer`

#### 회고(1시간)
* 오서현
  - ch02/14 예제 설명


### 9일차(2025.06.10 화)
#### 오전(3시간)
* 🔊 [7. 유효성 검증](./workspace-ins/ch02-start#7-유효성-검증)
  - 🧑‍💻 [15 회원가입 입력값 상태 관리](./workspace-ins/ch02-start/state/15)
    + workspace/vite-template 폴더 복사해서 15 폴더 생성
    + workspace/ch02-start/state/sample/15.html 참고해서 컴포넌트 생성

#### 오후(3시간)
  - 🧑‍💻 [16 회원가입 입력값 검증 (feat. react-hook-form)](./workspace-ins/ch02-start/state/16)
    + workspace/ch02-start/state/15 폴더 복사해서 16 폴더 생성
    + workspace 폴더에서 react-hook-form 라이브러리 설치
      - `npm i react-hook-form`
* 🔊 [3장 클래스 컴포넌트와 컴포넌트의 라이프 사이클](./workspace-ins/ch03-class)
  - 🧑‍💻 [01 클래스 컴포넌트](./workspace-ins/ch03-class/01-classbase)

#### 회고(1시간)
* 김지연: ch04-class 폴더에서 오류
  - vscode reload

#### 병아리반(1시간)
* day08
  - 01.js
  - 02.js

### 10일차(2025.06.11 수)
#### 오전(3시간)
* 🔊 [3장 클래스 컴포넌트와 컴포넌트의 라이프 사이클](./workspace-ins/ch03-class#3장-클래스-컴포넌트와-컴포넌트의-라이프-사이클)
  - 🧑‍💻 [02 클래스 컴포넌트 - 함수형 컴포넌트와 같이 사용](./workspace-ins/ch03-class/02-functionbase)
  - 🧑‍💻 [03 클래스 컴포넌트 - 컴포넌트의 라이프 사이클](./workspace-ins/ch03-class/03-lifecycle)

#### 오후(3시간)
* 🔊 [4장 리액트 훅](./workspace-ins/ch04-hooks#4장-리액트-훅)
  - 🔊 [useState](./workspace-ins/ch04-hooks#usestate)
    + 🧑‍💻 [01 useState - 상태 관리](./workspace-ins/ch04-hooks/01-useState)
  - 🔊 [useEffect](./workspace-ins/ch04-hooks#useeffect)
    + 🧑‍💻 [02 useEffect - side effect 관리](./workspace-ins/ch04-hooks/02-useEffect)

#### 회고(1시간)
* 임현욱: 순수함수를 위해서 데이터 페칭을 할때 useEffect를 쓰는데 SSR을 쓰면 매번 달라지는 데이터를 받아올 수 있는데 순수성이 없는건가?
  - SSR의 영역은 리액트가 아니고 서버이므로 수순함과 상관이 없음
* 황수곤: 수업 내용의 포인트를 놓치는 경우가 많은데 수업 듣는 태도가 문제가 있는건가?
  - 필기에 집중해서 놓치는 경향이 있음(노션에 따로 필기하고 있음)
    + 필기를 안하는건 어떤가?
  - 그러면 걱정되는 부분은 수업이 끝난 후에 정리를 못하겠음
  - 이해 못한 내용이 있으면 자꾸 머릿속에 맴돌아서 다음 수업을 놓침
    + 필기 하지 말고 모르는 부분만 메모해 두고 잊어버리라
    + 수업 끝나면 회고에서 질문하거나 개인적으로 질문하거나 찾아보기

#### 병아리반(1시간)
* 

### 11일차(2025.06.12 목)
#### 오전(3시간)
- 🔊 [useReducer](./workspace-ins/ch04-hooks#usereducer)
  + 🧑‍💻 [03 useReducer - 상태 관리 로직을 한곳에](./workspace-ins/ch04-hooks/03-useReducer)

#### 오후(3시간)
- 🔊 [useRef](./workspace-ins/ch04-hooks#useref)
  + 🧑‍💻 [04 useRef - 값이 유지되는 데이터 관리, DOM 엘리먼트 참조](./workspace-ins/ch04-hooks/04-useRef)

#### 회고(1시간)
* 황유빈: 자바스크립트 객체중에 1급 객체가 아닌게 있나?
  - 자바스크립트의 객체를 일급 객체라고 하고 자바 같은 다른 언어는 일급 객체가 아님
  - 함수도 일급 객체임

#### 병아리반(1시간)
* 

### 12일차(2025.06.13 금)
#### 오전(3시간)
- 🔊 [useMemo](./workspace-ins/ch04-hooks#usememo)
  + 🧑‍💻 [05 useMemo - 함수의 반환값을 memoize](./workspace-ins/ch04-hooks/05-useMemo)
- 🔊 [useCallback](./workspace-ins/ch04-hooks#usecallback)
  + 🧑‍💻 [06 useCallback(함수 자체를 memoize), React.memo(컴포넌트를 memoize)](./workspace-ins/ch04-hooks/06-useCallback)

#### 오후(3시간 반)
- 🔊 [리액트 컴파일러](./workspace-ins/ch04-hooks#리액트-컴파일러)
  + 🧑‍💻 [07 React Compiler를 사용한 메모이제이션](./workspace-ins/ch04-hooks/07-useCallback-RC)
* 12장 앱 개발
  * 12-1 Todo List
    - 🧑‍💻 [01 기본 Todo List](./workspace-ins/ch12-app/todolist/01-basic)
    - 🧑‍💻 [02 컨테이너 컴포넌트 추가](./workspace-ins/ch12-app/todolist/02-container)

#### 회고(1시간 반)
* 오서현: useEffect의 의존성 배열 모르겠음
  - ch04/02-useEffect 예제 보고 설명
* 이호정: useMemo에서 리액트 컴파일러 모르겠음, 메모이제이션이 자동으로 되었는데 프로파일에는 왜 회색으로 안보이나?
  - Product가 자동 메모이제이션 된거는 Product가 사용하는 함수나 자식 컴포넌트에 대해서 메모이제이션을 했다는 의미
  - App이 "use no memo" 지시어로 메모이제이션이 안되었기 때문에 Product가 다시 렌더링 된 것


## 4주차 (2025.06.16 월 ~ 2025.06.19 목, 4일)
### 공식 시간표
* 고차 컴포넌트, 사용자 정의 훅 만들기
* React Router 기본 사용법 (Route, Link, Navigate 등)
* 동적 라우팅과 URL 파라미터 처리, 중첩 라우팅 (Nested Routes)
* Context API 기본 개념과 사용법, useContext 훅을 활용한 Context 관리

### 13일차(2025.06.16 월)
#### 오전(3시간)
* 과제 풀이
  - 🧑‍💻 [03 useRef, useReducer로 상태 관리](./workspace-ins/ch12-app/todolist/03-hooks)
  - 🧑‍💻 [04 React.memo, useCallback으로 메모이제이션](./workspace-ins/ch12-app/todolist/04-memo)

* 커스텀 훅 설명
  - 🧑‍💻 [08 customHook - useCounter 커스텀 훅 사용](./workspace-ins/ch12-app/todolist/08-customCounter)

#### 오후(3시간)
  - 🧑‍💻 [09 customHook - 커스텀 훅 없이 fetch API 사용](./workspace-ins/ch12-app/todolist/09-fetch)
  - 🧑‍💻 [10 customHook - useFatch, useAxios 커스텀 훅 사용](./workspace-ins/ch12-app/todolist/10-customFetch)


#### 회고(1시간)
* 오서현
  - 주말에 공부하다가 console.time() 사용법
    + time(), timeEnd() 사이의 시간 구하기(문자열이 같아야 함)
* 박선영
  - useAxios() 만드는 실습 뭐해야 하는지 모르겠음
  - js 수업때 ex05-14 번 예제 참고

#### 병아리반(1시간)
* 김지연, 김혜민, 남상호, 배동초, 이호정, 장아영, 정유진, 차형주, 홍예린, 황수곤
* day10
  - 01.js
  - 02.js
  - 03.js
  - 04.js
  - 05.js

### 13일차(2025.06.16 월)
#### 오전(3시간)
* 12장 앱 개발
  * 12-1 Todo List
    - 🧑‍💻 [03 useRef, useReducer로 상태 관리](./workspace-ins/ch12-app/todolist/03-hooks)
    - 🧑‍💻 [04 React.memo, useCallback으로 메모이제이션](./workspace-ins/ch12-app/todolist/04-memo)
* 4장 리액트 훅
  * 🔊 [Custom Hook](./workspace-ins/ch04-hooks#custom-hook)
    - 🧑‍💻 [08 customHook - useCounter 커스텀 훅 사용](./workspace-ins/ch12-app/todolist/08-customCounter)

#### 오후(3시간)
* 4장 리액트 훅
  * Custom Hook
    - 🧑‍💻 [09 customHook - 커스텀 훅 없이 fetch API 사용](./workspace-ins/ch12-app/todolist/09-fetch)
    - 🧑‍💻 [10 customHook - useFatch, useAxios 커스텀 훅 사용](./workspace-ins/ch12-app/todolist/10-customFetch)

### 14일차(2025.06.17 화)
#### 오전(3시간)
* 4장 리액트 훅
  * Custom Hook
    - 🧑‍💻 [10 customHook - useFatch, useAxios 커스텀 훅 사용](./workspace-ins/ch12-app/todolist/10-customFetch)

#### 오후(3시간)
* 🔊 [5장 리액트 라우터](./workspace-ins/ch05-router#5장-리액트-라우터)
  * 🔊 [1. 클라이언트 측 라우팅이란?](./workspace-ins/ch05-router#1-클라이언트-측-라우팅이란)
    - 🧑‍💻 [01 클라이언트 라우팅 직접 구현](./workspace-ins/ch05-router/01-my-router)
  * 🔊 [2. 리액트 라우터란?](./workspace-ins/ch05-router#2-리액트-라우터란)
  * 🔊 [3. 리액트 라우터가 제공하는 라우터](./workspace-ins/ch05-router#3-리액트-라우터가-제공하는-라우터)
  * 🔊 [4. 리액트 라우터가 제공하는 컴포넌트](./workspace-ins/ch05-router#4-리액트-라우터가-제공하는-컴포넌트)
    - 🧑‍💻 [02 리액트 라우터 사용](./workspace-ins/ch05-router/02-react-router)





  * 🔊 [7. 레이지 로딩 (lazy loading)](./workspace-ins/ch05-router#7-레이지-로딩-lazy-loading)
  * 🔊 [8. React.Suspense 컴포넌트](./workspace-ins/ch05-router#8-reactsuspense-컴포넌트)
  * 🔊 [9. 라우터가 적용된 프로젝트 구조](./workspace-ins/ch05-router#9-라우터가-적용된-프로젝트-구조)



#### 회고(1시간)
* 배동초
  - react-router 인식 못함
  - js 프로젝트에 설치함
* 유진혁
  - 설문내용중 회고조로 파이널 하고 싶은데 어떻게 생각하나?
  - 회고조는 실력으로 편성한게 아니라서 팀별로 차이가 많이 날듯
  - 빌런 황수곤 이외에도 빌런제조기 역할
  - 오서현은 실력이 어떤지
    + 이해도가 낮다
* 오서현
  - ch12-app/todolist/05-router 내용이 비어있음

#### 병아리반(1시간)
* 김지연, 김혜민, 남상호, 이호정, 장아영, 정유진, 차형주, 홍예린
  - 1번 지금처럼: 장아영, 김혜민, 김지연
  - 2번 리액트: 이호정, 장아영, 남상호, 김지연, 정유진, 홍예린
* 리액트 수업 진행 방향
  - 했던 실습 위주로 중요한 개념에 대해서 학습하고 이론 같이 설명

### 15일차(2025.06.18 수)
#### 오전(3시간)
* 12장 앱 개발
  * 12-1 Todo List
    - 🧑‍💻 [05 리액트 라우터 적용](./workspace-ins/ch12-app/todolist/05-router)

#### 오후(3시간)
* 5장 리액트 라우터
  * 🔊 [5. 리액트 라우터가 제공하는 기능](./workspace-ins/ch05-router#5-리액트-라우터가-제공하는-기능)
  * 🔊 [6. 리액트 라우터가 제공하는 Hook](./workspace-ins/ch05-router#6-리액트-라우터가-제공하는-hook)
* 12장 앱 개발
  * 12-1 Todo List
    - 🧑‍💻 [05 리액트 라우터 적용](./workspace-ins/ch12-app/todolist/05-router)

#### 회고(1시간)
* 황수곤
  - 리액트 책을 샀는데 TS가 아니라 JS임
  - 따로 설치해서 실습하고 싶은데 환경은 우리의 실습 환경으로 해도 되나?
    + 따로 JS 환경으로 구성
* 황우빈: 두 코드의 차이점
  - const { item } = useOutletContext<OutletProps>();
  - const { item }: OutletProps = useOutletContext();
  - 기능상 차이는 없는것 같지만 generic이 지원되면 사용하면 좋을듯

#### 병아리반(1시간)
* todolist 1일차
  - 기본 버전 처음부터 다시 설명
  - html -> JSX 변환
  - Header, Footer, Todo 컴포넌트 분리

### 16일차(2025.06.19 목)
#### 오전(3시간)
* 12장 앱 개발
  * 12-1 Todo List
    - 🧑‍💻 [05 리액트 라우터 적용](./workspace-ins/ch12-app/todolist/05-router)

#### 오후(3시간)
* 🔊 [9장 HTTP 통신과 Ajax](./workspace-ins/ch09-ajax#9장-http-통신과-ajax)
  * 🔊 [1. HTTP](./workspace-ins/ch09-ajax#1-http)
  * 🔊 [2.2 Todo List API 테스트](./workspace-ins/ch09-ajax#22-todo-list-api-테스트)
    - 🧑‍💻 [06 API 서버 연동](./workspace-ins/ch12-app/todolist/06-api)

#### 회고(1시간)
* 오서현
  - 10시쯤 외출해서 수업 못들었는데 과제 무엇인가?
  + 12장 todolist/06-api 코드 공부
  + 9장 todolist postman 테스트

#### 병아리반(1시간)
* todolist 2일차
  - Todo 컴포넌트 분리
    + TodoInput
    + TodoList
    + TodoListItem
  - initItemList로 목록 렌더링
    + props로 데이터 전달

## 5주차 (2025.06.23 월 ~ 2025.06.26 목, 4일)
### 공식 시간표
* Redux의 기본 개념과 구조 (스토어, 액션, 리듀서), Redux Toolkit 사용법
* Recoil, Zustand 소개와 간단한 사용법. 전역 상태 관리 시 성능 최적화 전략
* CSS Modules, styled-components, Tailwind CSS와 리액트 통합
* fetch와 axios를 활용한 HTTP 요청, React Query로 데이터 캐싱과 상태 관리

* 9장 HTTP 통신과 Ajax
  * 🔊 [4. 데이터 패칭 패턴](./workspace-ins/ch09-ajax#4-데이터-패칭-패턴)
    - 🧑‍💻 [04 Fetch-on-render와 Fetch-then-render](./workspace-ins/ch09-ajax/04-board-pattern)
    - 🧑‍💻 [05 Render-as-you-fetch(Suspense)](./workspace-ins/ch09-ajax/05-board-suspense)
    - 시간 없어서 생략

* 5장 리액트 라우터
  * 🔊 [7. 레이지 로딩 (lazy loading)](./workspace-ins/ch05-router#7-레이지-로딩-lazy-loading)
  * 🔊 [8. React.Suspense 컴포넌트](./workspace-ins/ch05-router#8-reactsuspense-컴포넌트)
  * 🔊 [9. 라우터가 적용된 프로젝트 구조](./workspace-ins/ch05-router#9-라우터가-적용된-프로젝트-구조)
    - 🧑‍💻 [05 리액트 라우터 적용](./workspace-ins/ch12-app/todolist/05-router)

### 17일차(2025.06.23 월)
#### 오전(3시간)
* 9장 HTTP 통신과 Ajax
  * 🔊 [2.3 Open Market API 테스트](./workspace-ins/ch09-ajax#23-open-market-api-테스트)

#### 오후(3시간)
* 9장 HTTP 통신과 Ajax
  * 🔊 [3.3 fetch API](./workspace-ins/ch09-ajax#33-fetch-api)
    - 🧑‍💻 [01 Fetch API](./workspace-ins/ch09-ajax/01-board-fetch)

#### 회고(1시간)
* 

#### 병아리반(1시간)
* 삭제 기능 구현
  - TodoList
    + deleteItem 작성
    + TodoItem에 props로 전달
  - TodoItem
    + handleDelete 구현
* 추가 기능 구현
  - TodoInput
    + handleAdd 추가

### 18일차(2025.06.24 화)
#### 오전(3시간)
* 9장 HTTP 통신과 Ajax
  * 🔊 [3.4 axios 라이브러리](./workspace-ins/ch09-ajax#34-axios-라이브러리)
    - 🧑‍💻 [02 Axios 라이브러리](./workspace-ins/ch09-ajax/01-board-axios)

#### 오후(3시간)
  * 🔊 [3.5 React Query(TanStack Query)](./workspace-ins/ch09-ajax#35-react-querytanstack-query)
    - 🧑‍💻 [03 React Query 라이브러리](./workspace-ins/ch09-ajax/03-board-reactquery)

#### 회고(1시간)
* react-query의 queryFn 에러는 @types/axios 설치된 사람에게 발생

#### 병아리반(1시간)
* 추가 기능 구현
  - TodoList
    + addItem 작성
    + TodoInput과 형제 이므로 props로 전달 불가
  - Todo
    + TodoList의 상태와 메서드 전부 Todo로 이동
    + addItem -> TodoInput에 전달
    + handleAdd에서 addItem 호출 해서 추가 기능 완료
* 삭제 기능 구현
  - Todo
    + deleteItem -> TodoList에 전달
  - TodoList
    + deleteItem -> TodoItem에 전달
  - TodoItem
    + 삭제 기능 완료

### 19일차(2025.06.25 수)
#### 오전(3시간)
* 🔊 [3.3.5 인터셉터](./workspace-ins/ch09-ajax#335-인터셉터)
  - 🧑‍💻 [02 Axios 라이브러리](./workspace-ins/ch09-ajax/01-board-axios)

* 🔊 [6장 Context API](./workspace-ins/ch06-contextapi)
  * 🔊 [1. Context API란?](./workspace-ins/ch06-contextapi#1-context-api란)
    - 🧑‍💻 [01 Prop Drilling](./workspace-ins/ch06-contextapi/01-prop-drilling)
  * 🔊 [2. 사용 방법](./workspace-ins/ch06-contextapi#2-사용-방법)
    - 🧑‍💻 [02 Context API - useContext 훅](./workspace-ins/ch06-contextapi/02-useContext)

#### 오후(4시간 20분)
  * 🔊 [2.3.2 use 훅 사용 (React 19 신규 기능)](./workspace-ins/ch06-contextapi#232-use-훅-사용-react-19-신규-기능)
    - 🧑‍💻 [03 Context API - use 훅](./workspace-ins/ch06-contextapi/03-use)

* 🔊 [7장 전역 상태 관리](./workspace-ins/ch07-globalstate#7장-전역-상태-관리)
  * 🔊 [2. Redux](./workspace-ins/ch07-globalstate#2-redux)
    - 🧑‍💻 [01 Redux](./workspace-ins/ch07-globalstate/01-redux)

#### 회고(1시간)
* 이호정: 컨텍스트 API 03번 예제에서 left3를 두개로 만든 이유

### 20일차(2025.06.26 목)
#### 오전(3시간)
  * 🔊 [3. Jotai](./workspace-ins/ch07-globalstate#3-jotai)
    - 🧑‍💻 [02 Jotai](./workspace-ins/ch07-globalstate/02-jotai)
  * 🔊 [4. Zustand](./workspace-ins/ch07-globalstate#4-zustand)
    - 🧑‍💻 [03 Zustand](./workspace-ins/ch07-globalstate/03-zustand)

#### 오후(4시간)
* 🔊 [8장 리액트에서 CSS 사용](./workspace-ins/ch08-css#8장-리액트에서-css-사용)
  * 🔊 [1 기본 CSS 적용 방법](./workspace-ins/ch08-css#1-기본-css-적용-방법)
    - 🧑‍💻 [01 바닐라 CSS](./workspace-ins/ch08-css/01-css)
  * 🔊 [2 CSS 모듈](./workspace-ins/ch08-css#2-css-모듈)
    - 🧑‍💻 [02 CSS Module](./workspace-ins/ch08-css/02-module)
  * 🔊 [3 CSS-in-JS](./workspace-ins/ch08-css#3-css-in-js)
    - 🧑‍💻 [03 Styled Components](./workspace-ins/ch08-css/03-styled)
  * 🔊 [4 Tailwind CSS](./workspace-ins/ch08-css#4-tailwind-css)
    - 🧑‍💻 [04 Tailwind CSS](./workspace-ins/ch08-css/04-twilwind)

#### 회고(1시간)
* 


## 6주차 (2025.06.30 월 ~ 2025.07.03 목, 4일)
### 공식 시간표
* 배포의 기본 개념, 배포 가능한 클라우드 서비스, 배포시 고려사항
* Next.js란?, App 라우터,  CSR/SSR, 데이터 fetching
* 게시판 프로젝트 실습 - 로그인, JWT 토큰 인증
* 게시판 프로젝트 실습 - 댓글 관리

### 21일차(2025.06.30 월)
#### 오전(3시간)
* 🔊 [10장 Next.js](./workspace-ins/ch10-nextjs#10장-nextjs)
  * 🔊 [1 Next.js 개요](./workspace-ins/ch10-nextjs#1-nextjs-개요)
* 5장 리액트 라우터
  * 🔊 [7. 레이지 로딩 (lazy loading)](./workspace-ins/ch05-router#7-레이지-로딩-lazy-loading)
    - 🧑‍💻 [05 리액트 라우터 적용](./workspace-ins/ch12-app/todolist/05-router)
  * 🔊 [8. React.Suspense 컴포넌트](./workspace-ins/ch05-router#8-reactsuspense-컴포넌트)
    - 🧑‍💻 [04 React Query(TanStack Query) + Suspense](./workspace-ins/ch09-ajax/04-board-suspense)
* 10장 Next.js
  * 🔊 [2 개발환경 구성](./workspace-ins/ch10-nextjs#2-개발환경-구성)
    - 🧑‍💻 [01 개발환경 수동 구성](./workspace-ins/ch10-nextjs/01-manual)
    - 🧑‍💻 [02 개발환경 자동 구성 - catete-next-app](./workspace-ins/ch10-nextjs/01-cra)

#### 오후(3시간)
  * [3 프로젝트 구조](./workspace-ins/ch10-nextjs#3-프로젝트-구조)
  * [4 라우팅](./workspace-ins/ch10-nextjs#4-라우팅)
    * [4.5.1 Link 컴포넌트](./workspace-ins/ch10-nextjs#451-link-컴포넌트)
      - 🧑‍💻 [02 개발환경 자동 구성 - catete-next-app](./workspace-ins/ch10-nextjs/01-cra)

#### 회고(1시간)
* 조현수

#### 병아리반(1시간)
* 토글 기능 구현
  - Todo
    + toggleDone 작성
    + toggleDone -> TodoList -> TodoItem
  - TodoItem
    + handleToggle 작성
    + toggleDon 호출해서 토글 기능 완료
* 추가때 엔터 이벤트 처리, 추가후 focus 지정
  - TodoInput
    + handleAddKeydown() 이벤트 처리
    + useRef 훅으로 포커스 추가

### 야간
* 20:50 김태우
  - 지난주 목요일 수업을 빠졌는데 깃허브에 정리된 내용 없음
    + 정리해서 올릴예정
  - 과제 어떻게 해야 할지 모르겠음
    + 문서 보고 그대로 따라 하면 됨 

* 오서현
  - 과제 서버 실행 안됨
    + 프로젝트 생성 안함
  - metadata 모르겠음
    + title, description 같은 정보를 제공하는 태그를 지정

* 구성연
  - 고양이 이미지 불러오기 만들고 있는데 잘 모르겠음
    + 불필요한 코드 정리해줌

* 최승균
  - next.config 설정하는 방법이 공식 문서에서 cjs 방식이라서 우리의 mjs와 다름
    + 그냥 똑같이 설정 복사해서 우리 파일에 작성하면 됨
  - useOptimistic 문의

### 22일차(2025.07.01 화)
#### 오전(3시간)
* 

#### 오후(3시간)
* 

* 게시물 목록에서 새로고침 한 후 뒤로가기 누르면 RootLayout에 콘솔이 여러번 찍힘

#### 회고(1시간)
* 과제 2일차 정리

#### 병아리반(1시간)
* chick/todo 복사해서 todo-api 생성
* 할일 목록 API 서버 호출
  - hooks/useAxiosInstance 작성
  - TodoList에 fetchTodoList() 작성

### 23일차(2025.07.02 수)
#### 오전(3시간)
* 라우팅용 특수 파일
  - loading
  - error
  - not-found
  - router handler

#### 오후(4시간)
* Data fetching
* 게시물 등록까지

#### 회고(1시간)
* 

#### 병아리반(1시간)
* 패스

### 24일차(2025.07.03 목)
#### 오전(3시간)
* 설명

#### 오후(3시간)
* 등록 후 목록으로 이동
  - 목록 캐시 설정 추가
  - 목록 revalidate

* 설명(9. 최적화 까지, 인증은 안함)

#### 회고(1시간)
* 

#### 병아리반(1시간)
* 할일 목록 상태로 반영

* 할일 등록 API 서버 호출
  - TodoList의 fetchList -> TodoInput에 전달
  - TodoInput handleAdd()에서 서버 호출로 수정 후 fetchTodoList() 호출 
* 할일 삭제 API 서버 호출
  - TodoList의 fetchList -> TodoItem에 전달
  - TodoInput handleDelete()에서 서버 호출로 수정 후 fetchTodoList() 호출 
* 할일 수정 API 서버 호출
  - TodoList의 toggleDone()에서 서버 호출로 수정 후 fetchTodoList() 호출

