import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function Test(){
  const queryClient = useQueryClient();
  // 새로운 댓글 작성시 3번 게시물의 댓글 목록을 무효화 시키고 서버에서 다시 가져옴
  queryClient.invalidateQueries({ queryKey: ['posts', 3, 'comments'] })
  return <></>;
}
export default Test;