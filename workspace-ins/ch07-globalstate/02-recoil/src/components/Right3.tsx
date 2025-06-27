import { countState } from '@/recoil/atoms';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

function Right3() {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });

  // getter/setter 모두 사용(구독)
  // const [count, setCount] = useRecoilState(countState);
  // const countUp = function(step){
  //   setCount(count + step);
  // };

  // setter만 사용(구독하지 않음)
  const setCount = useSetRecoilState(countState);  
  const countUp = function(step: number){
    setCount((count) => count + step);
  };

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={ () => countUp(1) }>+1</button>
    </div>
  );
}

export default Right3;