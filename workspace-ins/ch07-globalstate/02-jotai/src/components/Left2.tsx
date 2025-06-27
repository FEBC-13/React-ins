import Left3 from '@/components/Left3';
import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { doubleCountAtom } from '@/jotai/derived';

function Left2() {
  useEffect(()=>{
    console.log('### Left2 렌더링.');
  });
  const doubleCount = useAtomValue<number>(doubleCountAtom);

  return (
    <div>
      <h2>Left2</h2>
      <span>{ doubleCount }</span>
      <Left3 />
    </div>
  );
}

export default Left2;