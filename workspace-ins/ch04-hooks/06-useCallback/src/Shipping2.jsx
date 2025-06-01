import PropTypes from 'prop-types';
import { memo } from 'react';

let beforeFn;

const Shipping = memo(function Shipping({ fees, handleClick }){
  console.log('Shipping2 호출됨. memoize');
  console.log(Object.is(beforeFn, handleClick));
  beforeFn = handleClick;
  return (
    <>
      <h2>배송비</h2>
      <div>
        배송비: { fees.toLocaleString() }원<br/>
      </div>
      <br/>
      <button type="button" onClick={ handleClick }>결제</button>
    </>
  );
});

Shipping.propTypes = {
  fees: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Shipping;