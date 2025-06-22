import { Navigate, createBrowserRouter } from "react-router";

import About from '@pages/About';
import Home from '@pages/Home';
import TodoAdd from '@pages/TodoAdd';
import TodoInfo from '@pages/TodoInfo';
import TodoEdit from '@pages/TodoEdit';
import TodoList from '@pages/TodoList';
import Layout from '@components/Layout';
import ErrorPage from "@pages/ErrorPage";

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