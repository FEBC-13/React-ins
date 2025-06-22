import { useRef, useState } from "react";

function useCounter(initialValue: number) {
  const [count, setCount] = useState(initialValue);
  const stepRef = useRef(initialValue);

  const down = () => {
    setCount(count - stepRef.current);
  };
  const up = () => {
    setCount(count + stepRef.current);
  };
  const reset = () => {
    setCount(initialValue);
  };

  return { count, stepRef, down, up, reset };
}

export default useCounter;