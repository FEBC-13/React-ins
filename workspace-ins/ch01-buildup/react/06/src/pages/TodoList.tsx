import TodoItem from './TodoItem';
import type { TodoItem as TodoItemType } from './TodoItem';

interface TodoListProps {
  itemList: TodoItemType[];
  deleteItem: (num: number) => void;
  toggleDone: (num: number) => void;
}

function TodoList({ itemList, deleteItem, toggleDone }: TodoListProps){
  const list = itemList.map(item => <TodoItem key={ item.num } item={ item } deleteItem={ deleteItem } toggleDone={ toggleDone } />);
  return (
    <ul className="todolist">
      { list }
    </ul>
  );
}

export default TodoList;