import { useEffect, useState } from "react";
import Button from "./Button";
import PropTypes from 'prop-types';

Counter.propTypes = {
  children: PropTypes.node
};

function Counter({ children=0 }) {
  const [count, setCount] = useState(Number(children));
  const [num, setNum] = useState(1);

  // 무한 렌더링 발생
  // setTimeout(() => {
  //   setCount(count + 1);
  // }, 1000);

  // 마운트/업데이트 된 후에 호출
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 1000);
  //   console.log('dependencies에 빈 배열 지정. 컴포넌트가 마운트된 후에 한번만 호출됨(업데이트 후에는 호출되지 않음)');
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 1000);
  //   console.log('dependencies 생략. 컴포넌트가 마운트/업데이트 될 때 매번 호출됨.');
  // });

  useEffect(() => {
    console.log('dependencies => []. 컴포넌트가 마운트 될때 한번만 호출.');
  }, []);

  // useEffect(() => {
  //   console.log('dependencies => [num]. 컴포넌트가 마운트 될때와 업데이트 될때(num 값이 변경되었을 경우에만) 호출.');
  //   // ajax로 서버에 검색어 전송
  // }, [num]);

  // useEffect(() => {
  //   console.log('setup 함수 호출.');
  //   const timer = setInterval(() => {
  //     console.log(new Date());
  //   }, 1000*num);
  //   return () => { // cleanup 함수
  //     console.log('cleanup 함수 호출.');
  //     clearInterval(timer);
  //   };
  // }, [num]);

  const handleDown = () => {
    setCount(count - num);
  };
  const handleUp = () => {
    setCount(count + num);
  };
  const handleReset = () => {
    setCount(Number(children));
  };
  return(
    <div id="counter">
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

export default Counter;