import Button from "@components/Button";
import { useEffect, useState } from "react";

interface CounterProps {
  children: string;
}

// Counter 컴포넌트
function Counter({ children='0' }: CounterProps){
  console.log('\tCounter 호출됨');

  const initCount = Number(children);

  const [ count, setCount ] = useState(initCount);
  const [step, setStep] = useState(1);

  // 1초 후에 자동으로 값 한번 증가
  // setTimeout(() => {
  //   handleUp();
  // }, 1000);
  // console.log('무한 렌더링');

  // 마운트 된 후에 한번만 실행
  // useEffect(() => {
  //   setTimeout(() => {
  //     handleUp();
  //   }, 1000);
  //   console.log('dependencies에 빈배열을 지정하면 컴포넌트가 마운트된 후에 한번만 호출됨(업데이트 후에는 호출되지 않음)');
  // }, []);

  // 마운트 된 후와 업데이트 된 후에 값 증가
  // useEffect(() => {
  //   setTimeout(() => {
  //     handleUp();
  //   }, 1000);
  //   console.log('dependencies를 지정하지 않으면 컴포넌트가 마운트 된 후와 업데이트 된 후에 호출됨');
  // });

  // step이 변경될 때마다 호출
  // useEffect(() => {
  //   setTimeout(() => {
  //     handleUp();
  //   }, 1000);
  //   console.log('dependencies에 값을 지정하면 컴포넌트가 업데이트 될때 지정한 값중 하나라도 수정되었을 경우 호출됨');
  // }, [step]);


  useEffect(() => { // setup
    console.log('setup 함수 호출.');
    const timer = setInterval(() => {
      console.log(new Date());
    }, 1000);
    return () => { // cleanup(컴포넌트가 언마운트될 때 호출, setup 함수에서 생성한 자원을 해제하는 함수)
      clearInterval(timer);
    };
  });

  // 카운터 감소
  function handleDown() {
    setCount(count - step);
  };

  // 카운터 증가
  function handleUp() {
    setCount(count + step);
  };

  // 카운터 초기화
  function handleReset() {
    setCount(initCount);
  };

  // 증감값 변경 처리
  function handleStepChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newStep = Number(e.target.value);
    setStep(newStep);
  }

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input 
        id="step" 
        type="number" 
        value={ step } 
        onChange={ handleStepChange } 
      />
      <Button color="red" onClick={ handleDown }>-_-</Button>
      <Button type="reset" onClick={ handleReset }>0_0</Button>
      <Button type="submit" color="blue" onClick={ handleUp }>+_+</Button>
      <span>{ count }</span>
    </div>
  );
}
export default Counter;