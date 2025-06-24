import type { BoardInfoResType, ReplyResType } from "@/types/BoardType";
import axios from "axios";
import { useEffect, useState } from "react";

// 게시글과 댓글 목록 조회를 동시에
function fetchData(){
  return Promise.all([
    fetchPost(),
    fetchComments(),
  ]).then(([ post, comments ]) => {
    return { post: post.data, comments: comments.data };
  });
}

// 데이터 패칭 시작(렌더링 전에 부모 컴포넌트에서 import하는 순간에 실행)
const promise = fetchData();

// 게시글 조회 API 호출
function fetchPost() {
  return axios.get<BoardInfoResType>('https://fesp-api.koyeb.app/market/posts/1?delay=3000', {
    headers: {
      'client-id': 'openmarket'
    }
  });
}

// 게시글 상세 조회 페이지
function FetchThenRender() {
  const [post, setPost] = useState<BoardInfoResType>();
  const [comments, setComments] = useState<ReplyResType>();

  useEffect(() => {
    promise.then(res => {
      setPost(res.post);
      setComments(res.comments);
    });
  }, []);

  if(!post){
    return <div>1번 게시물 로딩중...</div>;
  }

  return (
    <>
      <h4>{post.item.title}</h4>
      {comments && <Comments comments={comments}/>}
    </>
  );
}

// 댓글 목록 조회 화면
function fetchComments() {
  return axios.get<ReplyResType>('https://fesp-api.koyeb.app/market/posts/1/replies?page=1&limit=3&delay=2000', {
    headers: {
      'client-id': 'openmarket'
    }
  });
}

// 댓글 목록 조회 API 호출
export function Comments({ comments }: { comments: ReplyResType }) {
  if(!comments){
    return <div>댓글 로딩중...</div>;
  }

  const list = comments.item.map((item) => <li key={item._id}>{item.content}</li>);

  return (
    <>
      <ul>{ list }</ul>
    </>
  );
}

export default FetchThenRender;