'use client';

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
  console.log(error);
  return (
    <div>에러가 발생했습니다. <button onClick={() => reset()}>다시 시도</button></div>
  )
}