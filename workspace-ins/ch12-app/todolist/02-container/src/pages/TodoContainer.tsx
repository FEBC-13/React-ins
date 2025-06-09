import { useState } from "react";
import Todo from "@pages/Todo";
import type { TodoItem } from "@pages/TodoItem";

function TodoContainer(){
  // 샘플 목록
  const initItemList: TodoItem[] = [
    { _id: 1, title: '자바스크립트 공부', done: true },
    { _id: 2, title: 'JS 프로젝트', done: true },
    { _id: 3, title: 'React 공부', done: false },
  ];

  // 상태가 수정되면 자동으로 화면이 리렌더링 된다.
  const [itemList, setItemList] = useState(initItemList);

  // 할일 추가
  function addItem(title: string){
    console.log('할일 추가');
    // 데이터 갱신, itemList에 item 추가
    // _id, title, done 속성을 가진 item 객체 생성
    const item: TodoItem = { _id: itemList[itemList.length-1]?._id + 1 || 1, title, done: false };
    // 객체의 불변성 유지
    setItemList([ ...itemList, item ]);
  }

  // 완료/미완료 처리
  function toggleDone(_id: number){
    console.log(_id, '완료/미완료');
    // 데이터 갱신, itemList에서 _id에 해당하는 item의 done 값을 수정
    // 객체의 불변성 유지
    const newItemList = itemList.map(item => item._id === _id ? { ...item, done: !item.done } : item);
    setItemList(newItemList);
  }

  // 할일 삭제
  function deleteItem(_id: number){
    console.log(_id, '할일 삭제');
    // 데이터 갱신, itemList에서 _id에 해당하는 item 삭제
    // 객체의 불변성 유지
    const newItemList = itemList.filter(item => item._id !== _id );
    setItemList(newItemList);
  }

  return (
    <Todo itemList={ itemList } addItem={ addItem } toggleDone={ toggleDone } deleteItem={ deleteItem } />
  );
}

export default TodoContainer;