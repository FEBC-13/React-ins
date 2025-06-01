import { useReducer, useState } from "react";
import Button from "./Button";
import PropTypes from 'prop-types';

Counter.propTypes = {
  children: PropTypes.node
};

function Counter({ children=0 }) {
  const [count, countDispatch] = useReducer(counterReducer, Number(children));
  const [num, setNum] = useState(1);

  const handleDown = () => {
    countDispatch({ type: 'DOWN', value: num });
  };
  const handleUp = () => {
    countDispatch({ type: 'UP', value: num });
  };
  const handleReset = () => {
    countDispatch({ type: 'RESET', value: Number(children) });
  };

  return (
    <div id="counter">
      {/* 증감치가 변경되어도 리렌더링될 필요는 없음 */}
      <label htmlFor="step">증감치</label>
      <input id="step" type="number" style={{ width: '40px' }} value={ num } 
        onChange={e => setNum(Number(e.target.value)) } />
      <Button color="red" onClick={ handleDown }>-</Button>
      <Button onClick={ () => handleReset() }>{ children }</Button>
      <Button color="blue" onClick={ handleUp }>+</Button>
      <span>{ count }</span>
    </div>
  );
}

// 현재 상태와 action 객체를 받아서 새로운 상태를 반환하는 순수 함수
// 로직을 컴포넌트 내부에서 직접 구현하지 않고 외부에서 구현
// state: 이전 상태(useReducer가 내부 적으로 관리, 이전의 리턴값이 다음의 state로 전달됨)
// action: 동작을 정의한 객체(자유롭게 작성. 일반적으로 type 속성에 동작을 지정)
// 리턴값: 새로운 상태
function counterReducer(state, action){
  let newState;

  switch(action.type){
    case 'DOWN':
      newState = state - action.value;
      break;
    case 'UP':
      newState = state + action.value;
      break;
    case 'RESET':
      newState = action.value;
      break;
    default:
      newState = state;
  }

  return newState;
}

export default Counter;