import TodoInput from "@pages/TodoInput";
import type { TodoItem } from "@pages/TodoItem";
import TodoList from "@pages/TodoList";

interface TodoProps {
  addItem: (title: string) => void;
  itemList: TodoItem[];
  toggleDone: (_id: number) => void;
  deleteItem: (_id: number) => void;
}

function Todo({ addItem, itemList, toggleDone, deleteItem }: TodoProps){
  return (
    <div id="main">
      <div id="container">
        <ul>
          <li>
            <h2>할일 목록</h2>
            <TodoInput addItem={ addItem } />
            <TodoList itemList={ itemList } toggleDone={ toggleDone } deleteItem={ deleteItem } />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Todo;