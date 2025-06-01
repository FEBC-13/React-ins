import { useState } from "react";
import PropTypes from 'prop-types';

function ClickMe({ level }){
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + level);
  }

  return (
    <>
      <div>
        클릭 횟수 X { level }: { count }
        <button onClick={ increase }>클릭</button>
      </div>
    </>
  );
}

ClickMe.propTypes = {
  level: PropTypes.number
};

function Parent(){
  return(
    <div>
      <h1>02 클래스 컴포넌트 - 함수 컴포넌트와 같이 사용</h1>
      <ClickMe level={1} />
      <ClickMe level={5} />
    </div>
  );
}

export default Parent;