import { use, useEffect } from 'react';
import CounterContext from '@/contexts/CounterContext';

function Left3({ showCounter = true }) {

  let counterContext = null;
  // 2. Context 사용하기
  if(showCounter) {
    // use를 이용하면 조건부로 컨텍스트 구독이 가능하므로 불필요한 리렌더링을 방지할 수 있음
    counterContext = use(CounterContext);
  }
  
  useEffect(()=>{
    console.log('#### Left3 렌더링.', showCounter);
  });
  return (
    <div>
      <h3>Left3</h3>
      <span>{ counterContext?.count }</span>
    </div>
  );
}

export default Left3;