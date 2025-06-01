import { useRef, useState } from "react";
import Button from "./Button";
import PropTypes from 'prop-types';
import useCounter from "@hooks/useCounter.mjs";

Counter.propTypes = {
  children: PropTypes.node
};

function Counter({ children=0 }) {
  const { count, down, up, reset } = useCounter(Number(children));

  const step = useRef(1);

  const handleDown = () => {
    down(step.current);
  };
  const handleUp = () => {
    up(step.current);
  };
  const handleReset = () => {
    reset(step.current);
  };
  return(
    <div id="counter">
      <Button color="red" onClick={ handleDown }>-</Button>
      <Button onClick={ () => handleReset() }>{ children }</Button>
      <Button color="blue" onClick={ handleUp }>+</Button>
      <input type="number" style={{ width: '40px' }} value={ step.current } 
        onChange={e => step.current = Number(e.target.value) } />
      <span>{ count }</span>
    </div>
  );
}

export default Counter;