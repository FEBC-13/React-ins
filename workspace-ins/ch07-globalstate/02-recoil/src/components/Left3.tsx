import { useEffect } from 'react';
import { countState } from '@recoil/atoms';
import { useRecoilValue } from 'recoil';

function Left3() {
  useEffect(()=>{
    console.log('#### Left3 렌더링.');
  });
  const count = useRecoilValue<number>(countState);
  return (
    <div>
      <h3>Left3</h3>
      <span>{ count }</span>
    </div>
  );
}

export default Left3;