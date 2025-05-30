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

import Reaction from '../gdlib.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Todo from './pages/Todo.js';

function App(){

  // 샘플 목록
  const initialItemList = [
    { num: 1, title: '자바스크립트 공부', done: true },
    { num: 2, title: 'JS 프로젝트', done: true },
    { num: 3, title: 'React 공부', done: false },
  ];

  const [itemList, setItemList] = Reaction.useState(initialItemList);

  let lastNum = itemList.length;

  // 할일 추가
  function addItem(title){
    console.log('할일 추가');
    const item = {
      num: itemList[itemList.length - 1].num + 1,
      title,
      done: false,
    };
    setItemList([...itemList, item]);
  }

  // 추가 버튼 클릭 이벤트 핸들러
  const handleAdd = () => {
    console.log('추가 버튼 클릭');
    const inputElem = document.querySelector('.todoinput > input');
    if(inputElem.value.trim() !== ''){
      addItem(inputElem.value);
      inputElem.value = '';
      inputElem.focus();
    }
  };

  // 엔터 이벤트 핸들러
  const handleAddKeydown = (event) => {
    console.log('keydown', event);
    if(event.key === 'Enter') handleAdd();
  };

  // 완료/미완료 처리
  function toggleDone(num){
    console.log(num, '완료/미완료');
    // const newItemList = [...itemList];
    // // TODO 데이터 갱신, itemList에서 num에 해당하는 item의 done 값을 수정
    // const selectedItem = newItemList.find(item => item.num === num);

    // // item의 done 값을 수정
    // selectedItem.done = !selectedItem.done;
    
    const newItemList = itemList.map(item => item.num === num ? { ...item, done: !item.done } : item);
    setItemList(newItemList);
  }

  // 할일 삭제
  function deleteItem(num){
    console.log('할일 삭제');
    const newItemList = itemList.filter(item => item.num !== num);
    setItemList(newItemList);
  }

  return (
    Reaction.createElement('div', { id: 'todo' }, 
      Header,
      Todo({ handleAdd, handleAddKeydown, itemList, addItem, toggleDone, deleteItem }),
      Footer
    )
  );
}

export default App;