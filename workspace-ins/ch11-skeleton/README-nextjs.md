# Lion Board 앱 개발
* TypeScript
* Next.js
* create-next-app

# 1 개발 준비

## 1.1 샘플 코드 테스트
### 1.1.1 샘플 코드 복사
* 레포지토리 루트 폴더(React)에서 실행
  ```sh
  cp -r sample/06/workspace/ch11-skeleton/lion-board-template workspace/ch11-skeleton/lion-board-template
  ```

### 1.1.2 샘플 코드 실행
* 레포지토리 루트 폴더(React)에서 실행
  ```sh
  cd workspace/ch11-skeleton
  npx live-server lion-board-template
  ```

### 1.1.3 접속 테스트
* http://127.0.0.1:8080

## 1.2 프로젝트 생성
* React/workspace/ch11-skeleton 에서 실행
  ```sh
  npx create-next-app@latest
  ```

* Need to install the following packages:
  - create-next-app@15.3.4
  - Ok to proceed? (y) __✅y__
  - 이미 설치되어 있는 경우 해당 문구가 나오지 않음
* What is your project named? ... lion-board-01
* Would you like to use TypeScript? ... No / __✅Yes__
* Would you like to use ESLint? ... No / __✅Yes__
* Would you like to use Tailwind CSS? ... No / __✅Yes__
* Would you like your code inside a `src/` directory? ... No / __✅Yes__
* Would you like to use App Router? (recommended) ... No / __✅Yes__
* Would you like to use Turbopack for next dev? ... No / __✅Yes__
  - Turbopack: 기존 Webpack 대신 사용하는 고성능 번들러
