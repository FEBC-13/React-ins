import useAxiosInstance from "@hooks/useAxiosInstance";
import { useState } from "react";

function CommentNew() {

  // 댓글 내용 저장
  const [content, setContent] = useState('');

  const axios = useAxiosInstance();

  // API 서버에 댓글 등록 요청
  const requestAddComment = async (formData: FormData) => {
    try{
      const response = await axios.post('/posts/1/replies', formData);
      if(response.data.ok === true){
        setContent('');
        // TODO 댓글 등록 후 댓글 목록 조회(requestCommentList()를 props로 전달받아서 호출)
      }
    }catch(err){
      console.error(err);
    }
  };

  const handleAddComment = (event: React.FormEvent<HTMLFormElement>) => {
    // TODO 중복 요청 방지하기(요청 시작 전에 등록 버튼 비활성화, 요청 완료 후에 등록 버튼 활성화)
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    requestAddComment(formData);
  };

  return (
    <>
      <h4>댓글 등록</h4>
      <form onSubmit={ handleAddComment }>
        <textarea value={ content } name="content" onChange={ e => setContent(e.target.value) } rows={3} cols={30} placeholder="댓글 내용" /><br />
        <button type="submit">등록</button>
      </form>
    </>
  );
}

export default CommentNew;