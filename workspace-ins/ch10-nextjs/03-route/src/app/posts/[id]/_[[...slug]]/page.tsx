import { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string, slug?: string[] }>;
}

// 동적인 메타데이터
export async function generateMetadata({ params }: Props): Promise<Metadata> {
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
    { id: '1' },
    { id: '2' },
    { id: '4' },
  ];

  return posts;

  // return posts.map((post) => ({
  //   id: post.id,
  // }));
}


export default async function SlugPage({ params }: Props) {
  const slugParams = await params;
  console.log(slugParams);
  switch (slugParams.slug?.[0]) {
    case 'likes':
      // 좋아요 목록 출력

    case 'favorites':
      // 즐겨찾기 목록 출력

  }
  return (
    <>
      <h1>상세 조회 - { slugParams.id }번 게시물</h1>
      <p>상세 내용</p>
      <Link className="cs-btn" href={`/posts/${slugParams.id}/likes`}>좋아요 목록</Link>
      <Link className="cs-btn" href={`/posts/${slugParams.id}/favorites`}>즐겨찾기 목록</Link>
       
      { slugParams.slug?.[0] && <h2>{ slugParams.id }번 게시물의 { slugParams.slug?.[0] === 'likes' ? '좋아요 목록' : '즐겨찾기 목록' }</h2> }
      { slugParams.slug?.[1] && <h3>{ slugParams.slug?.[1] } 상세 정보 출력</h3> }
    </>
  );
}