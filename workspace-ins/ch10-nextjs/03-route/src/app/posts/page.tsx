import { fetchPosts } from "@/data/functions/boardFetch";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: '게시물 목록 조회',
  description: '게시물 목록 조회 페이지입니다.'
}

// ISR 설정: 60초마다 재생성
export const revalidate = 60;

export default async function ListPage() {
  const data = await fetchPosts();
  const posts = data.map(post => <li key={ post._id }><Link prefetch={false} href={`/posts/${post._id}`}>{ post._id } - { post.title }</Link></li>);
  return (
    <>
      <h1>목록 조회</h1>
      <div className="text-sm text-gray-500 mb-4">
        마지막 업데이트: {new Date().toLocaleString('ko-KR')}
      </div>
      <ul>
        { posts }
      </ul>
    </>
  );
}