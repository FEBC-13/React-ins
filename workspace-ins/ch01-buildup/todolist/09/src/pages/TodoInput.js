import Reaction from '../../gdlib.js';

function TodoInput({ addItem }){
  const handleAdd = () => {
    const inputElem = document.querySelector('.todoinput > input');
    if(inputElem.value.trim() !== ''){
      addItem(inputElem.value);
      inputElem.value = '';
      inputElem.focus();
    }
  };

  const handleAddKeydown = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };
  
  return (
    Reaction.createElement('div', { class: 'todoinput' },
      Reaction.createElement('input', { type: 'text', autofocus: true, onkeydown: (event) => handleAddKeydown(event) }),
      Reaction.createElement('button', { type: 'button', onclick: handleAdd }, '추가'))
  );
}

export default TodoInput;