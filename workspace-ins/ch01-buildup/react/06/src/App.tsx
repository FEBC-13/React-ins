import Header from "./components/Header";
import Todo from "./pages/Todo";
import Footer from "./components/Footer";

/*
      ┌───────── App ──────────┐
      │           │            │
    Header       Todo        Footer
                  │
              ┌───┴────┐
        TodoInput   TodoList
                        │
                    TodoItem
*/

function App(){
  return (
    <div id="todo">
      <Header />
      <Todo title="공부 목록" />
      <Todo title="쇼핑 목록" />
      <Todo title="영화 목록" />
      <Footer />
    </div>
  );
}

export default App;