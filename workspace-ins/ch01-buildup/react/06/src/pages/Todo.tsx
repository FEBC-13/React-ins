import TodoInput from "./TodoInput";
import type { TodoItem } from "./TodoItem";
import TodoList from "./TodoList";

interface TodoProps {
  itemList: TodoItem[];
  addItem: (title: string) => void;
  deleteItem: (num: number) => void;
  toggleDone: (num: number) => void;
}

function Todo({ itemList, addItem, deleteItem, toggleDone }: TodoProps){
  return (
    <div id="main">
      <div id="container">
        <ul>
          <li>
            <h2>쇼핑 목록</h2>
            <TodoInput addItem={ addItem } />
            <TodoList itemList={ itemList } deleteItem={ deleteItem } toggleDone={ toggleDone } />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Todo;