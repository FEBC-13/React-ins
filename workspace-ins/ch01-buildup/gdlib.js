const gdlib = (() => {
  // 지정한 속성과 자식 노드를 가지는 요소 노드를 생성해서 반환
  // <button type="button" onclick="handleUp()">+</button>
  // const downBtn = gdlib.createElement('button', { type: 'button', onclick: 'handleDown()' }, '-');
  // const Counter = gdlib.createElement('div', { id: 'counter' }, downBtn, resetBtn, upBtn, span);
  const createElement = (tag, props, ...children) => {
    // 요소 노드 생성
    const elem = document.createElement(tag);

    // 속성 추가
    if(props){
      for(const attrName in props){
        const value = props[attrName];
        // elem.setAttribute(attrName, value);
        if(attrName.startsWith('on') && typeof value === 'function'){
          elem.addEventListener(attrName.toLowerCase().substring(2), value);
        }else{
          elem.setAttribute(attrName, value);
        }
      }
    }

    // 자식 노드 추가
    for(let child of children){
      if(typeof child === 'string' || typeof child === 'number'){
        child = document.createTextNode(child);
      }else if(typeof child === 'function'){
        child = child();
      }
      elem.appendChild(child);
    }

    return elem;
  };

  // 루트노드를 관리하는 객체를 생성해서 반환
  // createRoot(document.getElementById('root')).render(App);
  const createRoot = (rootNode) => {
    return {
      // 루트노드 하위에 지정한 함수를 실행해서 받은 컴포넌트를 렌더링 한다.
      render(appFn){
        rootNode.appendChild(appFn())
      }
    };
  };

  return { createElement, createRoot };

})();

export default gdlib;