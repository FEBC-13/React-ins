import { NextResponse } from 'next/server';

// Route Handler 정적 캐시
// 정적 캐싱 강제 (최초 요청시 해당 id에 대한 응답 데이터를 캐시)
export const dynamic = 'force-static';

// 동적 렌더링 강제 (매번 새로 실행)
// export const dynamic = 'force-dynamic';

// 자동 감지 (Next.js가 판단)
// export const dynamic = 'auto';

// 에러 발생 (동적 함수 사용 시 에러)
// export const dynamic = 'error';

export async function GET() {
  const res = await fetch(`https://fesp-api.koyeb.app/market/config`, {
    headers: {
      'Content-Type': 'application/json',
      'Client-Id': 'openmarket',
    },
  });
  const data = await res.json();
  console.log('config값 받아옴 GET', data);
  return NextResponse.json(data);
}