import useCounterStore from '@/zustand/counter';
import { useEffect } from 'react';

function Right3() {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });

  // count를 사용하지 않더라도 counterStore의 모든 상태가 자동으로 구독되므로 count 변경시 Right3가 리렌더링 됨
  // const { countUp, countDown, countReset } = useCounterStore();

  // 렌더링 최적화를 위해 필요한 상태만 선택적 구독
  const countUp = useCounterStore((state) => state.countUp);
  const countDown = useCounterStore((state) => state.countDown);
  const countReset = useCounterStore((state) => state.countReset);
  const name = useCounterStore((state) => state.name);

  // useCounterStore를 통해 count를 직접 사용하면 구독이 되므로 필요할 때만 참조하고 싶은 경우 사용
  const getCount = useCounterStore((state) => state.getCount);

  return (
    <div>
      <h3>Right3: { name }</h3>
      <button onClick={ () => countDown(1) }>-1</button>
      <button onClick={ () => countReset() }>0</button>
      <button onClick={ () => countUp(1) }>+1</button>
      <button onClick={ () => console.log(getCount()) }>현재값</button>
    </div>
  );
}

export default Right3;