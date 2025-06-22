import { useEffect, useState } from 'react';
import Left1 from '@/components/Left1';
import Right1 from '@/components/Right1';
import { CounterContext } from '@/contexts/CounterContext';

function App() {
  const [ count, setCount ] = useState(5);

  const countUp = function(step: number){
    setCount(count + step);
  };

  useEffect(()=>{
    // TODO count가 수정되어도 불필요한 렌더링 발생하지 않도록 CounterContext로 상태 관리 로직 이동
    console.log('# App 렌더링.');
  });

  return (
    <>
      <h1>01 Prop Drilling</h1>
      <div id="container">
        <h1>App</h1>
        <div id="grid">
          {/* 3. Context 제공하기 */}
          <CounterContext value={ { count, countUp } }>
            <Left1 />
            <Right1 />
          </CounterContext>
        </div>
      </div>
    </>
  );
}

export default App;