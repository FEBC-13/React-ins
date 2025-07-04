import PostInfo from "@/app/posts/[id]/PostInfo";
import { fetchPost } from "@/data/functions/boardFetch";
import { PostInfoRes } from "@/types/board";
import { Metadata } from "next";
import { Suspense } from "react";

// 동적인 메타데이터
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params; // Next.js 15 부터 params는 비동기 처리 필요
  
  // const data = {
  //   title: `${ id }번 게시물`,
  //   content: '게시판 이용 수칙입니다.'
  // };

  const data: PostInfoRes = await fetchPost(id);

  return {
    title: data.item.title,
    description: data.item.content,
  };
}

// 이 함수가 반환한 배열만큼 SSG 페이지를 미리 생성
// 빌드하면 .next/server/app/posts/1.html, 2.html, 4.html
export function generateStaticParams() {
  // 공지글에 대한 fetch 작업
  const posts = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];

  return posts.map((post) => ({
    id: post.id,
  }));
}

// SSG 페이지 재검증 시간 설정
export const revalidate = 60;
export default function InfoPage({ params }: { params: Promise<{ id: string }> }) {
  // const { id } = await params; // Next.js 15 부터 params는 비동기 처리 필요
  return(
    <>
      <h1>번 게시물 상세 정보</h1>
      <Suspense fallback={<div>로딩중...</div>}>
        <PostInfo params={params} />
      </Suspense>
    </>
  );
}