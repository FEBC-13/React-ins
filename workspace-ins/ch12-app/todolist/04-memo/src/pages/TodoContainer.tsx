import { useReducer, useRef, useState } from "react";
import Todo from "@pages/Todo";
import type { TodoItem } from "@pages/TodoItem";
import TodoReducer from "@pages/TodoReducer";

function TodoContainer(){
  // 샘플 목록
  const initItemList: TodoItem[] = [
    { _id: 1, title: '자바스크립트 공부', done: true },
    { _id: 2, title: 'JS 프로젝트', done: true },
    { _id: 3, title: 'React 공부', done: false },
  ];

  // 상태가 수정되면 자동으로 화면이 리렌더링 된다.
  // const [itemList, setItemList] = useState(initItemList);

  const [itemList, itemListDispatch] = useReducer(TodoReducer, initItemList);

  const nextId = useRef(itemList[itemList.length-1]?._id + 1 || 1);

  // 할일 추가
  function addItem(title: string){
    console.log('할일 추가');
    itemListDispatch({ type: 'ADD', value: { _id: nextId.current, title, done: false } });
    nextId.current += 1;
  }

  // 완료/미완료 처리
  function toggleDone(_id: number){
    console.log(_id, '완료/미완료');
    itemListDispatch({ type: 'TOGGLE', value: { _id } });
  }

  // 할일 삭제
  function deleteItem(_id: number){
    console.log(_id, '할일 삭제');
    itemListDispatch({ type: 'DELETE', value: { _id } });
  }

  return (
    <Todo itemList={ itemList } addItem={ addItem } toggleDone={ toggleDone } deleteItem={ deleteItem } />
  );
}

export default TodoContainer;