import React, { createContext, useState } from "react";

// Context에서 사용할 타입 정의
interface CounterContextType {
  count: number;
  countDown: (step: number) => void;
  reset: () => void;
  countUp: (step: number) => void;
}

// 1. Context 객체 생성
const CounterContext = createContext<CounterContextType>({
  count: 0,
  countDown: () => {},
  reset: () => {},
  countUp: () => {},
});

// 3. Provider 컴포넌트를 작성해서 export
export function CounterProvider({ children }: { children: React.ReactNode }) {
  // 4. 데이터, 상태, 상태를 관리하는 함수 정의
  const [count, setCount] = useState(10);

  const countDown = function(step: number){
    setCount(count - step);
  };
  const reset = function(){
    setCount(0);
  };
  const countUp = function(step: number){
    setCount(count + step);
  };

  const values = {
    count,
    countDown, 
    reset, 
    countUp,
  };

  // 5. React 19에서는 Context를 직접 Provider로 사용 가능
  // Context.Provider 대신 Context를 바로 사용
  return (
    <CounterContext value={ values }>
      { children }
    </CounterContext>
  );
}

export default CounterContext;