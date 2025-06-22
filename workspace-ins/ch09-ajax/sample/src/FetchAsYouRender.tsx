import { useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";

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
  return axios.get<PostRes>('https://fesp-api.koyeb.app/market/posts/1?delay=3000', {
    headers: {
      'client-id': 'openmarket'
    }
  });
}

// 게시글 상세 조회 페이지
function FetchAsYouRender() {
  // React Query 사용
  const { data } = useSuspenseQuery({
    queryKey: ['posts', 1],
    queryFn: () => fetchPost(),
    select: res => res.data,
    staleTime: 1000*10,
  });

  return (
    <>
      <h4>{data.item.title}</h4>
      <Comments />
    </>
  );
}

// 댓글 조회 API 호출
function fetchComments() {
  return axios.get<CommentsRes>('https://fesp-api.koyeb.app/market/posts/1/replies?delay=2000', {
    headers: {
      'client-id': 'openmarket'
    }
  });
}

// 댓글 목록 조회 화면
export function Comments() {
  const { data } = useSuspenseQuery({
    queryKey: ['posts', 1, 'replies'],
    queryFn: () => fetchComments(),
    select: res => res.data,
    staleTime: 1000*10,
  });
  console.log(data);
  
  const list = data.item.map((item) => <li key={item._id}>{item.content}</li>);

  return (
    <>
      <ul>{ list }</ul>
    </>
  );
}

export default FetchAsYouRender;