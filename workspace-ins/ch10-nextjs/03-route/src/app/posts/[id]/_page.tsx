import { Metadata } from "next";

// 동적인 메타데이터
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params; // Next.js 15 부터 params는 비동기 처리 필요
  const data = {
    title: `${ id }번 게시물`,
    content: '게시판 이용 수칙입니다.'
  };

  return {
    title: data.title,
    description: data.content,
  };
}

// 이 함수가 반환한 배열만큼 SSG 페이지를 미리 생성
// 빌드하면 .next/server/app/posts/1.html, 2.html, 4.html
export function generateStaticParams() {
  // 공지글에 대한 fetch 작업
  const posts = [
    { id: '1', slug: [] },
    { id: '2', slug: [] },
    { id: '4', slug: [] },
  ];

  return posts.map((post) => ({
    id: post.id,
    slug: post.slug,
  }));
}

export default async function InfoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Next.js 15 부터 params는 비동기 처리 필요
  await new Promise(resolve => setTimeout(resolve, 1000*2));
  
  return (
    <h1>상세 조회 - { id }번 게시물</h1>
  );
}