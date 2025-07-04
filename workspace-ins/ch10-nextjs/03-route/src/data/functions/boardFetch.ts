'use server'; // 서버 함수 정의

import { Post, PostInfoRes } from "@/types/board";

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('https://fesp-api.koyeb.app/market/posts?type=qna', {
    headers: {
      'Client-Id': 'openmarket',
    },
    next: { tags: ['list'] },
    // 표준 fetch API 캐시 옵션들 (모든 브라우저/환경에서 지원)
    // 표준 fetch API 기본값: 'default'
    // Next.js fetch 기본값: 'no-cache'
    
    cache: 'force-cache', // 무기한 캐시, 정적 데이터용
    // cache: 'default', // 표준 fetch API 기본값 - 브라우저 기본 정책 (HTTP 헤더 따름)
    // cache: 'no-store', // Next.js 기본값캐시하지 않음, 매번 새로운 데이터 요청 - 실시간 데이터용
    // cache: 'no-cache', // 조건부 재검증, ETag/Last-Modified 활용 - 자주 업데이트되는 데이터용
    // cache: 'reload', // 네트워크에서 새로 가져와서 캐시 업데이트 (브라우저 새로고침과 유사)
    // cache: 'only-if-cached', // 캐시에서만 가져오기, 없으면 네트워크 오류 (오프라인 모드용)
    
    // Next.js 확장 옵션들 (Next.js에서만 지원)
    // next: { revalidate: 10 }, // 시간 기반 재검증 (60초마다 백그라운드 업데이트)
    // next: { tags: ['posts', 'board'] }, // 태그 기반 캐시 관리 (revalidateTag로 무효화)
    // next: { revalidate: false }, // 수동 재검증만 허용
  });
  const data = await res.json();
  console.log('API 서버에서 받은 게시물 개수:', data.item.length);
  return data.item;
}

export async function fetchPost(id: string): Promise<PostInfoRes> {
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts/${id}`, {
    headers: {
      'Client-Id': 'openmarket',
    },
    next: { 
      tags: ['list', id],
      revalidate: 60,
    },
    cache: 'force-cache',
  });
  const data = await res.json();
  console.log('fetchPost 함수 내부', data.item.title);
  return data;
}
