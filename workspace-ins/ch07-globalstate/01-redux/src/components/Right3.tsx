import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import counterActionCreator from '@/redux/counterActionCreator';
import { countDown, countReset, countUp } from '@/redux-toolkit/counterSlice';

function Right3() {
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });
  
  return (
    <div>
      <h3>Right3</h3>

      {/* Redux */}
      {/* <button onClick={ () => dispatch(counterActionCreator.countDown(2)) }>-1</button>
      <button onClick={ () => dispatch(counterActionCreator.countReset()) }>0</button>
      <button onClick={ () => dispatch(counterActionCreator.countUp(1)) }>+1</button> */}

      {/* ActionCreator 사용 안할 경우 */}
      {/* <button onClick={ () => dispatch({ type: 'countDown', payload: { step: 2 }}) }>-2</button>
      <button onClick={ () => dispatch({ type: 'countReset' }) }>0</button>
      <button onClick={ () => dispatch({ type: 'countUp', payload: { step: 2 }}) }>+2</button> */}

      {/* Redux Toolkit */}
      <button onClick={ () => dispatch(countDown(3)) }>-3</button>
      <button onClick={ () => dispatch(countReset()) }>0</button>
      <button onClick={ () => dispatch(countUp(3)) }>+3</button>

    </div>
  );
}

export default Right3;