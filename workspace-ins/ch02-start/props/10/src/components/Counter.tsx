import { useState } from "react";
import Button from "./Button";

// 자식 요소는 children이라는 이름의 prop으로 전달됨
// 타입: 문자, 리엑트 엘리먼트, 리엑트 엘리먼트 배열
function Counter({ children='0' }: { children: string }) {
  // 컴포넌트가 다시 호출되어도 상태값(데이터)을 저장할 수 있는 방법이 필요
  const [count, setCount] = useState(Number(children));

  const handleDown = () => {
    // 상태값이 변경되면 화면도 수정되어야 한다.(리렌더링 필요)
    setCount(count -1 );
  };
  const handleUp = () => {
    setCount(count + 1)
  };
  const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCount(Number(children));
  };

  return (
    <div id="counter">
      <Button color="red" onClick={ handleDown }>-</Button>
      <Button onClick={ (event: React.MouseEvent<HTMLButtonElement>) => handleReset(event) }>{ children }</Button>
      <Button color="blue" onClick={ handleUp }>+</Button>
      <span>{ count }</span>
    </div>
  );
}

export default Counter;