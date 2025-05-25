# 멋쟁이 사자처럼 Front-End BootCamp 13기: 자바스크립트 프로그래밍
* 예제 테스트(GitHub Page): <https://febc-13.github.io/JS/workspace-ins>

# 개발 환경 구축
## 프로그램 설치
* 본인의 OS에 맞는 버전 다운로드 후 설치
  - Nodejs 설치 <https://nodejs.org/en/download/>
  - Visual Studio Code 설치 <https://code.visualstudio.com/download>
  - Git 설치 <https://git-scm.com/downloads>
  - API 클라이언트 설치
    - Postman <https://www.postman.com/downloads>
    - Bruno <https://www.usebruno.com/downloads>
    
# 실습 준비
## Github 저장소 복사
1. 자바스크립트 실습 Github 저장소
    * `https://github.com/FEBC-13/JS.git`

2. 터미널 프로그램 실행 후 개발 수업에 사용할 폴더 생성 후 이동
    * 예시
    ```sh
    mkdir febc13
    cd febc13
    ```

3. 자바스크립트 수업에 사용할 폴더 생성 후 이동
    ```sh
    mkdir 01_js
    cd 01_js
    ```
    
4. 실습 저장소를 로컬에 clone
    ```sh
    git clone https://github.com/FEBC-13/JS.git
    ```

## 실습 저장소의 변경사항 동기화
* github 저장소의 변경사항을 가져올 때
    ```sh
    git pull origin main
    ```
* 충돌 발생시 임시로 필요한 코드만 복사
    - 현재 폴더 하위에 sample/02 폴더만 복사하는 예시
    ```sh
    npx degit https://github.com/FEBC-13/JS/sample/02 sample/02 
    ```

## Visual Studio Code 설정
1. VSCode 실행
2. 프로젝트 선택
    * File > Open Folder... > febc13/01.js/JS 선택
3. File > Preferences > Settings
    * "Files: Auto Save": onFocusChange
    * "Editor: Font Size": 각자 맞춰서 조절
    * "Editor: Tab Size": 2
    * "Editor: Detect Indentation": 체크 해제
    * Workspace 탭 > "Files: Readonly Include"
      - Readonly Include가 보이지 않을 경우 VSCode를 최신 버전(1.79 이상)으로 업데이트
      - Add Pattern > `PPT/**` 입력한 후 OK 선택
      - Add Pattern > `workspace-ins/**` 입력한 후 OK 선택
      - Add Pattern > `sample/**` 입력한 후 OK 선택

