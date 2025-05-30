let _root;
let _stateValue;

// 루트노드를 관리하는 객체를 생성해서 반환
// createRoot(document.getElementById('root')).render(App);
export const createRoot = (rootNode) => {
  let _appComponent;
  return _root = {
    // 루트노드 하위에 지정한 함수를 실행해서 받은 컴포넌트를 렌더링 한다.
    render(appFn){
      _appComponent = _appComponent || appFn;
      rootNode.firstChild?.remove();
      rootNode.appendChild(_appComponent())
    }
  };
};

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
        if(attrName.toLowerCase().startsWith('on')){
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
  },

  // 상태값 관리
  // let [count, setCount] = Reaction.useState(10);
  useState: (initValue) => {
    _stateValue = _stateValue || initValue;

    function setValue(newValue){
      const oldValue = _stateValue;
      _stateValue = newValue;

      // 두 값이 같은지 비교해서 같지 않을 경우에(상태가 변경된 경우) 리렌더링한다.
      // 객체일때 같은 메모리 주소를 가지고 있으면 true
      // 두 값이 모두 undefined 이거나 null 이면 true
      // 두 값이 모두 true 이거나 false 이면 true
      // String일 경우 두 값의 글자수, 순서, 모든 글자가 같으면 true
      // Number 라면 같은 값을 가지고 있거나 둘다 NaN이면 true
      if(!Object.is(oldValue, newValue)){
        _root.render();
      }
    }

    return [_stateValue, setValue];
  }
};

export default gdlib;