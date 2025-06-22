import { createBrowserRouter, Navigate } from "react-router";
import Home from "@pages/Home";
import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";
import Layout from "@components/Layout";

const router = createBrowserRouter([
  // { path: '/', element: <Navigate to="/home" /> }, 
  // { path: '/home', element: <Home /> },
  // { path: '/page1', element: <Page1 /> }, 
  // { path: '/page2', element: <Page2 /> },

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