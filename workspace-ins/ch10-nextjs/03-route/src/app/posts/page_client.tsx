'use client';

import { fetchPosts } from "@/data/functions/boardFetch";
import { Post } from "@/types/board";
import Link from "next/link";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: '게시물 목록 조회',
//   description: '게시물 목록 조회 페이지입니다.'
// }

export default function ListPage() {
  console.log('ListPage');
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const dummyList = await fetchPosts();
      console.log(dummyList);
      setPosts(dummyList);
    } catch (error) {
      console.error('게시물 로딩 중 오류:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleRefresh = async () => {
    await loadPosts();
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  const postList = posts.map(post => (
    <li key={post._id}>
      <Link href={`/posts/${post._id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <>
      <h1>목록 조회</h1>
      <button onClick={handleRefresh} disabled={loading}>
        {loading ? '새로고침 중...' : '새로고침'}
      </button>
      <ul>
        {postList}
      </ul>
    </>
  );
}