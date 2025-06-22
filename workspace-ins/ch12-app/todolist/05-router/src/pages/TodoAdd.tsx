import { useForm } from "react-hook-form";
import { Link } from "react-router";

// 할일 추가 폼 데이터 타입 정의
interface TodoAddForm {
  title: string;
  content: string;
}

function TodoAdd() {
  // useForm 훅을 사용하여 폼 관련 기능들을 가져옴
  // register: 입력 필드 등록
  // handleSubmit: 폼 제출 처리
  // setFocus: 특정 필드에 포커스 설정
  // reset: 폼 초기화
  // errors: 유효성 검사 오류 정보
  const { register, handleSubmit, setFocus, reset, formState: { errors } } = useForm<TodoAddForm>();

  // 할일 추가 처리 함수
  const addTodo = (formData: TodoAddForm) => {
    console.log(formData);
    // TODO API 서버에 할일 추가 요청

    alert(`할일이 추가되었습니다.`);
    // 폼 초기화 및 제목 필드로 포커스 이동
    reset();
    setFocus('title');
  };

  return (
    <div id="main">
      <h2>할일 추가</h2>
      <div className="todo">
        {/* 폼 제출 시 addTodo 함수 실행 */}
        <form onSubmit={ handleSubmit(addTodo) }>
          <label htmlFor="title">제목 :</label>
          {/* 제목 입력 필드 - 필수 입력 및 공백만 입력 불가 */}
          <input 
            type="text" 
            id="title" 
            autoFocus 
            { ...register('title', {
              required: '제목을 입력하세요.',
              pattern: {
                value: /\S/,
                message: '제목에 공백만 입력할 수 없습니다.'
              }
            }) }
          />
          {/* 제목 입력 오류 메시지 표시 */}
          <div className="input-error">{ errors.title?.message }</div>
          <br />
          <label htmlFor="content">내용 :</label>
          {/* 내용 입력 필드 - 필수 입력 및 공백만 입력 불가 */}
          <textarea 
            id="content" 
            cols={23} 
            rows={5}
            { ...register('content', {
              required: '내용을 입력하세요.',
              pattern: {
                value: /\S/,
                message: '내용에 공백만 입력할 수 없습니다.'
              }
            }) }
          ></textarea>
          {/* 내용 입력 오류 메시지 표시 */}
          <div className="input-error">{ errors.content?.message }</div>
          <br />
          <button type="submit">추가</button>
          <Link to="/list">취소</Link>
        </form>
      </div>
    </div>
  );
}

export default TodoAdd;