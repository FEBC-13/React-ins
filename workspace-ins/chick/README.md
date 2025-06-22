# 🐥 Todo List - HTML에서 React로 마이그레이션 가이드

## 📝 개요
`sample.html` 파일을 기반으로 Vite + React + TypeScript 프로젝트를 생성하고, 점진적으로 컴포넌트를 분리하는 과정을 설명합니다.

## 🚀 1단계: Vite 프로젝트 생성

```bash
# 새 Vite 프로젝트 생성
npm init vite@latest todo -- --template react-ts

# 프로젝트 폴더로 이동
cd todo

# 의존성 설치
npm i
```

## 📦 2단계: 초기 App.tsx 작성 (전체 HTML 포팅)

먼저 `sample.html`의 전체 내용을 하나의 `App.tsx` 컴포넌트로 변환합니다.

```tsx
// src/App.tsx
import { useState } from 'react';
import './App.css';

interface TodoItem {
  _id: number;
  title: string;
  done: boolean;
}

function App() {
  // 샘플 데이터
  const [todoList, setTodoList] = useState<TodoItem[]>([
    { _id: 1, title: '자바스크립트 공부', done: true },
    { _id: 2, title: 'JS 프로젝트', done: true },
    { _id: 3, title: 'React 공부', done: false },
  ]);

  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo: TodoItem = {
        _id: Date.now(),
        title: inputValue,
        done: false
      };
      setTodoList([...todoList, newTodo]);
      setInputValue('');
    }
  };

  const deleteTodo = (id: number) => {
    setTodoList(todoList.filter(item => item._id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodoList(todoList.map(item => 
      item._id === id ? { ...item, done: !item.done } : item
    ));
  };

  return (
    <div id="todo">
      <header>
        <h1>Todo List - 🐤</h1>
      </header>
      <div id="main">
        <h2>할일 목록</h2>
        <div className="todoinput">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            autoFocus
          />
          <button type="button" onClick={addTodo}>추가</button>
        </div>
        <ul className="todolist">
          {todoList.map((item) => (
            <li key={item._id}>
              <span>{item._id}</span>
              <span 
                onClick={() => toggleTodo(item._id)}
                style={{ cursor: 'pointer' }}
              >
                {item.done ? <s>{item.title}</s> : item.title}
              </span>
              <button type="button" onClick={() => deleteTodo(item._id)}>
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <p>멋쟁이 사자처럼 FrontEnd BootCamp</p>
      </footer>
    </div>
  );
}

export default App;
```

## 🎨 3단계: CSS 스타일 추가

```css
/* src/App.css */
#todo {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

header {
  text-align: center;
  margin-bottom: 30px;
}

header h1 {
  color: #333;
  font-size: 2em;
}

#main h2 {
  color: #555;
  margin-bottom: 20px;
}

.todoinput {
  display: flex;
  margin-bottom: 20px;
  gap: 10px;
}

.todoinput input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.todoinput button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.todoinput button:hover {
  background-color: #0056b3;
}

.todolist {
  list-style: none;
  padding: 0;
}

.todolist li {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f8f9fa;
  border-radius: 4px;
  gap: 10px;
}

.todolist li span:first-child {
  font-weight: bold;
  color: #666;
  min-width: 30px;
}

.todolist li span:nth-child(2) {
  flex: 1;
}

.todolist li button {
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.todolist li button:hover {
  background-color: #c82333;
}

footer {
  text-align: center;
  margin-top: 40px;
  color: #666;
  font-style: italic;
}
```

## 🧩 4단계: Header 컴포넌트 분리

```tsx
// src/components/Header.tsx
interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
```

## 📝 5단계: TodoInput 컴포넌트 분리

```tsx
// src/components/TodoInput.tsx
import { useState } from 'react';

interface TodoInputProps {
  onAddTodo: (title: string) => void;
}

const TodoInput = ({ onAddTodo }: TodoInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      onAddTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="todoinput">
      <input 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
        autoFocus
        placeholder="할일을 입력하세요"
      />
      <button type="button" onClick={handleAdd}>추가</button>
    </div>
  );
};

export default TodoInput;
```

