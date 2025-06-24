import useAxiosInstance from "@/hooks/useAxiosInstance";
import CommentNew from "@/pages/board/CommentNew";
import type { ReplyResType } from "@/types/BoardType";
import { useQuery } from "@tanstack/react-query";

function CommentList() {
  const axios = useAxiosInstance();

  const { data, isLoading, error } = useQuery({
    queryKey: ['posts', 1, 'replies'],
    queryFn: () => axios('/posts/1/replies'),
    select: (response: { data: ReplyResType }) => response.data.item,
    retry: 3, // 작업이 실패하면 자동으로 재시도하기
    refetchOnWindowFocus: false, // 다른탭이나 앱에서 작업 후에 돌아오면 데이터 자동 갱신하기
    staleTime: 1000*10, // 일정 시간동안은 캐시해서 서버 호출 횟수 줄이기
    // refetchInterval: 2000, // 주기적으로 호출해서 데이터 자동 갱신하기
  });

  const replyList = data?.map(reply => <li key={ reply._id }>{ reply.content }</li>);

  return (
    <>
      <h3>댓글 목록</h3>

      { isLoading &&  <p>로딩중...</p> }
      { error && <p>{ error.message }</p> }

      { data && 
        <>
          <ul>
            { replyList }
          </ul>
          <CommentNew />
        </>
      }
    </>
  );
}

export default CommentList;