* Would you like to customize the import alias (@/* by default)? __✅No__ / Yes

## 1.3 불필요한 파일 정리
* ch11-skeleton/lion-board-01/src 하위 파일 정리
  - favicon.ico 삭제
  - layout.tsx 삭제
  - page.tsx 삭제
  - global.css 파일 내용을 tailwindcss import 구문만 남기고 제거
  
    ```css
    @import "tailwindcss";
    ```
* ch11-skeleton/lion-board-01/public 하위 파일 전체 삭제

## 1.4 샘플 복사
* workspace/ch11-skeleton에서 실행
  ```sh
  cp -r lion-board-template/* lion-board-01/src/app
  mv lion-board-01/src/app/images lion-board-01/public
  ```

## 1.5 개발 서버 구동
* workspace/ch11-skeleton/lion-board-01에서 실행
  ```sh
  npm run dev
  ```
* 접속
  - http://localhost:3000

# 2 Step 01 - html 파일을 리액트 컴포넌트로 변환
* HTML 코드를 기반으로 리액트 컴포넌트 생성
* Next.js의 App 라우터 적용
* workspace/ch11-skeleton/lion-board-01

## 2.1 Root Layout, Root Page 개발
### 2.1.1 Root Layout 컴포넌트 작성
* src/app/index.html 파일명을 layout.tsx로 수정후 RootLayout 작성
  ```tsx
  import './globals.css';
  import Link from "next/link";
  import Image from "next/image";

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="ko">
      ...
      </html>
    );
  }
  ```

* `<script src="https://cdn.tailwindcss.com"></script>` 제거

* JSX 문법에 맞춰서 수정
  - `charset` -> `charSet`
  - `class` -> `className`

* Next.js 컴포넌트로 교체
  - `<a>` -> `<Link>`
  - `<img> ` -> `<Image>`
    + `width="32"` 추가
    + `height="32"` 추가

* 외부 이미지 로딩시 next.config.ts 설정 추가
  ```ts
  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fesp-api.koyeb.app',
          port: '',
          pathname: '/market/files/**',
        },
      ],
    },
  };

  export default nextConfig;
  ```

* 브라우저 테스트
  - http://localhost:3000

### 2.1.2 Root Page 컴포넌트 작성
* src/app/page.tsx 생성 후 RootPage 작성
  - layout.tsx의 `<main>` 영역을 잘라서 page.tsx로 이동
  - layout.tsx의 잘라낸 자리에는 `{ children }` 작성

  ```tsx
  import Link from "next/link";

  export default async function RootPage() {
    return (
      <main>
      ...
      </main>
    );
  }
  ```

* 브라우저 테스트
  - http://localhost:3000

## 2.2 나머지 Page 컴포넌트 작성
* 각 폴더의 `index.html`을 `page.tsx`로 수정후 각 페이지별 컴포넌트 작성
  - 기존 html 파일의 `<main>` 부분만 컴포넌트의 리턴값으로 추가
  - JSX 문법에 맞춰서 수정

### 2.2.1 게시글 목록 조회
* 파일명 수정
  - info/index.html -> info/page.tsx

* html 코드의 `<main>` 영역을 잘라서 ListPage의 리턴값으로 사용하고 남은 html 코드는 삭제
  ```tsx
  import Link from "next/link";

  export default async function ListPage() {
    return (
      <main>
      ...
      </main>
    );
  }
  ```

* JSX 문법에 맞춰서 수정
  - `class` -> `className`

* Next.js 컴포넌트로 교체
  - `<a>` -> `<Link>`

* 테스트
  - http://localhost:3000/info

### 2.2.2 게시글 상세 조회
* 파일명 수정
  - info/1/index.html -> info/1/page.tsx

* html 코드의 `<main>` 영역을 잘라서 InfoPage의 리턴값으로 사용하고 남은 html 코드는 삭제
  ```tsx
  import Link from "next/link";
  import Image from "next/image";

  export default async function InfoPage() {
    return (
      <main>
      ...
      </main>
    );
  }
  ```

* JSX 문법에 맞춰서 수정
  - `class` -> `className`
  - `datetime` -> `dateTime`
  - `rows="3"` -> `rows={3}`
  - `cols="40"` -> `cols={40}`

* Next.js 컴포넌트로 교체
  - `<a>` -> `<Link>`
  - `<img>` -> `<Image>`
    + `width="32"` 추가
    * `height="32"` 추가

* 테스트
  - http://localhost:3000/info/1

### 2.2.3 게시글 수정
* 파일명 수정
  - info/1/edit/index.html -> info/1/edit/page.tsx

* html 코드의 `<main>` 영역을 잘라서 EditPage의 리턴값으로 사용하고 남은 html 코드는 삭제
  ```tsx
  import Link from "next/link";

  export default async function EditPage() {
    return (
      <main>
      ...
      </main>
    );
  }
  ```

* JSX 문법에 맞춰서 수정
  - `class` -> `className`
  - `rows="15"` -> `rows={15}`
  - `value="리액트란?"` -> `defaultValue="리액트란?"`
  - `<textarea>React는 ...</textarea>` -> `<textarea defaultValue="React는 ..." />`

* Next.js 컴포넌트로 교체
  - `<a>` -> `<Link>`

* 테스트
  - http://localhost:3000/info/1/edit

### 2.2.4 게시글 작성
* 파일명 수정
  - info/new/index.html -> info/new/page.tsx

* html 코드의 `<main>` 영역을 잘라서 NewPage의 리턴값으로 사용하고 남은 html 코드는 삭제
  ```tsx
  import Link from "next/link";

  export default async function NewPage() {
    return (
      <main>
      ...
      </main>
    );
  }
  ```

* JSX 문법에 맞춰서 수정
  - `class` -> `className`
  - `for` -> `htmlFor`
  - `rows="15"` -> `rows={15}`
  
* Next.js 컴포넌트로 교체
  - `<a>` -> `<Link>`

* 테스트
  - http://localhost:3000/info/new

### 2.2.5 로그인
* 파일명 수정
  - user/login/index.html -> user/login/page.tsx

* html 코드의 `<main>` 영역을 잘라서 LoginPage의 리턴값으로 사용하고 남은 html 코드는 삭제
  ```tsx
  import Link from "next/link";

  export default async function LoginPage() {
    return (
      <main>
      ...
      </main>
    );
  }
  ```

* JSX 문법에 맞춰서 수정
  - `class` -> `className`
  - `for` -> `htmlFor`
  
* Next.js 컴포넌트로 교체
  - `<a>` -> `<Link>`

* 테스트
  - http://localhost:3000/user/login

### 2.2.6 회원가입
* 파일명 수정
  - user/signup/index.html -> user/signup/page.tsx

* html 코드의 `<main>` 영역을 잘라서 SignupPage의 리턴값으로 사용하고 남은 html 코드는 삭제
  ```tsx
  import Link from "next/link";

  export default async function SignupPage() {
    return (
      <main>
      ...
      </main>
    );
  }
  ```

* JSX 문법에 맞춰서 수정
  - `class` -> `className`
  - `for` -> `htmlFor`
  
* Next.js 컴포넌트로 교체
  - `<a>` -> `<Link>`

* 테스트
  - http://localhost:3000/user/signup

## 2.3 컴포넌트 분리
* src/components/common 폴더 생성
* 

### 2.3.1 헤더 분리
* src/components/common/Header.tsx 생성
* src/app/layout.tsx의 `<header>...</header>` 태그 복사해서 추가하고 기존 `<header>...</header>` 영역은 `<Header />` 로 교체

#### Header.tsx
```tsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-8 min-w-80 bg-slate-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 transition-color duration-500 ease-in-out">
      ...      
    </header>
  );
}
```

### 2.3.2 푸터 분리
* src/components/common/Footer.tsx 생성
* src/app/layout.tsx의 `<footer>...</footer>` 태그 복사해서 추가하고 기존 `<footer>...</footer>` 영역은 `<Footer />` 로 교체

#### Footer.tsx
```tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 pb-12 w-full border-t border-t-slate-200  dark:border-t-slate-500 dark:bg-gray-600 text-gray-600 dark:text-white transition-color duration-500 ease-in-out">
      <div className="min-w-[320px] flex flex-wrap gap-4 justify-center items-center text-sm text-slate-400">
        <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">약관</Link>
        <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">게시판 정책</Link>
        <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">회사소개</Link>
        <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">광고</Link>
        <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">마이비즈니스</Link>
        <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">제휴 제안</Link>
        <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">이용약관</Link>
        <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">개인정보취급방침</Link>
        <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">청소년보호 정책</Link>
        <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">고객센터</Link>
      </div>
    </footer>
  );
}
```

#### app/layout.tsx
```tsx
import './globals.css';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      ...
      <body className="font-sans">
        <div id="root">
          <div className="flex flex-col min-h-screen dark:bg-gray-700 dark:text-gray-200 transition-color duration-500 ease-in-out">

            <Header />

            { children }
            
            <Footer />

          </div>
        </div>
      </body>
    </html>
  );
}
```

### 2.3.3 게시물 목록 아이템별 분리
* app/info/ListItem.tsx 생성
* app/info/page.tsx에서 1번 게시글 영역 `<tr>...</tr>` 태그 복사해서 추가하고 기존 `<tr>...</tr>` 영역은 두개는 `<ListItem />` 두개로 교체

#### ListItem.tsx
```tsx
import Link from "next/link";

export default function ListItem() {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
      <td className="p-2 text-center">1</td>
      <td className="p-2 truncate indent-4"><Link href="/info/1" className="hover:text-orange-500 hover:underline">React란?</Link></td>
      <td className="p-2 text-center truncate">액션핑</td>
      <td className="p-2 text-center hidden sm:table-cell">22</td>
      <td className="p-2 text-center hidden sm:table-cell">5</td>
      <td className="p-2 truncate text-center hidden sm:table-cell">2025.06.30 17:59:13</td>
    </tr>
  );
}
```

#### app/info/page.tsx
```tsx
import ListItem from "@/app/info/ListItem";
import Link from "next/link";

export default async function ListPage() {
  return (
    ...
    <tbody>
      <ListItem />
      <ListItem />
    </tbody>
    ...
  );
}
```

### 2.3.4 댓글 목록 아이템별 분리
* app/info/1/CommentItem.tsx 생성
* app/info/1/page.tsx에서 첫번째 댓글 영역 `<div className="shadow-md rounded-lg p-4 mb-4">...</div>` 태그 복사해서 추가하고 기존 `<div>...</div>` 영역 두개는 `<CommentItem />` 두개로 교체

#### CommentList.tsx
```tsx
import Image from "next/image";
import Link from "next/link";

export default function CommentItem() {
  return (
    <div className="shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <Image
            className="w-8 mr-2 rounded-full"
            src="https://fesp-api.koyeb.app/market/files/openmarket/user-apeach.png"
            alt="어피치 프로필 이미지"
            width="32"
            height="32"
          />
          <Link href="" className="text-orange-400">어피치</Link>
        </div>
        <time className="text-gray-500" dateTime="2025.06.30 14:11:22">2025.06.30 14:11:22</time>
      </div>
      <div className="flex justify-between items-start mb-2">
        <p className="whitespace-pre-wrap text-sm flex-1">아는 내용이구만...</p>
        <form action="#" className="inline ml-2">
          <button type="submit" className="bg-red-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
        </form>
      </div>
    </div>
  );
}
```

### 2.3.5 신규 댓글 분리
* app/info/1/CommentNew.tsx 생성
* app/info/1/page.tsx에서 댓글 작성 영역 `<div className="p-4 border border-gray-200 rounded-lg">...</div>` 태그 복사해서 추가하고 기존 `<div>...</div>` 영역은 `<CommentNew />` 로 교체

#### CommentNew.tsx
```tsx
export default function CommentNew() {
  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h4 className="mb-4">새로운 댓글을 추가하세요.</h4>
      <form action="#">
        <div className="mb-4">
          <textarea
            rows={3}
            cols={40}
            className="block p-2 w-full text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="내용을 입력하세요."
            name="comment"></textarea>

          <p className="ml-2 mt-1 text-sm text-red-500">
            내용은 필수입니다.
          </p>
          
        </div>
        <button type="submit" className="bg-orange-500 py-1 px-4 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">댓글 등록</button>
      </form>
    </div>
  );
}
```

#### app/info/1/page.tsx
```tsx
...
import Link from "next/link";
import CommentItem from "@/app/info/1/CommentItem";
import CommentNew from "@/app/info/1/CommentNew";

export default async function InfoPage() {
  return (
    ...
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 2개</h4>
      <CommentItem />
      <CommentItem />

      <CommentNew />
    </section>
  );
}
```

### 2.3.6 댓글 목록 분리
* app/info/1/CommentList.tsx 생성
* app/info/1/page.tsx에서 첫번째 댓글 영역 `<section className="mb-8">...</div>` 태그 복사해서 추가하고 기존 `<section>...</div>` 영역은 `<CommentList />` 로 교체

#### CommentList.tsx
```tsx
import CommentItem from "@/app/info/1/CommentItem";
import CommentNew from "@/app/info/1/CommentNew";

export default function CommentList() {
  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 2개</h4>

      <CommentItem />
      <CommentItem />

      <CommentNew />

    </section>
  );
}
```

#### app/info/1/page.tsx
```tsx
import Link from "next/link";
import CommentList from "@/app/info/1/CommentList";

export default async function InfoPage() {
  return (
    <main className="flex-1 container mx-auto mt-4 px-4">
      <section className="mb-8 p-4">
        ...
      </section>
      <CommentList />
    </main>
  );
}
```

# 3 Step 02 - 라우트 정의

* workspace/ch11-skeleton 폴더에서 실행

  ```sh
  # lion-board-01/.next 폴더 삭제
  rm -rf lion-board-01/.next
  # lion-board-01 폴더를 복사해서 lion-board-02 폴더 생성
  cp -r lion-board-01 lion-board-02
  ```

* lion-board-02/src/components/common/Header.tsx 파일 수정
  - `라이언 보드 v.01` -> `라이언 보드 v.02`

## 3.1 동적 라우트 정의
* 폴더명 수정이 되지 않을 경우 개발 서버를 중지한 후 수정
* 테스트시 수정사항이 반영되지 않을 경우 개발 서버 재시작

### 3.1.1 게시물 상세 보기 페이지
* app/info/1 폴더명을 app/info/[_id]로 수정
* app/info/2 폴더 삭제

### 3.1.2 게시물 목록 페이지
* app/info 폴더명을 app/[type]으로 수정
* app/free 폴더 삭제

#### 게시판 링크 수정
* components/common/Header.tsx 수정

  ```tsx
  <li className="hover:text-amber-500 hover:font-semibold"><Link href="/info">정보공유</Link></li>
  <li className="hover:text-amber-500 hover:font-semibold"><Link href="/free">자유게시판</Link></li>
  <li className="hover:text-amber-500 hover:font-semibold"><Link href="/qna">질문게시판</Link></li>
  ```

#### 게시물 목록 조회 페이지에 게시판 타입별 제목 적용
* app/[boardType]/page.tsx 수정
  - 게시판 타입별 제목 적용
  - ListItem에 게시판 타입을 props로 전달

    ```tsx
    ...
    export interface ListPageProps {
      params: Promise<{
        boardType: string;
      }>;
    }

    export default async function ListPage({ params }: ListPageProps) {
      const { boardType } = await params;
      let boardTitle = '';
      switch (boardType) {
        case 'info':
          boardTitle = '정보 공유';
          break;
        case 'free':
          boardTitle = '자유 게시판';
          break;
        case 'qna':
          boardTitle = '질문 게시판';
          break;
      }

      return (
        ...
        <h2 className="pb-4 text-2xl font-bold text-gray-700 dark:text-gray-200">{ boardTitle }</h2>
        ...
        <ListItem boardType={ boardType } />
        <ListItem boardType={ boardType } />
        ...
      );
    }
    ```

* 테스트
  - 정보공유, 자유게시판, 질문게시판에 접속했을때 각각의 제목을 잘 표시하는지 확인

### 3.1.3 게시물 관련 링크 수정
#### 하드 코딩된 `info` 대신 `boardType` param 값으로 변경
* 게시물 목록 조회
  - app/[boardType]/page.tsx 수정
    + `href="/info/new"` -> ```href={`/${boardType}/new`}```
    + `href="/info?page=1"` -> ```href={`/${boardType}?page=1`}```
    + `href="/info?page=2"` -> ```href={`/${boardType}?page=2`}```

  - app/[boardType]/ListItem.tsx 수정

    ```tsx
    export default async function ListItem({ boardType }: { boardType: string }) {      
      return (
        ...
        <Link href={`/${boardType}/1`} className="hover:text-orange-500 hover:underline">React란?</Link>
        ...
      );
    }
    ```

* 게시물 상세 조회
  - app/[boardType]/[_id]/page.tsx 수정

    ```tsx
    interface InfoPageProps {
      params: Promise<{
        boardType: string;
        _id: string;
      }>;
    }

    export default async function InfoPage ({ params }: InfoPageProps) {
      const { boardType, _id } = await params;
      ...
    }
    ```

    + `action="/info"` -> ```action={`/${boardType}`}```
    + `href="/info"` -> ```href={`/${boardType}`}```
    + `href="/info/1/edit"` -> ```href={`/${boardType}/${_id}/edit`}```

* 게시물 수정
  - app/[boardType]/[_id]/edit/page.tsx 수정

    ```tsx
    interface EditPageProps {
      params: Promise<{
        boardType: string;
        _id: string;
      }>;
    }

    export default async function EditPage({ params }: EditPageProps) {
      const { boardType, _id } = await params;
    }
    ```

    + `action="/info/1"` -> ```action={`/${boardType}/${_id}`}```
    + `href="/info/1"` -> ```href={`/${boardType}/${_id}`}```

### 3.1.4 테스트
* `자유게시판`에 접속한 후 여러 버튼을 누르면서 페이지를 이동하고 다시 돌아 왔을 때 `자유게시판` 제목이 유지 되는지 확인(또는 주소창에 localhost:3000/free 가 유지 되는지 확인)
  - 자유게시판 > 글작성 > 등록
  - 자유게시판 > 글작성 > 취소
  - 자유게시판 > React란? > 목록
  - 자유게시판 > React란? > 삭제
  - 자유게시판 > React란? > 수정 > 수정 > 목록
  - 자유게시판 > React란? > 수정 > 취소 > 목록


## 3.2 라우트 그룹 정의

#### 3.2.1 로그인과 회원가입 페이지 라우트 그룹으로 지정
* app/user 폴더명을 app/(user)로 수정

#### 3.2.2 로그인, 회원가입 링크 수정
* components/common/Header.tsx 수정
  - `href="/user/login"` -> `href="/login"`
  - `href="/user/signup"` -> `href="/signup"`

* app/(user)/login/page.tsx 수정
  - `href="/user/signup"` -> `href="/signup"`
* 로그인, 회원가입 링크 테스트 

## 3.3 메타 데이터 추가
### 

## 라우팅용 특수 파일 작성

### loading

### error

### not-found

### route handler














# 2단계 - 컴포넌트 분리
* src/components/layout 폴더 생성




## LoginInfo.tsx
* src/components/common/Header.tsx에서 복사


## MainMenu.tsx



## LoginForm.tsx
* app/user/login/LoginForm.tsx
* app/user/login/page.tsx

## SignupForm.tsx
* app/user/signup/SignupForm.tsx
* app/user/signup/page.tsx





















### 에러 페이지
* 파일명 수정
  - error.html -> error.tsx

* html 코드의 `<main>` 영역을 잘라서 ErrorPage의 리턴값으로 사용하고 남은 html 코드는 삭제
  ```tsx
  export default async function ErrorPage() {
    return (
      <main>
      ...
      </main>
    );
  }
  ```

* JSX 문법에 맞춰서 수정
  - `class` -> `className`

* 테스트
  - http://localhost:3000/user/signup

























## page 개발


## page에 메타데이터 추가
### Root Layout
* app/layout.tsx 수정

  ```tsx
  export const metadata: Metadata = {
    // url 관련 metadata 설정시 사용될 기본 경로 지정
    metadataBase: new URL('"https://lion-board.vercel.app'),
  };
  ```

### 게시물 목록 조회 페이지
* src/app/[type]/index.html 참고해서 src/app/[type]/page.tsx에 추가
  ```tsx
  import { Metadata } from "next";

  export function generateMetadata({ params }: { params: { type: string } }): Metadata{
    const boardName = params.type;
    return {
      title: `${boardName} - 멋사컴`,
      description: `${boardName} 게시판입니다.`,
      openGraph: {
        title: `${boardName} - 멋사컴`,
        description: `${boardName} 게시판입니다.`,
        url: `/${params.type}`,
        images: {
          url: '/images/fesp.webp'
        }
      }
    };
  }
  ...
  ```

### 게시물 상세 조회 페이지
* src/app/[type]/[id]/index.html 참고해서 src/app/[type]/[id]/page.tsx에 추가
  ```tsx
  import { Metadata } from "next";
  export function generateMetadata({ params }: { params: { type: string, id: string } }): Metadata {
    const boardName = params.type;
    return {
      title: `${boardName} - 좋은 소식이 있습니다.`,
      description: `${boardName} - 좋은 소식을 가지고 왔습니다. 오늘 드디어...`,
      openGraph: {
        title: `${boardName} - 좋은 소식이 있습니다.`,
        description: `${boardName} - 좋은 소식을 가지고 왔습니다. 오늘 드디어...`,
        url: `/${params.type}/${params.id}`
      }
    };
  }
  ...
  ```

### 게시물 등록 페이지
* src/app/[type]/new/index.html 참고해서 src/app/[type]/new/page.tsx에 추가
  ```tsx
  import { Metadata } from "next";
  export function generateMetadata({ params }: { params: { type: string } }): Metadata {
    const boardName = params.type;
    return {
      title: `${boardName} - 게시글 등록`,
      description: `${boardName} - 게시글을 등록하세요.`,
      openGraph: {
        title: `${boardName} - 게시글 등록`,
        description: `${boardName} - 게시글을 등록하세요.`,
        url: `/${params.type}/new`
      }
    };
  }
  ...
  ```

### 게시물 수정 페이지
* src/app/[type]/[id]/edit/index.html 참고해서 src/app/[type]/[id]/edit/page.tsx에 추가
  ```tsx
  import { Metadata } from "next";
  export function generateMetadata({ params }: { params: { type: string, id: string } }): Metadata {
    const boardName = params.type;
    return {
      title: `${boardName} - 게시글 수정`,
      description: `${boardName} - 게시글을 수정하세요.`,
      openGraph: {
        title: `${boardName} - 게시글 수정`,
        description: `${boardName} - 게시글을 수정하세요.`,
        url: `/${params.type}/${params.id}/edit`
      }
    };
  }
  ...
  ```

### 회원가입 페이지
* src/app/user/signup/index.html 참고해서 src/app/user/signup/page.tsx에 추가
  ```tsx
  import { Metadata } from "next";
  export const metadata: Metadata = {
    title: '회원 가입 - 멋사컴',
    openGraph: {
      title: '회원 가입 - 멋사컴',
      description: '무료 회원 가입후 멋사컴의 모든 서비스를 이용하세요.',
      url: '/user/signup'
    }
  }
  ...
  ```

### 로그인 페이지
* src/app/user/login/index.html 참고해서 src/app/user/login/page.tsx에 추가
  ```tsx
  import { Metadata } from "next";
  export const metadata: Metadata = {
    title: '로그인 - 멋사컴',
    openGraph: {
      title: '로그인 - 멋사컴',
      description: '로그인 페이지',
      url: '/user/login'
    }
  }
  ...
  ```

## 파일 정리
* app 하위의 모든 index.html 삭제

## 컴포넌트 분리
### 전체 구조
```
src/
├── app/
│   ├── (community)/
│   │   ├── (user)/
│   │   │   │── login/
│   │   │   │   └── page.tsx
│   │   │   └── signup/
│   │   │       └── page.tsx
│   │   └── [type]/
│   │       │── [id]/
│   │       │   │── edit/
│   │       │   │   └── page.tsx
│   │       │   ├── CommentItem.tsx
│   │       │   ├── CommentList.tsx
│   │       │   ├── CommentNew.tsx
│   │       │   └── page.tsx
│   │       ├── new/
│   │       │   └── page.tsx
│   │       ├── ListItem.tsx
│   │       └── page.tsx
│   │── error.tsx
│   │── layout.tsx
│   │── loading.tsx
│   │── not-found.tsx
│   └── page.tsx
│
└── components/
    ├── layout/
    │   ├── Footer.tsx
    │   └── Header.tsx
    ├── Button.tsx
    ├── Pagination.tsx
    ├── Search.tsx
    ├── Spinner.tsx
    ├── Submit.tsx
    └── Theme.tsx
```

### 루트 레이아웃 분리


* app/layout.tsx
```tsx
import './globals.css';

import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  // url 관련 설정시 metadata 사용될 기본 경로 지정
  metadataBase: new URL('https://next.fesp.shop'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>멋쟁이 사자처럼 커뮤니티 - 멋사컴</title>

        <meta name="description" content="다양한 주제의 커뮤니티와 활발한 소통을 위한 플랫폼입니다. 관심사에 따라 참여하고, 의견을 나누세요." />
        <meta name="keywords" content="커뮤니티, 소통, 포럼, 관심사, 온라인 모임, 커뮤니티 서비스" />
        <meta name="author" content="FESP 2기" />

        <meta property="og:title" content="멋사컴에 오신걸 환영합니다." />
        <meta property="og:description" content="유용한 정보를 나누고 공유하세요." />
        <meta property="og:image" content="/images/fesp.webp" />
        <meta property="og:url" content="https://community.fesp.shop" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="멋사컴" />
      </head>
      <body>
        <div id="root">
          <div className="flex flex-col min-h-screen dark:bg-gray-700 dark:text-gray-200 transition-color duration-500 ease-in-out">
            <Header />
            { children }            
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
```

### 공통 컴포넌트 작성
#### Button
* components/Button.tsx
```tsx
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  bgColor?: 'gray' | 'orange' | 'red',
  size?: 'sm' | 'md' | 'lg',
}

const Button: React.FC<ButtonProps> = ({ children, type = 'button', bgColor = 'orange', size = 'md', ...rest }) => {
  let btnColor = {
    gray: `bg-gray-900`,
    orange: 'bg-orange-500',
    red: 'bg-red-500',
  };
  let btnSize = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-1 px-4 text-base',
    lg: 'py-2 px-6 text-lg',
  };

  return (
    <button
      type={ type }
      className={`${ btnColor[bgColor] } ${ btnSize[size] } text-white font-semibold ml-2 text-base hover:bg-amber-400 rounded`}
      { ...rest }
    >
      { children }
    </button>
  );
}

export default Button;
```

#### Submit
* components/Submit.tsx
```tsx
import Button, { ButtonProps } from '@/components/Button';

const Submit: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Button type="submit" { ...rest }>{ children }</Button>
  );
};

export default Submit;
```

#### Button, Submit 적용

##### app/(community)/[type]/[id]/page.tsx
* 적용전
```tsx
<button type="submit" className="bg-red-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
<button type="submit" className="bg-red-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
<button type="submit" className="bg-red-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
<button type="submit" className="bg-orange-500 py-1 px-4 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">댓글 등록</button>
```

* 적용후
```tsx
<Submit bgColor="red">삭제</Submit>
<Submit bgColor="red" size="sm">삭제</Submit>
<Submit bgColor="red" size="sm">삭제</Submit>
<Submit size="sm">댓글 등록</Submit>
```

##### app/(community)/[type]/[id]/edit/page.tsx
* 적용전
```tsx
<button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">수정</button>
```

* 적용후
```tsx
<Submit>수정</Submit>
```

##### app/(community)/[type]/page.tsx
* 적용전
```tsx
<button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">검색</button>
```

* 적용후
```tsx
<Submit>검색</Submit>
```

##### app/(community)/[type]/new/page.tsx
* 적용전
```tsx
<button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">등록</button>
```

* 적용후
```tsx
<Submit>등록</Submit>
```

##### app/(community)/(user)/login/page.tsx
* 적용전
```tsx
<button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">로그인</button>
```

* 적용후
```tsx
<Submit>로그인</Submit>
```

##### app/(community)/(user)/signup/page.tsx
* 적용전
```tsx
<button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">회원가입</button>
```

* 적용후
```tsx
<Submit>회원가입</Submit>
```

### 복잡한 컴포넌트 분리
#### 페이지네이션
* compoments/Pagination.tsx
```tsx
'use client';

import Link from "next/link";
import { useParams } from "next/navigation";

export default function Pagination() {
  const params = useParams();
  return (
    <div>
      <ul className="flex justify-center gap-3 m-4">
        <li className="font-bold text-blue-700">
          <Link href={`/${params.type}?page=1`}>1</Link>
        </li>
        <li>
          <Link href={`/${params.type}?page=2`}>2</Link>
        </li>
      </ul>
    </div>
  );
}
```

#### 검색
* Search.tsx
```tsx
import Submit from './Submit';

export default function Search() {
  return (
    <form action="#">
      <input
        className="dark:bg-gray-600 bg-gray-100 p-1 rounded"
        type="text"
        name="keyword"
      />
      <Submit>검색</Submit>
    </form>
  );
};
```

#### 스피너
* Spinner.tsx
```sh
npm i react-spinners
```

```tsx
'use client';

import { HashLoader, ScaleLoader } from "react-spinners";

export function FullScreen(){
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-60">
      <div className="flex flex-col items-center">
        <h3 className="mb-4 text-lg font-semibold">잠시만 기다려주세요.</h3>
        <HashLoader
          color="#f58714"
          size={60}
        />
      </div>
    </div>
  );
}

export function TargetArea(){
  return (
    <div className="flex justify-center">
      <ScaleLoader color="#F97316"/>
    </div>
  );
}
```

#### 라이트/다크 테마
* Theme.tsx
```tsx
export default function Theme() {
  return (
    <button
      type="button"
      data-toggle-dark="dark"
      className="ml-4 flex items-center w-8 h-8 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      <svg
        data-toggle-icon="moon"
        className="w-3.5 h-3.5 hidden"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 20"
      >
        <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
      </svg>
      <svg
        data-toggle-icon="sun"
        className="w-3.5 h-3.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
      </svg>
      <span className="sr-only">Toggle dark/light mode</span>
    </button>
  );
}
```

### 자식 컴포넌트 분리
#### 댓글 입력 화면
* CommentNew.tsx
```tsx
import Submit from "@/components/Submit";

export default function CommentNew() {
  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h4 className="mb-4">새로운 댓글을 추가하세요.</h4>
      <form action="#">
        <div className="mb-4">
          <textarea
            rows={3}
            cols={40}
            className="block p-2 w-full text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="내용을 입력하세요."
            name="comment"></textarea>

          <p className="ml-2 mt-1 text-sm text-red-500">
            내용은 필수입니다.
          </p>
          
        </div>
        <Submit size="sm">댓글 등록</Submit>
      </form>
    </div>
  );
}
```

#### 댓글 목록
* CommentList.tsx
```tsx
import CommentNew from "./CommentNew";
import CommentItem from "./CommentItem";

export default function CommentList() {
  const list = [<CommentItem key={1} />, <CommentItem key={2} />];
  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 2개</h4>
      { list }
      <CommentNew />
    </section>
  );
}
```

* CommentItem.tsx
```tsx
import Submit from "@/components/Submit";
import Link from "next/link";

export default function CommentItem() {
  return (
    <div className="shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <img
          className="w-8 mr-2 rounded-full"
          src="https://api.fesp.shop/files/00-sample/user-apeach.webp"
          alt="어피치 프로필 이미지"
        />
        <Link href="" className="text-orange-400">어피치</Link>
        <time className="ml-auto text-gray-500" dateTime="2024.07.02 14:11:22">2024.07.02 14:11:22</time>
      </div>
      <div className="flex justify-between items-center mb-2">
        <form action="#">
          <pre className="whitespace-pre-wrap text-sm">화이팅!</pre>
          <Submit bgColor="red" size="sm">삭제</Submit>
        </form>
      </div>
    </div>
  );
}
```

#### 게시물 목록의 아이템
* ListItem.tsx
```tsx
import Link from "next/link";

export default function ListItem() {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
      <td className="p-2 text-center">2</td>
      <td className="p-2 truncate indent-4"><Link href={`/info/1`} className="cursor-pointer">안녕하세요.</Link></td>
      <td className="p-2 text-center truncate">용쌤</td>
      <td className="p-2 text-center hidden sm:table-cell">29</td>
      <td className="p-2 text-center hidden sm:table-cell">2</td>
      <td className="p-2 truncate text-center hidden sm:table-cell">2024.07.05 13:39:23</td>
    </tr>
  );
}
```

## 활성 링크에 스타일 적용
* app/globals.css 파일에 스타일 추가
  ```css
  ...
  @layer components {
    .cs-active {
      @apply font-bold;
    }
  }
  ```

* app/layout.tsx에 추가
``` tsx
...
const pathname = usePathname();
const isActive = (path: string) => pathname === path ? 'cs-active' : '';
...

```
## loading 추가
* app/loading.tsx
```tsx
import { FullScreen } from "@/components/Spinner";

export default function Loading() {
  return <FullScreen />;
}
```

## error 추가
* app/error.tsx
```tsx
'use client';

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div className="py-20 bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg flex flex-col items-center space-y-2">
      <h2 className="text-xl font-semibold mb-2 text-center">🚧 앗, 무언가 잘못됐네요!</h2>
      <h3 className="text-md font-semibold mb-2 text-center">{ error.message }</h3>
      <p className="pt-12 text-center">이 오류는 더 나은 서비스를 위한 첫걸음이에요. 조금만 기다려 주세요!</p>
      <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600">
        ⚙️ 문제 해결하기
      </button>
    </div>
  );
}
```

## not-found 추가
* app/not-fount.tsx
```tsx
'use client';

import Link from "next/link";

export default function Error() {
  return (
    <div className="py-20 bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg flex flex-col items-center space-y-2">
      <h2 className="text-xl font-semibold mb-2 text-center">🚧 앗, 무언가 잘못됐네요!</h2>
      <h3 className="text-md font-semibold mb-2 text-center">요청하신 페이지를 찾을 수 없습니다.</h3>
      <Link href="/" className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600">
        ⚙️ 홈으로 돌아가기
      </Link>
    </div>
  );
}
```

## 공지 게시판 추가
* app/layout.tsx에 추가
```tsx
<li className={`hover:text-amber-500 a:font-semibold ${isActive('/notice')}`}><Link href="/notice">공지게시판</Link></li>
```

### 공지사항 미리 렌더링
* app/(community)/[type]/[id]/page.tsx에 추가
```tsx
export async function generateStaticParams(){
  return [
    { type: 'notice', id: '4' },
    { type: 'notice', id: '5' },
  ];
}
```