## 📋 6단계: TodoItem 컴포넌트 분리

```tsx
// src/components/TodoItem.tsx
interface TodoItemType {
  _id: number;
  title: string;
  done: boolean;
}

interface TodoItemProps {
  item: TodoItemType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ item, onToggle, onDelete }: TodoItemProps) => {
  return (
    <li>
      <span>{item._id}</span>
      <span 
        onClick={() => onToggle(item._id)}
        style={{ cursor: 'pointer' }}
      >
        {item.done ? <s>{item.title}</s> : item.title}
      </span>
      <button type="button" onClick={() => onDelete(item._id)}>
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
```

## 📝 7단계: TodoList 컴포넌트 분리

```tsx
// src/components/TodoList.tsx
import TodoItem from './TodoItem';

interface TodoItemType {
  _id: number;
  title: string;
  done: boolean;
}

interface TodoListProps {
  items: TodoItemType[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({ items, onToggle, onDelete }: TodoListProps) => {
  return (
    <ul className="todolist">
      {items.map((item) => (
        <TodoItem 
          key={item._id}
          item={item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
```

## 🦶 8단계: Footer 컴포넌트 분리

```tsx
// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer>
      <p>멋쟁이 사자처럼 FrontEnd BootCamp</p>
    </footer>
  );
};

export default Footer;
```

## 🏗️ 9단계: 타입 정의 분리

```tsx
// src/types/todo.ts
export interface TodoItem {
  _id: number;
  title: string;
  done: boolean;
}
```

## 🎯 10단계: 최종 App.tsx 리팩토링

```tsx
// src/App.tsx
import { useState } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { TodoItem } from './types/todo';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState<TodoItem[]>([
    { _id: 1, title: '자바스크립트 공부', done: true },
    { _id: 2, title: 'JS 프로젝트', done: true },
    { _id: 3, title: 'React 공부', done: false },
  ]);

  const addTodo = (title: string) => {
    const newTodo: TodoItem = {
      _id: Date.now(),
      title,
      done: false
    };
    setTodoList([...todoList, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodoList(todoList.filter(item => item._id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodoList(todoList.map(item => 
      item._id === id ? { ...item, done: !item.done } : item
    ));
  };

  return (
    <div id="todo">
      <Header title="Todo List - 🐤" />
      <div id="main">
        <h2>할일 목록</h2>
        <TodoInput onAddTodo={addTodo} />
        <TodoList 
          items={todoList}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
```

## 📁 최종 폴더 구조

```
src/
├── components/
│   ├── Header.tsx
│   ├── TodoInput.tsx
│   ├── TodoItem.tsx
│   ├── TodoList.tsx
│   └── Footer.tsx
├── types/
│   └── todo.ts
├── App.tsx
├── App.css
└── main.tsx
```

## 🏃‍♂️ 실행하기

```bash
npm run dev
```

## 📚 학습 포인트

1. **HTML to JSX 변환**: `class` → `className`, `for` → `htmlFor`
2. **상태 관리**: `useState` 훅을 사용한 데이터 관리
3. **이벤트 처리**: React의 이벤트 시스템 활용
4. **컴포넌트 분리**: 단일 책임 원칙에 따른 컴포넌트 설계
5. **Props 전달**: 부모-자식 컴포넌트 간 데이터 흐름
6. **TypeScript 활용**: 인터페이스를 통한 타입 안정성 확보

## 🚀 다음 단계 개선사항

- [ ] Context API를 사용한 전역 상태 관리
- [ ] Custom Hook으로 로직 분리
- [ ] 로컬스토리지 연동
- [ ] 필터링 기능 추가 (전체/완료/미완료)
- [ ] 애니메이션 효과 추가
- [ ] 반응형 디자인 적용 