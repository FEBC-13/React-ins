import Left2 from '@/components/Left2';
import { dualDoubleCountAtom } from '@/jotai/derived';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';

function Left1() {
  useEffect(()=>{
    console.log('## Left1 렌더링.');
  });

  const dualDoubleCount = useAtomValue<number>(dualDoubleCountAtom);
  return (
    <div>
      <h1>Left1</h1>
      <span>{ dualDoubleCount }</span>
      <Left2 />
    </div>
  );
}

export default Left1;