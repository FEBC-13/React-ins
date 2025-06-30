import { Metadata } from "next";

// 동적인 메타데이터
export async function generateMetadata(): Promise<Metadata> {
  const data = {
    title: `1번 게시물`,
    content: '게시판 이용 수칙입니다.'
  };

  return {
    title: data.title,
    description: data.content,
  };
}

export default async function InfoPage() {
  await new Promise(resolve => setTimeout(resolve, 1000*2));
  return (
    <h1>상세 조회 - 1번 게시물</h1>
  );
}