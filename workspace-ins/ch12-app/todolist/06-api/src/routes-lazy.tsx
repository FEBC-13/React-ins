import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router";

const Layout = lazy(() => import("@components/Layout"));
const About = lazy(() => import("@pages/About"));
const ErrorPage = lazy(() => import("@pages/ErrorPage"));
const Home = lazy(() => import("@pages/Home"));
const TodoAdd = lazy(() => import("@pages/TodoAdd"));
const TodoInfo = lazy(() => import("@pages/TodoInfo"));
const TodoEdit = lazy(() => import("@pages/TodoEdit"));
const TodoList = lazy(() => import("@pages/TodoList"));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // { index: true, element: <Home /> },
      { index: true, element: <Home /> },
      { path: 'home', element: <Navigate to="/" /> },
      { path: 'about', element: <About /> },
      { path: 'list', element: <TodoList /> },
      { 
        // path: 'list/:_id/:hello/:world', // list/3/a/b => { _id: 3, hello: 'a', world: 'b' }
        path: 'list/:_id', 
        element: <TodoInfo />,
        children: [
          { path: 'edit', element: <TodoEdit /> }
        ]
      },
      { path: 'add', element: <TodoAdd /> },
    ]
  }
]);

export default router;