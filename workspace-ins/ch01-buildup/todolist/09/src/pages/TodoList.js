import Reaction from '../../gdlib.js';
import TodoItem from './TodoItem.js';

function TodoList({ itemList, toggleDone, deleteItem }){
  return (
    Reaction.createElement('ul', { class: 'todolist' }, itemList.map(item => TodoItem({ item, toggleDone, deleteItem })))
  );
}

export default TodoList;