'use client';

export default function Error({ error }: { error: Error }) {
  console.log(error);
  return (
    <div>에러가 발생했습니다. 잠시후 다시 시도해주세요.</div>
  )
}