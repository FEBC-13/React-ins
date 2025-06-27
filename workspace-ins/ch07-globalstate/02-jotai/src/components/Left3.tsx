import { useEffect } from 'react';
import { countAtom } from '@/jotai/atoms';
import { useAtomValue } from 'jotai';

function Left3() {
  useEffect(()=>{
    console.log('#### Left3 렌더링.');
  });
  const count = useAtomValue(countAtom);
  return (
    <div>
      <h3>Left3</h3>
      <span>{ count }</span>
    </div>
  );
}

export default Left3;