// TodoItem 타입과 라우터 관련 훅 임포트
import type { TodoItem } from "@/pages/TodoInfo";
import { Link, useNavigate, useOutletContext } from "react-router";

// Outlet context의 타입 정의 - TodoItem을 포함하는 인터페이스
interface OutletContextProps {
  item: TodoItem;
}

function TodoEdit() {
  // Outlet 컴포넌트의 context 속성에 전달되는 값 추출
  const { item } = useOutletContext<OutletContextProps>();

  // 프로그래밍 방식의 페이지 이동을 위한 네비게이션 훅
  const navigate = useNavigate();

  // 할일 수정 폼 제출 시 실행되는 이벤트 핸들러
  const editTodo = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('할일 수정 API 호출', item._id);

    try{
      // 폼의 기본 제출 동작 방지
      event.preventDefault();      
  
      // TODO API 서버에 수정 요청

      // 수정 성공 메시지 표시
      alert('할일이 수정 되었습니다.');

      // 할일 상세보기로 이동
      // navigate('..', { relative: true }); // 상대 경로로 이동
      // navigate(`/list/${ item._id }`, { replace: true }); // window.history.replaceState()
      navigate(-1); // window.history.go(-1)
    }catch(err){
      // 에러 발생 시 처리
      console.error(err);
      alert('할일 수정에 실패했습니다.');
    }
  };
  return (
    <>
      <h2>할일 수정</h2>
      <div className="todo">
        {/* 할일 수정을 위한 폼 */}
        <form onSubmit={ editTodo }>
          {/* 할일 제목 입력 필드 */}
          <label htmlFor="title">제목 :</label>
          <input type="text" id="title" defaultValue={ item.title } autoFocus />
          <br />
          {/* 할일 내용 입력을 위한 텍스트 영역 */}
          <label htmlFor="content">내용 :</label>
          <textarea id="content" cols={23} rows={5} defaultValue={ item.content }></textarea>
          <br />
          {/* 할일 완료 상태 체크박스 */}
          <label htmlFor="done">완료 :</label>
          <input type="checkbox" id="done" defaultChecked={ item.done } />
          <br/>
          {/* 수정 확인 버튼과 취소 링크 */}
          <button type="submit">수정</button>
          <Link to={`/list/${ item._id }`}>취소</Link>
        </form>
      </div>
    </>
  );
}

export default TodoEdit;