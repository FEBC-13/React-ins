import { fetchPost } from "@/data/functions/boardFetch";
import { PostInfoRes } from "@/types/board";

// SSG 페이지 재검증 시간 설정
export const revalidate = 60;
export default async function PostInfo({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // await new Promise(resolve => setTimeout(resolve, 1000*2));

  // const res = await fetch(`http://localhost:3000/api/posts/${ id }`);
  // const data: PostInfoRes = await res.json();
  const data: PostInfoRes = await fetchPost(id);

  return (
    <>
      <span>제목: { data.item.title }</span>
      <p>내용: { data.item.content }</p>
    </>
  );
}