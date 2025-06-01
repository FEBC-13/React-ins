import { useReducer, useRef } from "react";
import Button from "./Button";
import PropTypes from 'prop-types';

Counter.propTypes = {
  children: PropTypes.node
};

function Counter({ children=0 }) {
  const [count, countDispatch] = useReducer(counterReducer, Number(children));
  // useState처럼 이전 값을 저장하고는 있지만 값이 바뀌어도 리렌더링을 하지 않음
  // { current: 1 } 반환
  const step = useRef(1);
  const stepRef = useRef(null); // DOM 참조이므로 없을 경우에는 null

  const handleDown = () => {
    countDispatch({ type: 'DOWN', value: step.current });
  };
  const handleUp = () => {
    countDispatch({ type: 'UP', value: step.current });
  };
  const handleReset = () => {
    countDispatch({ type: 'RESET', value: Number(children) });
    // 리셋 버튼을 누르면 num에 포커스
    stepRef.current.focus();
  };

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      {/* useState로 만든 값을 input의 값으로 지정할 경우 value에 지정(제어 컴포넌트, React에서 입력값 제어)하고 값이 변경되면 리렌더링 되어야 변경된 값이 화면에 반영되므로 onChange 추가 */}
      {/* useRef로 만든 값을 input의 값으로 지정할 경우 defaultValue에 지정(비제어 컴포넌트, 브라우저가 입력값 제어)하고 수정된 값이 화면에 반영되는건 브라우저가 자동으로 처리하므로 ref 값을 업데이트 하기 위해 onChange 추가 */}
      <input id="step" type="number" style={{ width: '40px' }} defaultValue={ step.current } ref={ stepRef }
        onChange={ e => step.current = Number(e.target.value) } />
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
