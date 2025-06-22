import useAxiosInstance from "@/hooks/useAxiosInstance";
import type { TodoItem } from "@/pages/TodoInfo";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useOutletContext } from "react-router";

interface OutletContextProps {
  item: TodoItem;
  refetch: () => void;
}

function TodoEdit() {
  const axios = useAxiosInstance();
  // Outlet 컴포넌트의 context 속성에 전달되는 값 추출
  const { item, refetch } = useOutletContext<OutletContextProps>();

  const { register, handleSubmit, formState: { errors } } = useForm<TodoItem>({
    defaultValues: {
      title: item.title,
      content: item.content,
      done: item.done
    }
  });

  // 프로그래밍 방식으로 페이지 이동에 사용
  const navigate = useNavigate();

  // 수정 작업
  const onSubmit = async (formData: TodoItem) => {
    try{
      // TODO: API 서버에 수정 요청
      console.log('할일 수정 API 호출', item._id);

      const res = await axios.patch(`/todolist/${ item._id }`, formData);
      console.log(res.data);

      alert('할일이 수정 되었습니다.');

      // 할일 상세보기로 이동
      // navigate('..', { relative: true }); // 상대 경로로 이동
      // navigate(`/list/${ item._id }`, { replace: true }); // window.history.replaceState()
      navigate(-1); // window.history.go(-1)

      // 다시 상세 정보 조회
      refetch();
    }catch(err){
      console.error(err);
      alert('할일 수정에 실패했습니다.');
    }
  };
  return (
    <>
      <h2>할일 수정</h2>
      <div className="todo">
        <form onSubmit={ handleSubmit(onSubmit) }>
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
          <label htmlFor="done">완료 :</label>
          <input 
            type="checkbox" 
            id="done" 
            { ...register('done') }
          />
          <br/>
          <button type="submit">수정</button>
          <Link to={`/list/${ item._id }`}>취소</Link>
        </form>
      </div>
    </>
  );
}

export default TodoEdit;