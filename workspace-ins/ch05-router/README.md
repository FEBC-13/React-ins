# 5장 리액트 라우터
* 코드 실행(GitHub Page): <https://febc-13.github.io/React/workspace-ins/index.html#05>

# 1. 클라이언트 측 라우팅이란?

## 1.1 전통적인 웹의 페이지 이동
### 1.1.1 최초 웹 서버 접속
1. 브라우저가 웹 서버에 HTML 문서를 요청
2. 웹 서버는 브라우저의 요청을 분석하고 필요한 작업을 수행 한 후 완성된 HTML 파일을 응답
3. 브라우저는 웹 서버로부터 받은 HTML 코드를 파싱
4. HTML 파싱 중 추가 리소스(css, js, 이미지 등)가 필요하면 웹 서버에 추가로 요청해서 완성된 화면을 렌더링

### 1.1.2 페이지 이동
5. 사용자가 HTML 요소 내의 링크를 클릭하면 현재 화면을 비운 후 1~4번 까지의 작업이 다시 수행되면서 새로운 화면으로 이동(새로고침이 발생) 
  - 브라우저의 주소창에는 새로운 URL이 표시되고
  - 이전 URL은 브라우저의 히스토리에 쌓이며
  - 이 히스토리 정보를 이용해서 이전/다음 페이지 이동이 가능(브라우저에서 기본으로 제공됨)

## 1.2 리액트(SPA)의 페이지 이동
### 1.2.1 최초 웹 서버 접속
1. 브라우저가 웹 서버에 HTML 문서를 요청
2. 웹 서버는 빈 초기 페이지를 즉시 응답(index.html)
3. 브라우저는 웹 서버로부터 받은 HTML 코드를 파싱
4. HTML 파싱 중 추가 리소스(css, js, 이미지 등)가 필요하면 웹 서버에 추가로 요청해서 자바스크립트를 실행 하고 자바스크립트에 의해 완성된 화면을 렌더링

### 1.2.2 페이지 이동
5. 사용자가 HTML 요소 내의 링크를 클릭하면 4번에서 다운로드 받은 자바스크립트를 이용해 새로운 컴포넌트를 렌더링
  - 최초에 다운로드 받은 자바스크립트 파일에 페이지 렌더링에 필요한 모든 컴포넌트가 포함되어 있음
  - 최초 웹 서버에 접속한 후 필요한 모든 파일을 다운로드 했기 때문에 더이상 웹 서버에 페이지 요청을 보내지 않음
  - 브라우저의 주소창에 새로운 URL을 표시하고 이전 URL은 브라우저의 히스토리에 쌓이도록 자바스크립트로 구현해야 함(클라이언트 라우팅)

# 2. 리액트 라우터란?
* 리액트 기반의 강력한 라우팅 라이브러리
* 화면에 렌더링하는 컴포넌트와 URL 경로를 동기화 하면서 새로운 화면과 흐름을 애플리케이션에 추가할 수 있는 클라이언트 라우팅 기능 제공

## 2.1 패키지 설치
```sh
npm i react-router
```

# 3. 리액트 라우터가 제공하는 라우터
* 참고: https://reactrouter.com/home

## 3.1 BrowserRouter
- History API를 사용해 URL과 UI를 동기화
- 브라우저의 history 스택 관리로 이전/다음 페이지 이동 가능
- 모든 URL 요청에 대해 초기페이지(index.html)를 응답하도록 서버 구현 필요
- 일반 웹 애플리케이션에서 사용하기 적합

### 사용 예시
* routes.tsx
  ```tsx
  import { createBrowserRouter } from "react-router";
  import Home from "@pages/Home";
  import Page1 from "@pages/Page1";
  import Page2 from "@pages/Page2";

  const router = createBrowserRouter([
    { path: '/home', element: <Home /> },
    { path: '/page1', element: <Page1 /> }, 
    { path: '/page2', element: <Page2 /> },
  ]);

  export default router;
  ```

* App.tsx
  ```tsx
  import { RouterProvider } from 'react-router';
  import router from './routes';

  function App() {
    return (
      <>
        <RouterProvider router={ router } />
      </>
    );
  }

  export default App;
  ```

