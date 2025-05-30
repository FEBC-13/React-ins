const gdlib = {
  // 지정한 속성과 자식 노드를 가지는 요소 노드를 생성해서 반환
  // <button type="button" onclick="handleUp()">+</button>
  // const downBtn = gdlib.createElement('button', { type: 'button', onclick: 'handleDown()' }, '-');
  // const Counter = gdlib.createElement('div', { id: 'counter' }, downBtn, resetBtn, upBtn, span);
  createElement: (tag, props, ...children) => {
    // 요소 노드 생성
    const elem = document.createElement(tag);

    // 속성 추가
    if(props){
      for(const attrName in props){
        const value = props[attrName];
        elem.setAttribute(attrName, value);
      }
    }

    // 자식 노드 추가
    for(let child of children){
      if(typeof child === 'string' || typeof child === 'number'){
        child = document.createTextNode(child);
      }
      elem.appendChild(child);
    }

    return elem;
  }

};

export default gdlib;