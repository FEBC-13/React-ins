import Reaction from '../../gdlib.js';
import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';

function Todo(props){
  return (
    Reaction.createElement('div', { id: 'main' },
      Reaction.createElement('div', { id: 'container' },
        Reaction.createElement('ul', null,
          Reaction.createElement('li', null,
            Reaction.createElement('h2', null, '할일 목록'),
            TodoInput({ handleAdd: props.handleAdd, handleAddKeydown: props.handleAddKeydown, addItem: props.addItem }),
            TodoList({ itemList: props.itemList, toggleDone: props.toggleDone, deleteItem: props.deleteItem }))
        )
      )
    )
  );
}

export default Todo;