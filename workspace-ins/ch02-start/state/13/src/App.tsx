import { useState } from "react";
import './App.css';

function App() {

  const [position, setPosition] = useState({ x: 50, y: 150 });

  return (
    <>
      <h1>13 상태관리 대상이 객체일 경우 주의 사항</h1>
      <div className="container" onPointerMove={ event => {
        // 속성을 직접 수정하면 리렌더링되지 않음
        // position.x = event.clientX;
        // position.y = event.clientY;
        // setPosition(position);
        
        const rect = event.currentTarget.getBoundingClientRect();
        console.log(rect);
        const newPosition = {
          x: event.pageX,
          y: event.pageY
        }
        console.log(newPosition);
        setPosition(newPosition);
      } }>
      </div>
      <div className="circle" style={{pointerEvents: 'none', transform: `translate(${position.x}px, ${position.y}px)`}}></div>

    </>
  );
}
export default App;