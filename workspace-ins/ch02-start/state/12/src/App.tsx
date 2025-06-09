import { useState } from "react";

function App() {
  console.log('App 컴포넌트 렌더링');
  const [ count, setCount ] = useState(0);
  return (
    <>
      <h2>12 이벤트 핸들러에서 state 값을 여러번 변경했을 때 문제점</h2>
      <p>{ count }</p>
      <button onClick={ () => {
        console.log('클릭 핸들러 시작', count); // 0
        
        // 호출되는 즉시 리렌데링이 되지 않고 성능 최적화를 위해 모아 두었다가 한번에 반영됨(배치)
        setCount(count + 1); // 0 + 1
        setCount(count + 1); // 0 + 1
        setCount(count + 1); // 0 + 1

        // 콜백함수의 리턴값을 저장해 두었다가 다음에 호출되는 콜백함수의 인자로 전달
        // setCount(num => num + 1); // 0 + 1
        // setCount(num => num + 1); // 1 + 1
        // setCount(num => num + 1); // 2 + 1

        console.log('클릭 핸들러 종료', count); // 0
      } }>+1</button>
    </>
  );
}
export default App;