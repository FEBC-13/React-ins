import useAxiosInstance from "@/hooks/useAxiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

function CommentNew() {

  // 댓글 내용 저장
  const [content, setContent] = useState('');

  const axios = useAxiosInstance();

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (formData: FormData) => axios.post(`/posts/1/replies`, formData),
    onSuccess(){ // mutationFn이 성공을(2xx 응답 상태 코드) 응답 받을 경우 호출되는 콜백 합수
      // 기존 캐시 무효화
      setContent('');
      queryClient.invalidateQueries({ queryKey: ['posts', 1, 'replies'] });
    }
  });

  const handleAddComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    mutate(formData);
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