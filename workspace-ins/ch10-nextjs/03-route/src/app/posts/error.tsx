'use client';

import Link from "next/link";

export default function Error({ error }: { error: Error }) {
  console.log(error);
  return (
    <div>
      <p>상세 정보 조회중에 에러가 발생했습니다.</p>
      <Link href="/">홈으로</Link>
    </div>
  )
}