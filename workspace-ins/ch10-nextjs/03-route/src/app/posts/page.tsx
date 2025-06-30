import { Metadata } from "next";

// 정적인 메타데이터
export const metadata: Metadata = {
  title: '게시물 목록 조회',
  description: '게시물 목록 조회 페이지입니다.'
}

export default async function ListPage() {
  const random = Math.random();
  console.log('ListPage', random);
  if(random > 0.5) {
    await new Promise((resolve, reject) => setTimeout(() => { reject(new Error('일부러 발생시킨 에러')) }, 1000*2));
  }else{
    await new Promise(resolve => setTimeout(resolve, 1000*2));
  }
  return (
    <>
      <h1>목록 조회</h1>
      <p>실제 목록을 가져오는 컴포넌트</p>
    </>
  );
}