## sample 폴더 복사
* sample/01/workspace 폴더를 복사해서 프로젝트 루트에 붙여넣기
* 완성된 강사의 코드는 [workspace-ins](<https://github.com/FEBC-13/JS/tree/main/workspace-ins>) 폴더에서 확인할 수 있음

## 실습 테스트
* 각 예제 클릭해서 테스트
  - .js: Javascript 문법 관련 실습은 브라우저 개발자 도구 > 콘솔 탭에서 결과 확인
  - .html: DOM, Ajax 관련 실습은 새로운 화면으로 이동 후 테스트

### 터미널 테스트
* workspace/ch06/ex06-01.ts 파일 작성
  ```ts
  function hello(name: string): string {
    return 'Hello ' + name;
  }
  console.log(hello('TypeScript'));
  ```

### 웹 브라우저 테스트
#### 웹 서버 구동
1. VSCode의 터미널로 이동
    * VSCode 하단의 TERMINAL이 보이지 않으면 View > Terminal
2. Live Server 구동
    ```sh
    npx live-server workspace
    ```
#### 테스트
* 웹 브라우저로 접속
  - <http://127.0.0.1:8080>
  - <http://localhost:8080>

### Node.js 테스트
```sh
cd workspace/ch01
node ex01-04.js
```

# 타입스크립트
## 타입스크립트 Compiler 설치
* node.js용 TypeScript Compiler 모듈을 global로 설치(어느 경로에서나 tsc 명령어 사용 가능)
* VSCode > View > Terminal
    ```sh
    npm i -g typescript
    ```

## 실행
### 타입스크립트 컴파일 후 js 실행
```sh
cd workspace/ch06
tsc ex06-01.ts
```

### 실행 
```sh
node ex06-01.js
```

### ts-node로 실행
* TypeScript 코드를 JavaScript로 컴파일하지 않고 바로 실행할 수 있게 해주는 Node.js 확장 모듈

#### ts-node 설치
```sh
npm i ts-node -g
```

#### 실행
```sh
cd workspace/ch06
ts-node ex06-01.js
```

## 타입스크립트 설정 파일
* tsconfig.json 파일은 타입스크립트의 설정 파일로, 컴파일러(tsc)가 코드를 어떻게 처리할지를 정의

### 타입스크립트 설정 파일(tsconfig.json) 생성
* 일반적으로 tsconfig.json 파일은 프로젝트 루트에 두지만 본 교육에서는 수강생과 강사의 설정 파일 충돌을 막기 위해서 workspace 하위에 생성
* workspace 에서 실행
```sh
tsc --init
```

### tsconfig.json 파일 수정
* js로 컴파일시 적용할 버전을 es2022로 지정
  - "compilerOptions"의 "target": "es2022"
* 모듈 시스템을 es2022로 지정(import/export)
  - "compilerOptions"의 "module": "es2022"
* 소스 파일의 루트 폴더를 프로젝트 루트로 지정
  - "compilerOptions"의 "rootDir": "./" 주석 해제
* ts 파일과 컴파일된 js 파일을 분리해서 관리
  - 일반적으로 ts와 js 파일 분리를 위해서 설정함
  - 이번 교육에서는 컴파일된 js 파일을 쉽게 확인하기 위해서 ts와 같은 폴더에 컴파일되도록 다음 설정은 하지 않음
  - ~~"compilerOptions"의 "outDir": "./" 주석 해제 후 "./dist"로 수정~~
* workspace 하위의 모든 파일을 대상으로 컴파일
  - tsconfig.json 파일이 프로젝트 루트에 있다면 아래의 설정이 필요하지만 tsconfig.json 파일을 workspace 폴더에 두었다면 불필요
  - ~~"compilerOptions" 아래에 "include": ["workspace/**/*"] 추가~~
* 컴파일에서 제외할 폴더나 파일 지정
  - tsconfig.json 파일이 프로젝트 루트에 있다면 아래의 설정이 필요하지만 tsconfig.json 파일을 workspace 폴더에 두었다면 불필요
  - ~~"compilerOptions" 아래에 "exclude": ["node_modules", "sample/**/*"] 추가~~
* 전체 옵션은 다음 URL 참고
  - <https://www.typescriptlang.org/ko/tsconfig>

## tsc --watch 옵션
* 하위 폴더를 포함해서 ts 파일 변경을 감지하고 자동으로 컴파일한 후 outDir로 지정한 폴더에 js 파일 생성
* tsconfig.json 파일이 있는 폴더에서 실행

```sh
tsc --watch
```

# 팁
* VSCode에서 소스코드 비교
  - 비교할 두개의 파일을 VSCode에서 오픈(예시, student.js, ins.js)
  - student.js 파일이 활성화 되어있는 상태에서
  - View > Command Palette (단축키 F1) > File: Compare Active File With... 선택
  - 비교할 대상 파일 선택(ins.js)
  - student.js <-> ins.js 파일의 차이점 쉽게 확인 가능

# 수업 진도
## 1주차 - 2일, 2025.03.27(목) ~ 2025.03.28(금)

### 1일차(2025.03.27 목)
#### 오전(3시간)
* [JS 레포지토리 README](https://github.com/FEBC-13/JS)
* 💻 개발환경 구성

#### 오후(5시간)
* 📜 자바스크립트란? ~ 자바스크립트 코드의 위치
  - 💻 [01-01 인라인 자바스크립트](./workspace-ins/ch01/ex01-01.html)

##### boj
* 백준 그룹 가입
  - https://www.acmicpc.net/group/23092
  - 💻 Hello World- [boj/01/01.js](./workspace-ins/boj/01/01.js)

### 2일차(2025.03.28 금)
#### 오전(3시간)
* 📜 자바스크립트 코드의 위치
  - 💻 [01-02 외부 자바스크립트 파일 로드](./workspace-ins/ch01/ex01-02.html)
* 📜 명령문과 주석
  - 💻 [01-04 명령문과 주석](./workspace-ins/ch01/ex01-04.js)

#### 오후(3시간)
* 📜 변수
  - 💻 [01-05 변수 선언](./workspace-ins/ch01//ex01-05.js)
* 📜 원시 타입
  - 💻 [01-06 기본 데이터 타입 - Number, String, Boolean, undefined, null](./workspace-ins/ch01/ex01-06.js)
* 📜 산술 연산자
  - 💻 [01-08 산술 연산자 +, -, *, /, %, **](./workspace-ins/ch01/ex01-08.js)

##### boj
* 문제 풀이
  - 💻 A+B: [boj/01/02.js](./workspace-ins/boj/01/02.js)
  - 💻 곱셈: [boj/01/10.js](./workspace-ins/boj/01/10.js)
* 문제 추천
  - 💻 A-B: [boj/01/03.js](./workspace-ins/boj/01/03.js)
  - 💻 A×B: [boj/01/04.js](./workspace-ins/boj/01/04.js)
  - 💻 A/B: [boj/01/05.js](./workspace-ins/boj/01/05.js)
  - 💻 사칙연산: [boj/01/06.js](./workspace-ins/boj/01/06.js)
  - 💻 ??!: [boj/01/07.js](./workspace-ins/boj/01/07.js)
  - 💻 1998년생인 내가 태국에서는 2541년생?!: [boj/01/08.js](./workspace-ins/boj/01/08.js)
  - 💻 나머지: [boj/01/09.js](./workspace-ins/boj/01/09.js)
  - 💻 곱셈: [boj/01/10.js](./workspace-ins/boj/01/10.js)
  - 💻 꼬마 정민: [boj/01/11.js](./workspace-ins/boj/11/02.js)
  - 💻 고양이: [boj/01/12.js](./workspace-ins/boj/01/12.js)
  - 💻 개: [boj/01/13.js](./workspace-ins/boj/01/13.js)

## 2주차 - 4일, 2025.03.31(월) ~ 2025.04.03(목)
### 3일차(2025.03.31 월)
#### 오전(3시간)
* 📜 대입 연산자
  - 💻 [01-09 대입 연산자 =, +=, -=, *=, /=, %=, **=](./workspace-ins/ch01/ex01-09.js)
  - 💻 [01-09-02 대입 연산자 - 1부터 10까지의 모든 수의 합계](./workspace-ins/ch01/ex01-09-02.js)
* 📜 증감 연산자
  - 💻 [01-10 증감 연산자 a++, a--, ++a, --a](./workspace-ins/ch01/ex01-10.js)
  - 💻 [01-10-02 증감 연산자 - x, y 값 계산](./workspace-ins/ch01/ex01-10-02.js)
* 📜 비교 연산자
  - 💻 [01-11 비교 연산자 >, >=, <, <=, ==, !=, ===, !==](./workspace-ins/ch01/ex01-11.js)
  
#### 오후(3시간)
* 📜 비교 연산자
  - 💻 [01-11-02 비교 연산자 - 다음 값들을 비교한 결과를 예측](./workspace-ins/ch01/ex01-11-02.js)
* 📜 일치, 동등 연산자
* 📜 논리 연산자
  - 💻 [01-13 논리 연산자 &&, ||, !](./workspace-ins/ch01/ex01-13.js)
* 📜 삼항 연산자
  - 💻 [01-14 삼항 연산자 ?](./workspace-ins/ch01/ex01-14.js)
  - 💻 [01-14-02 삼항 연산자 - 홀수/짝수 판별(node 명령어로 실행)](./workspace-ins/ch01/ex01-14-02.js)
* 📜 연산자 우선순위
  - 💻 [01-15 연산자 우선순위](./workspace-ins/ch01/ex01-15.js)

##### boj
* 문제 풀이
* 문제 추천
  - 두 수 비교하기: [boj/02/01.js](./workspace-ins/boj/02/01.js)

### 4일차(2025.04.01 화)
#### 오전(3시간)
* 📜 if문
  - 💻 [01-16 if문](./workspace-ins/ch01/ex01-16.js)
  - 💻 [01-16-02 if문을 사용하여 학점 출력](./workspace-ins/ch01/ex01-16-02.js)
  - 💻 [01-16-03 if문을 이용하여 사용자와 로그인 상태 출력](./workspace-ins/ch01/ex01-16-03.js)
* 📜 if-else문
  - 💻 [01-17 if-else문](./workspace-ins/ch01/ex01-17.js)

#### 오후(3시간)
* 📜 if-else문
  - 💻 [01-17-02 if-else문을 사용하여 학점 출력](./workspace-ins/ch01/ex01-17-02.js)
  - 💻 [01-17-03 if-else문을 사용하여 사용자와 로그인 상태 출력](./workspace-ins/ch01/ex01-17-03.js)
* 📜 if-else if문
  - 💻 [01-18 if-else if문](./workspace-ins/ch01/ex01-18.js)
  - 💻 [01-18-02 if-else if문을 사용하여 학점 출력](./workspace-ins/ch01/ex01-18-02.js)
  - 💻 [01-18-03 if-else if문을 사용하여 사용자와 로그인 상태 출력](./workspace-ins/ch01/ex01-18-03.js)
  - 💻 [01-18-04 if-else if문을 사용하여 정보처리 기사 필기 시험 결과 출력](./workspace-ins/ch01/ex01-18-04.js)

##### boj
* 문제 풀이
  - 💻 두 수 비교하기: [boj/02/01.js](./workspace-ins/boj/02/01.js)
* 문제 추천
  - 💻 시험 성적: [boj/02/02.js](./workspace-ins/boj/02/02.js)
  - 💻 윤년: [boj/02/03.js](./workspace-ins/boj/02/03.js)
  - 💻 사분면 고르기: [boj/02/04.js](./workspace-ins/boj/02/04.js)
  - 💻 알람 시계: [boj/02/05.js](./workspace-ins/boj/02/05.js)
  - 💻 오븐 시계: [boj/02/06.js](./workspace-ins/boj/02/06.js)
  - 💻 주사위 세개: [boj/02/07.js](./workspace-ins/boj/02/07.js)

### 5일차(2025.04.02 수)
#### 오전(3시간)
* 📜 if-else if문
  - 💻 [01-18-05 if-else if문을 사용하여 계산기, 요일, 계절 출력](./workspace-ins/ch01/ex01-18-05.js)
* 📜 switch문
  - 💻 [01-19 switch문](./workspace-ins/ch01/ex01-19.js)
  - 💻 [01-19-02 switch문을 사용하여 학점 출력](./workspace-ins/ch01/ex01-19-02.js)
  - 💻 [01-19-03 switch문을 사용하여 계산기, 요일, 계절 출력](./workspace-ins/ch01/ex01-19-03.js)

#### 오후(3시간)
* 📜 while문
  - 💻 [01-20 while문](./workspace-ins/ch01/ex01-20.js)
  - 💻 [01-20-02 while문을 사용하여 홀수/짝수 합계 구하기](./workspace-ins/ch01/ex01-20-02.js)
  - 💻 [01-20-03 while문을 사용하여 쌀알 모으기](./workspace-ins/ch01/ex01-20-03.js)
  - 💻 [01-20-04 do-while문](./workspace-ins/ch01/ex01-20-04.js)
* 📜 for문
  - 💻 [01-21 for문](./workspace-ins/ch01/ex01-21.js)
  - 💻 [01-21-02 for문을 사용하여 별찍기](./workspace-ins/ch01/ex01-21-02.js)

#### boj
* 문제 풀이
  - 💻 두 수 비교하기 (if문으로 수정): [boj/02/01.js](./workspace-ins/boj/02/01.js)

### 6일차(2025.04.03 목)
#### 오전(3시간)
* 📜 for문
  - 💻 [01-21-03 for문을 이용해서 구구단 작성](./workspace-ins/ch01/ex01-21-03.js)
  - 💻 [01-22 break, continue](./workspace-ins/ch01/ex01-22.js)
* 📜 참조 타입(Object, 객체)
  - 💻 [01-23-01 new Object() - 생성자 함수로 객체 생성](./workspace-ins/ch01/ex01-23.js)
  - 💻 [01-23-02 국어, 영어, 수학 총점과 평균 출력](./workspace-ins/ch01/ex01-23-02.js)

#### 오후(3시간)
* 📜 참조 타입(Function, 함수)
  - 💻 [01-30 기본 함수](./workspace-ins/ch01/ex01-30.js)
  - 💻 [01-31 매개변수를 가진 함수](./workspace-ins/ch01/ex01-31.js)
  - 💻 [01-32 매개변수를 가진 함수 - 도어락](./workspace-ins/ch01/ex01-32.js)
  - 💻 [01-33 반환값이 있는 함수](./workspace-ins/ch01/ex01-33.js)
  - 💻 [01-34 반환값이 있는 함수 - 토스터](./workspace-ins/ch01/ex01-34.js)

##### boj
* 문제 추천
  - 💻 구구단: [boj/03/01.js](./workspace-ins/boj/03/01.js)
  - 💻 A+B - 3: [boj/03/02.js](./workspace-ins/boj/03/02.js)
  - 💻 합: [boj/03/03.js](./workspace-ins/boj/03/03.js)
  - 💻 영수증: [boj/03/04.js](./workspace-ins/boj/03/04.js)
  - 💻 코딩은 체육과목 입니다: [boj/03/05.js](./workspace-ins/boj/03/05.js)
  - 💻 빠른 A+B: [boj/03/06.js](./workspace-ins/boj/03/06.js)
  - 💻 A+B - 7: [boj/03/07.js](./workspace-ins/boj/03/07.js)
  - 💻 A+B - 8: [boj/03/08.js](./workspace-ins/boj/03/08.js)
  - 💻 별 찍기 - 1: [boj/03/09.js](./workspace-ins/boj/03/09.js)
  - 💻 별 찍기 - 2: [boj/03/10.js](./workspace-ins/boj/03/10.js)
  - 💻 A+B - 5: [boj/03/11.js](./workspace-ins/boj/03/11.js)
  - 💻 A+B - 4: [boj/03/12.js](./workspace-ins/boj/03/12.js)

## 3주차 - 5일, 2025.04.07(월) ~ 2025.04.11(금)
### 7일차(2025.04.07 월)
#### 오전(3시간)
* 1일차에서 5일차까지 실습 정리
  - ex01-01.html ~ ex01-11.js

#### 오후(5시간)
* 1일차에서 5일차까지 실습 정리
  - ex01-13.js ~ ex01-22.js

* boj 문제 풀이
  - 💻 A-B - [boj/01/03.js](./workspace-ins/boj/01/03.js)
  - 💻 A×B - [boj/01/04.js](./workspace-ins/boj/01/04.js)
  - 💻 A/B - [boj/01/05.js](./workspace-ins/boj/01/05.js)
  - 💻 사칙연산 - [boj/01/06.js](./workspace-ins/boj/01/06.js)
  - 💻 ??! - [boj/01/07.js](./workspace-ins/boj/01/07.js)
  - 💻 1998년생인 내가 태국에서는 2541년생?! - [boj/01/08.js](./workspace-ins/boj/01/08.js)
  - 💻 나머지 - [boj/01/09.js](./workspace-ins/boj/01/09.js)

### 8일차(2025.04.08 화)
#### 오전(3시간)
* boj 문제 풀이
  - 💻 곱셈 - [boj/01/10.js](./workspace-ins/boj/01/10.js)
  - 💻 꼬마 정민 - [boj/01/11.js](./workspace-ins/boj/01/11.js)
  - 💻 고양이 - [boj/01/12.js](./workspace-ins/boj/01/12.js)
  - 💻 개 - [boj/01/13.js](./workspace-ins/boj/01/13.js)
  - 💻 두 수 비교하기 - [boj/02/01.js](./workspace-ins/boj/02/01.js)
  - 💻 시험 성적 - [boj/02/02.js](./workspace-ins/boj/02/02.js)
  - 💻 윤년 - [boj/02/03.js](./workspace-ins/boj/02/03.js)
  - 💻 사분면 고르기 - [boj/02/04.js](./workspace-ins/boj/02/04.js)

#### 오후(3시간 30분)
* boj 문제 풀이
  - 💻 알람 시계 - [boj/02/05.js](./workspace-ins/boj/02/05.js)
* 📜 참조 타입(Object, 객체)
  - 💻 [01-23 new Object() - 생성자 함수로 객체 생성](./workspace-ins/ch01/ex01-23.js)
  - 💻 [01-24 JSON 표기법 - 리터럴 방식으로 객체 생성](./workspace-ins/ch01/ex01-24.js)
  - 💻 [01-24-02 총점과 평균을 메서드로 작성](./workspace-ins/ch01/ex01-24-02.js)

### 9일차(2025.04.09 수)
#### 오전(3시간)
* 📜 JSON 표기법
  - 💻 [01-25 객체의 속성 관리](./workspace-ins/ch01/ex01-25.js)
* 📜 참조 타입(Array, 배열)
  - 💻 [01-26 배열 생성, 읽기, 쓰기](./workspace-ins/ch01/ex01-26.js)

#### 오후(5시간)
* 📜 참조 타입(Array, 배열)
  - 💻 [01-27 모든 요소 읽기 1 - for 루프, for...of, for...in](./workspace-ins/ch01/ex01-27.js)
* 📜 유사 배열 객체
  - 💻 [01-28 유사 배열 객체](./workspace-ins/ch01/ex01-28.js)
* 📜 2차원 배열
  - 💻 [01-29 2차원 배열](./workspace-ins/ch01/ex01-29.js)
* boj 문제 풀이
  - 💻 입력값 2차원 배열로 추출하는 샘플 완성 - [boj/input/sample.js](./workspace-ins/boj/input/sample.js)
  - 💻 오븐 시계 - [boj/02/06.js](./workspace-ins/boj/02/06.js)

### 10일차(2025.04.10 목)
#### 오전(3시간)
* boj 문제 풀이
  - 💻 주사위 세개 - [boj/02/07.js](./workspace-ins/boj/02/07.js)
  - 💻 구구단 - [boj/03/01.js](./workspace-ins/boj/03/01.js)
  - 💻 A+B를 여러 번 출력하는 문제 - [boj/03/02.js](./workspace-ins/boj/03/02.js)
  - 💻 1부터 N까지의 합을 구하는 문제 - [boj/03/03.js](./workspace-ins/boj/03/03.js)
  - 💻 영수증 - [boj/03/04.js](./workspace-ins/boj/03/04.js)
  - 💻 코딩은 체육과목 입니다 - [boj/03/05.js](./workspace-ins/boj/03/05.js)

#### 오후(3시간)
* boj 문제 풀이
  - 💻 빠르게 입력받고 출력하는 문제 - [boj/03/06.js](./workspace-ins/boj/03/06.js)
  - 💻 A+B를 조금 더 아름답게 출력하는 문제 - [boj/03/07.js](./workspace-ins/boj/03/07.js)
  - 💻 A+B를 바로 위 문제보다 아름답게 출력하는 문제 - [boj/03/08.js](./workspace-ins/boj/03/08.js)
  - 💻 별 찍기 - 1 - [boj/03/09.js](./workspace-ins/boj/03/09.js)
  - 💻 별 찍기 - 2 - [boj/03/10.js](./workspace-ins/boj/03/10.js)
  - 💻 0 0이 들어올 때까지 A+B를 출력하는 문제 - [boj/03/11.js](./workspace-ins/boj/03/11.js)
  - 💻 입력이 끝날 때까지 A+B를 출력하는 문제 - [boj/03/12.js](./workspace-ins/boj/03/12.js)

### 11일차(2025.04.11 금)
#### 오전(3시간)
* boj 문제 풀이
  - 💻 공 넣기 - [boj/04/05.js](./workspace-ins/boj/04/05.js)
* 📜 2차원 배열
  - 💻 [01-29-02 2차원 배열 - 멋사 부트캠프 수강생 관리](./workspace-ins/ch01/ex01-29-02.js)

#### 오후(3시간)
* 📜 참조 타입(Array, 배열)
  - 💻 [01-27 모든 요소 읽기 1 - for 루프, for...of, for...in](./workspace-ins/ch01/ex01-27.js)
* 📜 유사 배열 객체
  - 💻 [01-28 유사 배열 객체](./workspace-ins/ch01/ex01-28.js)
* 📜 2차원 배열
  - 💻 [01-29 2차원 배열](./workspace-ins/ch01/ex01-29.js)
* boj 문제 풀이
  - 💻 입력값 2차원 배열로 추출하는 샘플 완성 - [boj/input/sample.js](./workspace-ins/boj/input/sample.js)
  - 💻 오븐 시계 - [boj/02/06.js](./workspace-ins/boj/02/06.js)

## 4주차 - 4일, 2025.04.14(월) ~ 2025.04.17(목)

### 12일차(2025.04.14 월)
#### 오전(3시간)
* 📜 5장 클라이언트 사이드 자바스크립트
* 📜 DOM
* 📜 노드 찾기 1 - getElementById()
  - 💻 [05-01 쇼핑 목록 관리](./workspace-ins/ch05/ex05-01.html)
  - 💻 [05-01-02 id로 요소 찾기 - getElementById()](./workspace-ins/ch05/ex05-01-02.js)
* 📜 노드 찾기 2 - getElementsByTagName()
  - 💻 [05-01-02 태그명으로 요소 찾기 - getElementsByTagName()](./workspace-ins/ch05/ex05-01-02.js)

#### 오후(3시간)
* 📜 노드 찾기 3 - 트리구조 이용
  - 💻 [05-01-03 트리 구조를 이용한 요소 찾기](./workspace-ins/ch05/ex05-01-03.js)
* 📜 노드 찾기 4 - getElementsByClassName()
  - 💻 [05-01-03 class 명으로 요소 찾기 - getElementsByClassName()](./workspace-ins/ch05/ex05-01-03.js)
* 📜 노드 찾기 5 - querySelector()
  - 💻 [05-01-04 CSS 셀렉터로 요소 찾기 = querySelector()](./workspace-ins/ch05/ex05-01-04.js)
  - 💻 [05-02 Counter](./workspace-ins/ch05/ex05-02.html)

### 13일차(2025.04.15 화)
#### 오전(3시간)
* 📜 innerHTML, outerHTML, textContent, innerText
  - 💻 [05-03 쇼핑과 영화 목록](./workspace-ins/ch05/ex05-03.html)

#### 오후(3시간)
* 이벤트 등록 방식 3가지
  - 💻 [05-04 이벤트 등록 방법](./workspace-ins/ch05/ex05-04.html)
* 📜 요소노드 생성, 추가, 삽입, 삭제, 복사
  - 💻 [05-03 쇼핑과 영화 목록](./workspace-ins/ch05/ex05-03.html)

### 14일차(2025.04.16 수)
#### 오전(3시간)
* 💻 [05-05 Todo List - 할일 추가](./workspace-ins/ch05/ex05-05.html)

#### 오후(4시간)
* 💻 [05-05 Todo List - 할일 삭제](./workspace-ins/ch05/ex05-05.html)

### 15일차(2025.04.17 목)
#### 오전(3시간)
* 💻 [05-05 Todo List - 완료/미완료 처리](./workspace-ins/ch05/ex05-05.html)
* 💻 [05-05-02 Todo List - 다양한 방식의 toggleDone 구현](./workspace-ins/ch05/ex05-05-02.html)

#### 오후(3시간)
* 📜 DOM으로 HTML 속성 접근
  - 💻 [05-06 HTML 속성 접근](./workspace-ins/ch05/ex05-06.html)
* 📜 style 다루기
  - 💻 [05-07 style 속성 접근](./workspace-ins/ch05/ex05-07.html)
* 📜 class 다루기
  - 💻 [05-08 class 속성 접근](./workspace-ins/ch05/ex05-08.html)
* 📜 이벤트 핸들러 등록 방법 1, 2, 3
* 📜 Event 객체
  - 💻 [05-09 Event 객체](./workspace-ins/ch05/ex05-09.html)
* 📜 버블링과 갭처링
  - 💻 [05-10 버블링과 캡처링](./workspace-ins/ch05/ex05-10.html)
* 📜 이벤트 위임
  - 💻 [05-11 이벤트 위임](./workspace-ins/ch05/ex05-11.html)

## 5주차 - 5일, 2025.04.21(월) ~ 2025.04.25(금)
### 16일차(2025.04.21 월)
#### 오전(3시간)
* 2강 함수 시작
* 📜 일급 객체
  - 💻 [02-01 변수, 배열 엘리먼트, 다른 객체의 프로퍼티에 함수 할당](./workspace-ins/ch02/ex02-01.js)
  - 💻 [02-02 함수를 다른 함수의 인자로 전달](./workspace-ins/ch02/ex02-02.js)
  - 💻 [02-03 함수를 다른 함수의 리턴값으로 활용](./workspace-ins/ch02/ex02-03.js)
  - 💻 [02-04 함수도 객체처럼 프로퍼티를 가질 수 있다.](./workspace-ins/ch02/ex02-04.js)
* 📜 함수 생성 1 (선언문)
  - 💻 [02-05 선언문](./workspace-ins/ch02/ex02-05.js)
* 📜 함수 생성 2 (표현식)
  - 💻 [02-06 표현식 - 익명함수](./workspace-ins/ch02/ex02-06.js)
  - 💻 [02-07 표현식 - 기명함수](./workspace-ins/ch02/ex02-07.js)
  - 💻 [02-08 표현식 - 기명함수 사용(팩토리얼 함수)](./workspace-ins/ch02/ex02-08.js)

#### 오후(3시간)
* 📜 함수 생성 3 (생성자 함수)
  - 💻 [02-09 Function 생성자 함수](./workspace-ins/ch02/ex02-09.js)
* 📜 함수 생성 4 (화살표 함수)
  - 💻 [02-10 화살표 함수](./workspace-ins/ch02/ex02-10.js)
  - 💻 [02-10-02 화살표 함수 - 배열 메서드에서 사용](./workspace-ins/ch02/ex02-10-02.js)
* 📜 호이스팅
  - 💻 [02-11 선언문 방식과 함수 호이스팅](./workspace-ins/ch02/ex02-11.js)
  - 💻 [02-11-02 선언문 방식과 함수 호이스팅(실제 호출되는 순서에 맞춰서)](./workspace-ins/ch02/ex02-11-02.js)
  - 💻 [02-12 변수 호이스팅](./workspace-ins/ch02/ex02-12.js)
  - 💻 [02-12-02 표현식 방식과 함수 호이스팅](./workspace-ins/ch02/ex02-12-02.js)
  - 💻 [02-12-03 표현식 방식과 함수 호이스팅(실제 호출되는 순서에 맞춰서)](./workspace-ins/ch02/ex02-12-03.js)
* 📜 매개변수와 인자의 수
* 📜 암묵적 매개변수
  - 💻 [02-13 매개변수와 인자수, arguments](./workspace-ins/ch02/ex02-13.js)
  - 💻 [02-13-02 arguments 대신 나머지 매개변수 사용](./workspace-ins/ch02/ex02-13-02.js)

### 17일차(2025.04.22 화)
#### 오전(3시간)
* 📜 함수 호출 방법 1 - 일반 함수
  - 💻 [02-14 함수 호출 방법 1 - 일반 함수](./workspace-ins/ch02/ex02-14.js)
* 📜 함수 호출 방법 2 - 메서드
  - 💻 [02-15 함수 호출 방법 2 - 메서드](./workspace-ins/ch02/ex02-15.js)
  - 💻 [02-16 함수 호출 방법 2 - 메서드(화살표 함수)](./workspace-ins/ch02/ex02-16.js)
* 📜 함수 호출 방법 3 - apply(), call()
  - 💻 [02-05 선언문](./workspace-ins/ch02/ex02-05.js)
  - 💻 [02-15 함수 호출 방법 2 - 메서드](./workspace-ins/ch02/ex02-15.js)

#### 오후(5시간)
* 📜 함수 호출 방법 3 - apply(), call()
  - 💻 [02-17 함수 내부의 this 바인딩 문제](./workspace-ins/ch02/ex02-17.js)
  - 💻 [02-17-01 함수 내부의 this 바인딩 문제 해결](./workspace-ins/ch02/ex02-17-01.js)
  - 💻 [02-17-02 함수 내부의 this 바인딩 문제 해결(call)](./workspace-ins/ch02/ex02-17-02.js)
  - 💻 [02-17-03 함수 내부의 this 바인딩 문제 해결(화살표 함수)](./workspace-ins/ch02/ex02-17-03.js)
  - 💻 [02-18 가변 인자 처리 - apply() 활용](./workspace-ins/ch02/ex02-18.js)
  - 💻 [02-18-02 가변 인자 처리 - 전개 구문 활용](./workspace-ins/ch02/ex02-18-02.js)
* 📜 함수 호출 방법 4 - 생성자 함수
  - 💻 [02-19 생성자 함수](./workspace-ins/ch02/ex02-19.js)

### 18일차(2025.04.23 수)
#### 오전(3시간)
* 📜 함수 호출 방법 4 - 생성자 함수
  - 💻 [02-20 생성자 함수 활용](./workspace-ins/ch02/ex02-20.js)
* 📜 익명 함수, 콜백 함수
  - 💻 [02-21 익명함수와 콜백함수](./workspace-ins/ch02/ex02-21.html)
* 📜 고차 함수
  - 💻 [02-22 배열 다루기](./workspace-ins/ch02/ex02-22.js)

#### 오후(3시간)
* 📜 메모이제이션
  - 💻 [02-23 소수 판별 (메모이제이션)](./workspace-ins/ch02/ex02-23.js)
* 3강 프로토타입, 상속과 클래스
* 📜 프로토타입
  - 💻 [03-01 prototype 속성 - Score 생성자 함수](./workspace-ins/ch03/ex03-01.js)
  - 💻 [03-02 함수를 중복으로 정의 - User 생성자 함수](./workspace-ins/ch03/ex03-02.js)

### 19일차(2025.04.24 목)
#### 오전(3시간)
* 📜 프로토타입
  - 💻 [03-03 prototype으로 함수의 중복을 제거 - User 생성자 함수](./workspace-ins/ch03/ex03-03.js)
* 📜 상속
  - 💻 [03-04 프로토타입 체인을 이용한 상속 기능 구현 - HighSchool, College 생성자 함수](./workspace-ins/ch03/ex03-04.js)
  - 💻 [03-05 중계 클래스를 이용한 상속 - HighSchool, College 생성자 함수](./workspace-ins/ch03/ex03-05.js)
* 📜 클래스
  - 💻 [03-06 클래스 정의와 상속 - HighSchool, College 클래스](./workspace-ins/ch03/ex03-06.js)

#### 오후(3시간)
* 4강 클로저
* 📜 클로저란?
  - 💻 [04-01 클로저를 사용하는 예제](./workspace-ins/ch04/ex04-01.js)
* 📜 클로저 용법 - 캡슐화
  - 💻 [04-02 클로저를 활용한 private 변수](./workspace-ins/ch04/ex04-02.js)
* 📜 클로저 용법 - 커링
  - 💻 [04-03 커링](./workspace-ins/ch04/ex04-03.js)
* 📜 클로저 용법 - Partial application
  - 💻 [04-04 Partial application](./workspace-ins/ch04/ex04-04.js)
  - 💻 [02-17-04 함수 내부의 this 바인딩 문제 해결(bind)](./workspace-ins/ch02/ex02-17-04.js)
* 📜 클로저 용법 - 메모이제이션
  - 💻 [04-05 메모이제이션](./workspace-ins/ch04/ex04-05.js)

### 20일차(2025.04.25 금)
#### 오전(3시간)
* 📜 클로저 용법 - 메모이제이션
  - 💻 [04-06 메모이제이션, 클로저 사용](./workspace-ins/ch04/ex04-06.js)
* 📜 즉시 실행 함수
  - 💻 [04-07 즉시실행 함수](./workspace-ins/ch04/ex04-07.js)

#### 오후(3시간)
* 📜 즉시 실행 함수
  - 💻 [04-08 즉시실행 함수가 필요한 예제 (클로저)](./workspace-ins/ch04/ex04-08.html)
* 타입스크립트
* 📜 개발 환경 구성
  - 💻 [06-01 개발 환경 확인](./workspace-ins/ch06/ex06-01.js)
* 📜 주요 타입
  - 💻 [06-02 주요 타입](./workspace-ins/ch06/ex06-02.js)

#### 병아리반(1일차)
* 프로그래머스 일일 도전 과제 day1
  - 💻 [Day1-01 문자열 출력하기](./workspace-ins/programmers/daily/day01/01.js)
  - 💻 [Day1-02 a와 b 출력하기](./workspace-ins/programmers/daily/day01/02.js)
  - 💻 [Day1-03 문자열 반복해서 출력하기](./workspace-ins/programmers/daily/day01/03.js)

# 참고 사이트
## 자바스크립트 학습
* 모던 자바스크립트 튜토리얼: <https://ko.javascript.info>
* MDN 자바스크립트: <https://developer.mozilla.org/ko/docs/Web/JavaScript>
* 코딩 에브리바디 자바스크립트: <https://codingeverybody.kr/category/javascript>
* 웹 개발자 튜토리얼: <https://poiemaweb.com>

## 코딩 테스트
* 백준
  - https://www.acmicpc.net
  - 단계별로 풀어보기: https://www.acmicpc.net/step
* 프로그래머스 코딩 테스트
  - https://school.programmers.co.kr/learn/challenges
  - 기초 트레이닝: https://school.programmers.co.kr/learn/challenges/training?order=acceptance_desc&languages=javascript
  - 입문: https://school.programmers.co.kr/learn/challenges/beginner?order=acceptance_desc
  - 레벨 1: https://school.programmers.co.kr/learn/challenges?order=acceptance_desc&languages=javascript&page=1&levels=1

## 온라인 웹 개발 에디터(HTML, CSS, JS)
* CodePen: <https://codepen.io>
* Codesandbox: <https://codesandbox.io>
* Stackblitz: <https://stackblitz.com>

## 정규표현식 테스트
* <https://regexr.com>

## API Client
### Postman
* 홈페이지: <https://www.postman.com>
* 다운로드: <https://www.postman.com/downloads>
* 문서: <https://learning.postman.com/docs>

### Bruno
* 홈페이지: <https://www.usebruno.com>
* 다운로드: <https://www.usebruno.com/downloads>
* 문서: <https://docs.usebruno.com/introduction>