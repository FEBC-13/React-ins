import { useContext, useEffect } from 'react';
import { CounterContext } from '@/contexts/CounterContext';

function Left3() {

  // 2. Context 사용하기
  const { count } = useContext(CounterContext);
  
  useEffect(()=>{
    console.log('#### Left3 렌더링.');
  });
  return (
    <div>
      <h3>Left3</h3>
      <span>{ count }</span>
    </div>
  );
}

export default Left3;