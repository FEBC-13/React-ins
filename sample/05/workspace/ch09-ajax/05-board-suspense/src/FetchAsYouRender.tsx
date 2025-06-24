import type { BoardInfoResType, ReplyResType } from "@/types/BoardType";
import axios from "axios";
import { useEffect, useState } from "react";

// 게시글 상세 조회 API 호출
function fetchPost() {
  return axios.get('https://fesp-api.koyeb.app/market/posts/1?delay=3000', {
    headers: {
      'client-id': 'openmarket'
    }
  });
}

// 댓글 목록 조회 API 호출
function fetchComments() {
  return axios.get<ReplyResType>('https://fesp-api.koyeb.app/market/posts/1/replies?page=1&limit=3&delay=2000', {
    headers: {
      'client-id': 'openmarket'
    }
  });
}

// 게시글 상세 조회 화면
function FetchAsYouRender() {
  const [data, setData] = useState<BoardInfoResType>();

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
export function Comments() {
  const [data, setData] = useState<ReplyResType>();

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

export default FetchAsYouRender;