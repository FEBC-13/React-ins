import type { BoardInfoResType } from "@/types/BoardType";
import axios from "axios";
import { useEffect, useState } from "react";

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
    </>
  );
}

export default PostList;