## 3.2 HashRouter
- URL에 해시(#)를 추가해서 라우팅 하며 서버에 요청하는 URL은 항상 초기페이지(index.html)가 됨
- 서버에서 모든 URL 요청에 대해 초기페이지를 응답할 수 없는 환경에서 사용

## 3.2 MemoryRouter
- 메모리에 라우팅 정보를 저장하고 주소창은 항상 초기페이지 표시
- 이전/다음 페이지 이동 기능 없음
- 하이브리드 앱 등 history 정보가 필요 없는 환경에서 사용

## 3.4 NativeRouter
* React Native 앱에서 사용

## 3.5 StaticRouter
* Node.js에서 웹 앱을 렌더링하는데 사용

# 4. 리액트 라우터가 제공하는 컴포넌트

## 4.1 Link
* 사용자가 클릭해서 다른 페이지로 이동할 수 있게 `<a>` 요소를 렌더링 해주는 컴포넌트
* 주요 속성
  - to: 이동할 URL 지정
  - replace?: `true`로 지정할 경우 history 스택에 추가하지 않고 현재 스택을 교체
  - state?: 이동할 컴포넌트에 추가 데이터 전달

### 사용 예시
* Header.tsx
  ```tsx
  import { Link } from "react-router";

  function Header() {
    return (
      <header>
        <h1>02 리액트 라우터 사용</h1>
        <Link to="/home">home</Link><br/>
        <Link to="/page1">page1</Link><br/>
        <Link to="/page2">page2</Link>
      </header>
    );
  }

  export default Header;
  ```

## 4.2 NavLink
* `<Link>` 컴포넌트에 추가 기능 제공
* `className`, `style` 속성에 함수를 정의하면 현재 URL이 `<NavLink>`의 `to` 속성과 일치하는 경우 true, 일치하지 않으면 false를 인자로 함수가 호출되므로 URL 매칭 여부에 따라서 각각 다른 스타일 적용 가능

### 사용 예시
* Header.tsx
  ```tsx
  import { Link, NavLink } from "react-router";

  function Header() {
    return (
      <header>
        <h1>02 리액트 라우터 사용</h1>
        <NavLink className={({ isActive }) => isActive ? 'menu-dark' : 'menu'} to="/home">home</NavLink><br/>
        <NavLink className={({ isActive }) => isActive ? 'menu-dark' : 'menu'} to="/page1">page1</NavLink><br/>
        <NavLink className={({ isActive }) => isActive ? 'menu-dark' : 'menu'} to="/page2">page2</NavLink>
      </header>
    );
  }

  export default Header;
  ```

## 4.3 Navigate
* 요청한 URL 대신 다른 경로로 이동시킬 경우 `<Navigate>` 컴포넌트 사용

### 사용 예시
* routes.tsx
  ```tsx
  { path: '/', element: <Navigate to="/home" /> },
  { path: '/home', element: <Home /> },
  ```

# 5. 리액트 라우터가 제공하는 기능
## 5.1 동적 세그먼트
* URL 파라미터: URL 경로에 매번 바뀌는 동적인 값이 포함되면 컴포넌트에서는 URL 파라미터를 통해 이 값을 전달받을 수 있음

### 사용 예시
* routes.tsx
  ```tsx
  { path: 'list/:_id', element: <TodoInfo /> }
  ```

* TodoInfo.tsx
  ```tsx
  import { useParams } from 'react-router';

  function TodoInfo() {
    const { _id } = useParams();
    // ...
  }
  ```

## 5.2 중첩 라우트 (nested route)
* Route 컴포넌트 내부에 자식 Route 컴포넌트를 포함
* 부모 컴포넌트와 매칭 되는 경우 부모 컴포넌트를 렌더링 하고 하위 경로가 자식 컴포넌트와 매칭되면 추가적으로 자식 컴포넌트도 렌더링
* 부모 컴포넌트에는 자식 컴포넌트가 렌더링될 영역에 `<Outlet>` 컴포넌트 추가

### 사용 예시
* `list/3` 요청에는 `<TodoInfo>`이 렌더링 되고 수정 링크를 누르면 주소가 `list/3/edit` 형태로 바뀌면서 `list/3/edit`에 매칭되는 자식 컴포넌트가 `<Outlet>` 컴포넌트 영역에서 추가로 렌더링 됨

* routes.tsx
  ```tsx
  { 
    path: 'list/:_id',
    element: <TodoInfo />,
    children: [
      { path: 'edit', element: <TodoEdit /> }
    ]
  }
  ```

* TodoInfo.tsx
  ```tsx
  import { Link, Outlet } from 'react-router';

  function TodoInfo() {
    return (
      <>
        <h2>할일 상세 보기</h2>
        <Link to="/list/1/edit">수정</Link>
        <Link to="/list">목록</Link>
        <Outlet />
      </>
    );
  };

  export default TodoInfo;
  ```

* TodoEdit.tsx
  ```tsx
  function TodoEdit() {
    return (
      <h2>할일 수정</h2>
    );
  }

  export default TodoEdit;
  ```

## 5.3 index 라우트
* URL이 부모 컴포넌트의 URL과 일치할 경우 기본으로 렌더링 할 자식 라우트 지정

### 사용 예시
```tsx
{
  path: '/',
  element: <Layout />,
  children: [
    { index: true, element: <Home /> },
    { path: 'home', element: <Navigate to="/" /> },
    { path: 'about', element: <About /> },
  ]
}
```

## 5.4 fallback UI와 404 라우트

### 5.4.1 fallback UI
* 리액트는 SPA(Single Page Application) 개발을 위해 사용되는 라이브러리 이므로 모든 페이지 구성 요소(js, css)가 번들링 된 후 하나의 시작 페이지에 포함됨(index.html)
* 사용자가 시작 페이지부터 순차적으로 리액트 라우터에 의해 라우팅 하지 않고 웹브라우저 주소창에 `list/3` 처럼 URL을 직접 입력할 경우 서버측에는 `list/3` URL이 존재하지 않으므로 일반적으로 404 에러 메세지를 보내지만 SPA를 서비스하는 웹서버라면 모든 URL 요청에 시작 페이지를(index.html) 전송하도록 구성해야 리액트 라우터에 의해 해당 페이지로 라우팅 되는데 이를 fallback UI라고 함

#### Vite 기반으로 개발할 경우 fallback UI 지정 예시
* Vite의 개발 서버에 기본으로 fallback UI가 지정되어 있음
* vite.config.js
  ```js
  appType: 'mpa', // fallback UI 사용 안함
  appType: 'spa', // fallback UI 사용(기본)
  ```

### 5.4.2 에러 처리 전용 라우트
* 요청한 URL과 일치하는 라우터가 없을 경우 보여줄 컴포넌트 지정(404 에러 처리)
* 리액트 라우터 작업 중 오류 발생시 보여줄 컴포넌트 지정
* errorElement 속성으로 사용

#### 사용 예시
* routes.tsx
  ```tsx
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    ...
  }
  ```

* ErrorPage.tsx
  ```tsx
  function ErrorPage(){
    return (
      <div>
        <h2>에러 발생</h2>
        <p>잠시후 다시 이용해 주세요.</p>
      </div>
    );
  }
  export default ErrorPage;
  ```

# 6. 리액트 라우터가 제공하는 Hook

## 6.1 useRouteError
* 에러처리 전용 라우트에 제공되는 Error 객체를 반환

### 사용 예시
* ErrorPage.tsx
  ```tsx
  import { isRouteErrorResponse, useRouteError } from "react-router";

  function ErrorPage() {
    const err = useRouteError();
    let message = '예상하지 못한 에러가 발생했습니다.';
    if(isRouteErrorResponse(err)) {
      if(err.status === 404) {
        message = '존재하지 않는 페이지입니다.';
      }
    }
    
    return (
      <div id="main">
        <div className="todo">
          <h2>에러 발생</h2>
          <p>{ message }</p>
        </div>
      </div>
    );
  }

  export default ErrorPage;
  ```

## 6.2 useParams
* URL 파라미터 값을 꺼낼 때 사용

### 사용 예시
* routes.tsx
  ```tsx
  { 
    path: 'list/:_id',
    element: <TodoInfo />
  }
  ```

* TodoInfo.tsx
  ```tsx
  // URL이 list/3일 때 useParams()는 { _id: 3 }을 반환
  const params = useParems();
  const _id = params._id;
  // 또는
  const { _id } = useParams();
  ```

## 6.3 useMatch
* 현재 요청된 URL 경로가 인자로 전달한 경로 패턴과 매칭되는지 확인 후 PathMatch 객체를 반환
* PathMatch의 속성
  - params: URL 파라미터
  - pathname: 요청된 경로
  - pattern: 요청된 경로 패턴

### 사용 예시
* TodoInfo.tsx
  ```tsx
  import { Link, Outlet, useMatch } from "react-router";

  const TodoInfo = function(){
    const infoMatch = useMatch('/list/:_id');

    return (
      <div id="main">
        <h2>할일 상세 보기</h2>

        { item && 
          <>
            <div className="todo">
              <div>제목 : { item.title }</div>
              <div>내용 : { item.content }</div>
              <div>상태 : { item.done ? '완료' : '미완료' }</div>
              <div>작성일 : { item.createdAt }</div>
              <div>수정일 : { item.updatedAt }</div>

              { infoMatch && // 상세보기 화면에서만 노출
                <>
                  <Link to={`/list/${ item._id }/edit`}>수정</Link> 
                  <Link to="/list">목록</Link>
                </>
              }
              
            </div>
            <Outlet context={{ item }} />
          </>
        }
        
      </div>
    );
  }
  ```

## 6.4 useSearchParams
* 쿼리 스트링(URL에 포함된 ? 뒷부분) 정보를 읽거나 설정하는데 사용

### 사용 예시
* Pagination.tsx
  ```tsx
  // list?page=2 요청시
  const [ searchParams, setSearchParams ] = useSearchParams();
  const page = Number(searchParams.get('page') || 1);
  // 다음 페이지로 이동
  searchParams.set('page', (page+1).toString());
  setSearchParams(searchParams);
  ```

## 6.5 useNavigate
* 페이지를 이동할 수 있는 navigate 함수 반환

### 사용 예시
* TodoEdit.tsx
  ```tsx
  const navigate = useNavigate();
  // navigate(to, options)
  navigate('/', { state: { from: '/list' } }); // history.pushState({ from: '/list' }, '', '/')
  navigate('/list?keyword=hello', { replace: true }); // history.replaceState(null, '', '/list?keyword=hello')
  navigate('..', { relative: 'path' }); // 상대경로 지정
  navigate(-1); // window.history.back(-1)
  ```

## 6.6 useLocation
* 요청된 URL 정보를 담고 있는 location 객체 반환

### location 객체의 속성
* pathname: 현재 요청된 경로
* search: 쿼리 문자열
* state: navigate()로 이동할 때 전달된 state 객체

### 사용 예시
```tsx
const location = useLocation();
const state = location.state;
```

## 6.7 useOutletContext
* 중첩 라우팅에서 부모가 Outlet 컴포넌트의 context 속성으로 전달한 값을 자식 컴포넌트에서 꺼낼때 사용

### 사용 예시
* routes.tsx
  ```tsx
  { 
    path: 'list/:_id', 
    element: <TodoInfo />,
    children: [
      { path: 'edit', element: <TodoEdit /> }
    ]
  }
  ```

* TodoInfo.tsx
  ```tsx
  <Outlet context={{ item }} />
  ```

* TodoEdit.tsx
  ```tsx
  interface OutletContextProps {
    item: TodoItem;
  }

  function TodoEdit() {
    const { item } = useOutletContext<OutletContextProps>();
    ...
  }
  ```

# 7. 레이지 로딩 (lazy loading)
* SPA는 하나의 시작 페이지(index.html)와 모든 컴포넌트를 포함하는 하나 또는 몇 개의 큰 js 파일, 모든 CSS를 포함한 하나 또는 몇 개의 큰 CSS 파일로 구성됨
* 첫 페이지를 접근할 때 번들링된 큰 파일을 로딩하면 초기 로딩 속도가 느려짐
* 레이지 로딩을 적용할 경우 초기 페이지에 필요한 js만 로딩하고 다른 js 파일은 해당 URL에 접근할때 추가로 서버에서 다운 받을 수 있어서 초기 로딩 속도 개선에 도움이 됨
* 컴포넌트에서 동적 import를 사용하면 번들링 시 해당 컴포넌트는 따로 js 파일로 생성됨

## 사용 예시
* routes.tsx
  ```tsx
  import { lazy } from "react";
  import { createBrowserRouter, Navigate } from "react-router";

  // 정적 import (번들링 시 컴포넌트가 포함됨)
  import Layout from "@components/Layout";

  // 동적 import(해당 컴포넌트가 필요한 시점에 다운받음)
  const Home = lazy(() => import("@pages/Home"));
  const Page1 = lazy(() => import("@pages/Page1"));
  const Page2 = lazy(() => import("@pages/Page2"));

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="/home" /> },
        { path: '/home', element: <Home /> },
        { path: '/page1', element: <Page1 /> },
        { path: '/page2', element: <Page2 /> }
      ]
    }
  ]);

  export default router;
  ```

# 8. React.Suspense 컴포넌트
* 동적 import를 사용하면 해당 컴포넌트는 서버에서 네트워크를 통해 가져오기 때문에 지연시간이 발생할 수 있음
* 사용자에게 로딩중임을 나타내는 적절한 UI 필요
* Suspense 컴포넌트를 이용하면 쉽게 구현 가능

## 사용 사례
```tsx
import { Suspense } from "react";
import { RouterProvider } from "react-router";
import router from "./routes";

function App() {
  return (
    <Suspense fallback={ <div>Loading...</div> }>
      <RouterProvider router={ router } />
    </Suspense>
  );
};

export default App;
```

# 9. 라우터가 적용된 프로젝트 구조
* 유지보수성과 확장성을 고려한 리액트 라우터 프로젝트 구조 권장사항

## 폴더 구조
```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── common/          # 공통 컴포넌트
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── ui/              # UI 컴포넌트
│   │   ├── Button.tsx
│   │   └── Modal.tsx
├── pages/               # 페이지 컴포넌트
│   ├── home/
│   │   ├── Home.tsx
│   │   └── About.tsx
│   ├── auth/
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   ├── todo/
│   │   ├── TodoList.tsx
│   │   ├── TodoInfo.tsx
│   │   ├── TodoEdit.tsx
│   └── error/
│       ├── NotFound.tsx
│       └── ErrorPage.tsx
├── routes/              # 라우팅 설정
│   ├── index.ts         # 메인 라우터
│   ├── authRoutes.ts    # 인증 관련 라우트
│   ├── todoRoutes.ts    # Todo 관련 라우트
│   └── adminRoutes.ts   # 관리자 라우트
├── contexts/            # Context API
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx
├── hooks/               # 커스텀 훅
│   ├── useAxios.ts
│   ├── useAuth.ts
│   └── useLocalStorage.ts
├── utils/               # 유틸리티 함수
│   ├── api.ts
│   └── constants.ts
├── types/               # 타입 정의
│   ├── auth.ts
│   ├── todo.ts
│   └── routes.ts
└── App.tsx
```

# 10. React.Suspense 컴포넌트 심화

## 10.1 Suspense의 동작 원리
* Suspense는 **Promise Throwing 메커니즘**을 통해 비동기 작업을 감지
* 하위 컴포넌트에서 Promise를 throw하면 Suspense가 이를 catch하여 fallback UI 표시

### Promise Throwing 예시
```tsx
function AsyncComponent() {
  const data = fetchData(); // Promise를 throw할 수 있는 함수
  return <div>{data}</div>;
}

function fetchData() {
  if (!cache.has('data')) {
    const promise = api.getData().then(data => {
      cache.set('data', data);
    });
    throw promise; // Suspense가 이 Promise를 catch함
  }
  return cache.get('data');
}
```

## 10.2 에러 바운더리와의 차이점
* **에러 바운더리**: JavaScript 에러를 catch하여 에러 UI 표시
* **Suspense**: Promise를 catch하여 로딩 UI 표시
* 함께 사용하여 완전한 비동기 처리 구현 가능

```tsx
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary fallback={<div>에러가 발생했습니다.</div>}>
      <Suspense fallback={<div>로딩 중...</div>}>
        <AsyncComponent />
      </Suspense>
    </ErrorBoundary>
  );
}
```

## 10.3 중첩 Suspense 패턴
* 여러 레벨의 Suspense를 사용하여 세밀한 로딩 제어 가능
* 가장 가까운 상위 Suspense가 먼저 활성화됨

```tsx
function App() {
  return (
    <Suspense fallback={<div>전체 앱 로딩 중...</div>}>
      <Header />
      <main>
        <Suspense fallback={<div>메인 콘텐츠 로딩 중...</div>}>
          <MainContent />
          <Suspense fallback={<div>사이드바 로딩 중...</div>}>
            <Sidebar />
          </Suspense>
        </Suspense>
      </main>
    </Suspense>
  );
}
```

## 10.4 React 18의 새로운 기능

### 10.4.1 use() 훅 (실험적 기능)
* Promise와 Context를 직접 다룰 수 있는 새로운 훅
* Suspense와 자연스럽게 통합됨

```tsx
import { use } from 'react';

function UserProfile({ userId }) {
  // use() 훅이 내부적으로 Promise throwing 처리
  const user = use(fetchUser(userId));
  return <div>{user.name}</div>;
}
```

### 10.4.2 선택적 하이드레이션 (Selective Hydration)
* SSR에서 일부 컴포넌트만 먼저 하이드레이션하고 나머지는 필요할 때 처리
* 사용자 상호작용이 있는 부분을 우선적으로 하이드레이션

```tsx
// 서버에서 HTML로 렌더링되지만 클라이언트 하이드레이션은 지연
<Suspense fallback={<div>하이드레이션 중...</div>}>
  <HeavyComponent />
</Suspense>
```

## 10.5 성능 최적화 전략

### 10.5.1 리소스 프리로딩
```tsx
const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  useEffect(() => {
    // 사용자 상호작용 전에 미리 로딩
    const preload = () => import('./LazyComponent');
    
    // 마우스 호버 시 프리로딩
    document.getElementById('button')
      ?.addEventListener('mouseenter', preload);
  }, []);

  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      {showComponent && <LazyComponent />}
    </Suspense>
  );
}
```

### 10.5.2 점진적 로딩
```tsx
// 중요도에 따라 단계별로 로딩
function ProgressiveApp() {
  return (
    <Suspense fallback={<AppSkeleton />}>
      <CoreFeatures />
      <Suspense fallback={<div>추가 기능 로딩 중...</div>}>
        <AdditionalFeatures />
      </Suspense>
    </Suspense>
  );
}
```

## 10.6 데이터 페칭과의 연동
* 전통적인 useState/useEffect 패턴 대신 Suspense 기반 데이터 페칭 사용 권장
* React Query, SWR 등의 라이브러리들이 Suspense를 지원

```tsx
// React Query와 Suspense 연동
function UserList() {
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    suspense: true // Suspense 모드 활성화
  });

  return (
    <ul>
      {data.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

function App() {
  return (
    <QueryClient client={queryClient}>
      <Suspense fallback={<div>사용자 목록 로딩 중...</div>}>
        <UserList />
      </Suspense>
    </QueryClient>
  );
}
```

## 10.7 주의사항 및 Best Practices

### 10.7.1 주의사항
* Suspense는 클래스 컴포넌트의 생명주기 메서드에서 사용 불가
* 컴포넌트 내부에서 try-catch로 Promise를 catch하면 Suspense가 동작하지 않음
* Suspense 경계 내의 모든 컴포넌트가 준비될 때까지 fallback이 표시됨

### 10.7.2 Best Practices
```tsx
// ✅ 좋은 예: 의미있는 로딩 메시지
<Suspense fallback={<UserProfileSkeleton />}>
  <UserProfile />
</Suspense>

// ❌ 나쁜 예: 너무 일반적인 로딩 메시지
<Suspense fallback={<div>Loading...</div>}>
  <UserProfile />
</Suspense>

// ✅ 좋은 예: 적절한 Suspense 경계 설정
<Suspense fallback={<HeaderSkeleton />}>
  <Header />
</Suspense>
<Suspense fallback={<ContentSkeleton />}>
  <MainContent />
</Suspense>

// ❌ 나쁜 예: 너무 큰 Suspense 경계
<Suspense fallback={<div>전체 페이지 로딩 중...</div>}>
  <Header />
  <MainContent />
  <Sidebar />
  <Footer />
</Suspense>
```

### 10.7.3 접근성 고려사항
```tsx
// 스크린 리더를 위한 aria-live 속성 추가
<Suspense fallback={
  <div aria-live="polite" role="status">
    콘텐츠를 불러오는 중입니다...
  </div>
}>
  <AsyncContent />
</Suspense>
```

