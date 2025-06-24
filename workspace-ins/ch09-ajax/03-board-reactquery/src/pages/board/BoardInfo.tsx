import useAxiosInstance from "@/hooks/useAxiosInstance";
import CommentList from "@/pages/board/CommentList";
import type { BoardInfoResType } from "@/types/BoardType";
import { useQuery } from "@tanstack/react-query";

function BoardInfo() {
  const axios = useAxiosInstance();

  const { data, isLoading, error } = useQuery({
    queryKey: ['posts', 1],
    queryFn: () => axios('/posts/1'),
    select: (response: { data: BoardInfoResType }) => response.data.item,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <h1>03 React Query 라이브러리</h1>

      { isLoading &&  <p>로딩중...</p> }
      { error && <p>{ error.message }</p> }

      { data && 
        <>
          <h2>{ data.title }</h2>
          <p>{ data.content }</p>
          <CommentList />
        </>
      }

    </>
  );
}

export default BoardInfo;