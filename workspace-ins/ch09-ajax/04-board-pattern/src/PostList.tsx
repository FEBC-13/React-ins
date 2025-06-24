import axios from "axios";
import { useEffect, useState } from "react";
import FetchThenRender from "@/FetchThenRender";
import FetchOnRender from "@/FetchOnRender";
import type { BoardInfoResType } from "@/types/BoardType";

// 게시물 목록 조회
function fetchList(){
  return axios.get('https://fesp-api.koyeb.app/market/posts?type=qna&delay=4000', {
    headers: {
      'client-id': 'openmarket',
    },
  });
}

function PostList(){
  const [data, setData] = useState<BoardInfoResType[]>();

  useEffect(() => {
    fetchList().then(res => {
      setData(res.data.item);
    });
  }, []);
  
  if(!data){
    return <div>게시물 목록 로딩중...</div>;
  }

  return (
    <>
      <h2>게시물 { data.length }건.</h2>
      <hr />
      <h3>Fetch-On-Render 방식(폭포수 현상)</h3>
      <FetchOnRender />
      <hr />
      <h3>Fetch-Then-Render 방식(복잡도 증가)</h3>
      <FetchThenRender />
    </>
  );
}

export default PostList;