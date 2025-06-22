import useAxiosInstance from "@/hooks/useAxiosInstance";
import TodoList from "@/pages/TodoList";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import type { TodoItem } from "@/pages/TodoInfo";
import { SubmitButton } from "@/components/common/Button";

type TodoAddForm = Pick<TodoItem, 'title' | 'content'>;

function TodoAdd() {
  // 이전에 입력한 값이 reset() 후에도 남아있는 버그가 있어서 RC 비활성화
  'use no memo';

  const axios = useAxiosInstance();

  const { register, handleSubmit, setFocus, reset, formState: { errors, isSubmitting } } = useForm<TodoAddForm>();

  const addTodo = async (formData: TodoAddForm) => {
    console.log(formData);
    // TODO API 서버에 할일 추가
    try{
      const res = await axios.post('/todolist?delay=3000', formData);
      console.log(res.data);
      alert(`할일이 추가되었습니다.`);
      reset();
      setFocus('title');
    }catch(err){
      console.error(err);
      alert('할일 추가에 실패했습니다.');
    }
  };

  return (
    <div id="main">
      <h2>할일 추가</h2>
      <div className="todo">
        <form onSubmit={ handleSubmit(addTodo) }>
          <label htmlFor="title">제목 :</label>
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
          <div className="input-error">{ errors.title?.message }</div>
          <br />
          <label htmlFor="content">내용 :</label>
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
          <div className="input-error">{ errors.content?.message }</div>
          <br />
          <SubmitButton isSubmitting={ isSubmitting }>추가</SubmitButton>
          <Link to="/list">취소</Link>
        </form>
      </div>

      {/* 할일이 추가되면 갱신을 어떻게 할 것인가? */}
      <TodoList />
    </div>
  );
}

export default TodoAdd;