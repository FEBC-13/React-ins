// TodoItem 타입과 필요한 리액트 훅, 라우터 기능을 가져옵니다.
import type { TodoItem } from "@/pages/TodoInfo";
import TodoListItem from "@/pages/TodoListItem";
import { useEffect, useState } from "react";
import { Link } from "react-router";

// TodoList 인터페이스 정의: TodoItem 배열을 포함합니다.
interface TodoList {
  items: TodoItem[];
}

// 테스트용 더미 데이터 정의
const dummyData: TodoList = {
  items: [{
    _id: 1,
    title: '잠자기',
    done: true,
    createdAt: '2025.06.16 16:49:00',
    updatedAt: '2025.06.16 16:49:00',
  }, {
    _id: 2,
    title: '자바스크립트 복습',
    done: false,
    createdAt: '2025.06.17 16:49:00',
    updatedAt: '2025.06.17 16:49:00',
  }]
};

function TodoList() {
  // TodoList 상태 관리를 위한 useState 훅
  const [data, setData] = useState<TodoList | null>(null);

  // 할일 목록을 조회하는 함수
  const fetchData = async () => {
    console.log('목록 조회 API 호출');
    // TODO: API 서버에 목록 조회 요청
    

    // 임시로 더미 데이터를 설정 (실제로는 API 응답 데이터를 설정)
    setData(dummyData);
  }

  // 컴포넌트가 마운트될 때 데이터를 조회
  useEffect(() => {
    fetchData();
  }, []); // 빈 배열을 전달하여 마운트 시에만 실행되도록 설정

  // 할일 삭제 처리 함수
  const handleDelete = (_id: number) => {
    try{
      // TODO API 서버에 삭제 요청
      console.log('할일 삭제 API 호출', _id);
  
      alert('할일이 삭제 되었습니다.');

      // TODO API 서버에서 목록을 다시 조회

    }catch(err){
      console.error(err);
      alert('할일 삭제에 실패했습니다.');
    }
  };

  // 할일 목록 아이템을 매핑하여 컴포넌트 배열 생성
  const itemList = data?.items.map(item => <TodoListItem key={ item._id } item={ item } handleDelete={ handleDelete } />);

  // 할일 목록 UI 렌더링
  return (
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        {/* 할일 추가 페이지로 이동하는 링크 */}
        <Link to="/add">추가</Link>
        <br />
        {/* 할일 검색 폼 */}
        <form className="search">
          <input type="text" autoFocus />
          <button type="submit">검색</button>
        </form>
        {/* 할일 목록 표시 */}
        <ul className="todolist">
          { itemList }
        </ul>
      </div>
    </div>
  );
}

export default TodoList;