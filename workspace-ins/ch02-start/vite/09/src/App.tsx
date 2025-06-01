import Title from "@components/Title";
import TodoList from "@pages/todo/List";


// Title, TodoList의 부모 컴포넌트
function App(){
  const list = [
    { _id: 1, title: 'React 공부', done: false},
    { _id: 2, title: 'Javascript 프로젝트', done: true},
    { _id: 3, title: 'Javascript 공부', done: true},
  ];

  return (
    <div id="app">
      <div>
        <Title title="09 Vite로 개발 환경 구축 및 빌드, 배포" />
        <TodoList list={ list } />
      </div>
    </div>
  );
}

export default App;