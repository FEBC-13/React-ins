'use client';

import Link from "next/link";

export default function Error({ error }: { error: Error }) {
  console.log(error);
  return (
    <>
      <div>에러가 발생했습니다.</div>
      <Link href="/">홈으로 이동</Link>
    </>
    
  )
}
