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
      { index: true, element: <Navigate to="/home" /> }, // 인덱스 라우트: 부모 라우트와 일치될때 렌더링 되는 자식 라우트      { path: '/home', loader: () => redirect('/') },
      { path: '/home', element: <Home /> },
      { path: '/page1', element: <Page1 /> },
      { path: '/page2', element: <Page2 /> }
    ]
  }
]);

export default router;