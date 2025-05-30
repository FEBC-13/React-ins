import { useState } from 'react';
import type { KeyboardEvent, ChangeEvent } from 'react';


interface TodoInputProps {
  addItem: (title: string) => void;
}

function TodoInput({ addItem }: TodoInputProps){
  // 리렌더링 되면 일반 input 요소의 값은 사라지므로 state로 관리
  // 사용자 입력을 다루는 경우에는 대부분 state로 관리
  const [title, setTitle] = useState('');
  console.log(title);

  const handleAdd = () => {
    addItem(title);
    setTitle('');
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="todoinput">
      <input type="text" autoFocus value={ title } onKeyDown={ handleKeydown } onChange={ (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value) } />
      <button type="button" onClick={ handleAdd }>추가</button>
    </div>
  );
}

export default TodoInput;