function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const handleDown = (num) => {
    setCount(count - num);
  };
  const handleUp = (num) => {
    setCount(count + num);
  };
  const handleReset = (num) => {
    setCount(num);
  };

  return { count, down: handleDown, up: handleUp, reset: handleReset };
}

export default useCounter;