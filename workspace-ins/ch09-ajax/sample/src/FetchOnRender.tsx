import axios from "axios";
import { useEffect, useState } from "react";

interface PostRes {
  ok: boolean;
  item: {
    _id: string;
    title: string;
  }
}

interface CommentsRes {
  ok: boolean;
  item: {
    _id: string;
    content: string;
  }[];
}

// 게시글 조회 API 호출
function fetchPost() {
  return axios.get('https://fesp-api.koyeb.app/market/posts/1?delay=3000', {
    headers: {
      'client-id': 'openmarket'
    }
  });
}

// 게시글 상세 조회 페이지
function FetchOnRender() {
  const [data, setData] = useState<PostRes>();

  useEffect(() => {
    fetchPost().then(res => {
      setData(res.data);
    });
  }, []);

  if(!data){
    return <div>1번 게시물 로딩중...</div>;
  }

  return (
    <>
      <h4>{data.item.title}</h4>
      <Comments />
    </>
  );
}

// 댓글 목록 조회 화면
function fetchComments() {
  return axios.get<CommentsRes>('https://fesp-api.koyeb.app/market/posts/1/replies?delay=2000', {
    headers: {
      'client-id': 'openmarket'
    }
  });
}

// 댓글 목록 조회 API 호출
export function Comments() {
  const [data, setData] = useState<CommentsRes>();

  useEffect(() => {
    fetchComments().then((res) => {
      setData(res.data);
    });
  }, []);

  if(!data){
    return <div>댓글 로딩중...</div>;
  }

  const list = data?.item.map((item) => <li key={item._id}>{item.content}</li>);

  return (
    <>
      <ul>{ list }</ul>
    </>
  );
}

export default FetchOnRender;