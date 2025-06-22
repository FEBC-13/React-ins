import useAxiosInstance from "@/hooks/useAxiosInstance";
import TodoList from "@/pages/TodoList";
import { Link } from "react-router";
import { SubmitButton } from "@/components/common/Button2";

function TodoAdd() {
  // 이전에 입력한 값이 reset() 후에도 남아있는 버그가 있어서 RC 비활성화
  'use no memo';

  const axios = useAxiosInstance();

  const addTodo = async (formData: FormData) => {
    // FormData에서 개별 값 가져오기 (이미 문자열로 반환됨)
    const title = formData.get('title');
    const content = formData.get('content');
    
    console.log('제목:', title);
    console.log('내용:', content);
    
    // TODO API 서버에 할일 추가
    try{
      const res = await axios.post('/todolist?delay=3000', formData);
      console.log(res.data);
      alert(`할일이 추가되었습니다.`);
    }catch(err){
      console.error(err);
      alert('할일 추가에 실패했습니다.');
    }
  };

  return (
    <div id="main">
      <h2>할일 추가2</h2>
      <div className="todo">
        <form action={ addTodo }>
          <label htmlFor="title">제목 :</label>
          <input 
            type="text" 
            id="title" 
            autoFocus 
            name="title"
          />
          <br />
          <label htmlFor="content">내용 :</label>
          <textarea 
            id="content" 
            cols={23} 
            rows={5}
            name="content"
          ></textarea>
          <br />
          <SubmitButton>추가</SubmitButton>
          <Link to="/list">취소</Link>
        </form>
      </div>

      {/* 할일이 추가되면 갱신을 어떻게 할 것인가? */}
      <TodoList />
    </div>
  );
}

export default TodoAdd;