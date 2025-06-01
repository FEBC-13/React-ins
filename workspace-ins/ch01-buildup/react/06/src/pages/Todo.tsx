import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

interface TodoProps {
  title: string;
}

function Todo({ title }: TodoProps){

  // 샘플 목록
  const initItemList = [
    { num: 1, title: '자바스크립트 공부', done: true },
    { num: 2, title: 'JS 프로젝트', done: true },
    { num: 3, title: 'React 공부', done: false },
  ];

  const [itemList, setItemList] = useState(initItemList);
  const [lastNum, setLastNum] = useState(itemList.length);

  const addItem = (title: string) => {
    const newItem = { num: lastNum+1, title, done: false };
    setItemList([...itemList, newItem]);
    setLastNum(lastNum+1);
  };

  const toggleDone = (num: number) => {
    const newItemList = itemList.map(item => item.num === num ? { ...item, done: !item.done } : item);
    setItemList(newItemList);
  };
  
  const deleteItem = (num: number) => {
    const newItemList = itemList.filter(item => item.num !== num);
    setItemList(newItemList);
  };

  return (
    <div id="main">
      <div id="container">
        <ul>
          <li>
            <h2>{ title }</h2>
            <TodoInput addItem={ addItem } />
            <TodoList itemList={ itemList } deleteItem={ deleteItem } toggleDone={ toggleDone } />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Todo;