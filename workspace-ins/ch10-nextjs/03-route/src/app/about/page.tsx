import { PostListRes } from "@/types/board";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About',
  description: 'About 페이지입니다.'
}

// 동적 렌더링 강제 - 런타임에만 실행
// 빌드타임에 정적 렌더링 시도하면서 route handler 실행시 에러
export const dynamic = 'force-dynamic';

export default async function AboutPage() {
  // const random = Math.random();
  // console.log('ListPage', random);
  // if(random > 0.5) {
  //   throw new Error('일부러 발생시킨 에러');
  // }else{
  //   await new Promise(resolve => setTimeout(resolve, 1000*2));
  // }
  console.log('About 페이지 렌더링');

  const res = await fetch(`http://localhost:3000/api/config`);
  const data: PostListRes = await res.json();
  console.log('설정값', data);
  return (
    <h1>About</h1>
  );
}