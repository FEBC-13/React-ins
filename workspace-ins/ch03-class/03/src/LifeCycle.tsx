import React, { Component } from "react";
import PropTypes from 'prop-types';

interface ClickMeProps {
  level: number;
}

interface ClickMeState {
  count: number;
}

class ClickMe extends Component<ClickMeProps, ClickMeState>{
  increase = () => {
    this.setState({ count: this.state.count + this.props.level });
  }

  // 1-1
  constructor(props: ClickMeProps){
    console.log('1-1 constructor 호출됨.');
    // 부모 클래스의 생성자를 통해 this를 생성하고 초기화 하므로 super()를 호출해야 자식 클래스에서 this 사용 가능
    // super(props) 호출해야 this.props 사용 가능
    super(props);
    this.state = { count: 0 };
  }

  // 1-2/2-1
  static getDerivedStateFromProps(props: ClickMeProps, state: ClickMeState){
    console.log('1-2/2-1 getDerivedStateFromProps 호출됨.');
    console.log('\tprops', props);
    console.log('\tstate', state);

    if(state.count > 10){
      return { count: 10 }; // 새로운 값으로 state 업데이트
    }

    return null; // state를 업데이트 하지 않음
  }

  // 2-2
  shouldComponentUpdate(nextProps: ClickMeProps, nextState: ClickMeState){
    console.log('2-2 shouldComponentUpdate 호출됨.');
    console.log('\t현재값', this.props, this.state);
    console.log('\t다음값', nextProps, nextState);
    return true;
  }

  // 1-3/2-3
  render(){
    console.log('1-3/2-3 render 호출됨.');
    return (
      <>
        <div>
          클릭 횟수 X { this.props.level } : { this.state.count }
          <button onClick={ this.increase }>클릭</button>
        </div>
      </>
    );
  }

  // 1-4
  componentDidMount(){
    console.log('1-4 componentDidMount 호출됨.');
    alert(11);
  }

  // 2-4
  getSnapshotBeforeUpdate(prevProps: ClickMeProps, prevState: ClickMeState){
    console.log('2-4 getSnapshotBeforeUpdate', prevProps, prevState);
    return 'hello';
  }

  // 2-5
  componentDidUpdate(prevProps: ClickMeProps, prevState: ClickMeState, snapshot: any){
    console.log('2-5 componentDidUpdate', prevProps, prevState, snapshot);
  }

  // 3-1
  componentWillUnmount(){
    console.log('3-1 componentWillUnmount');
  }
}

ClickMe.propTypes = {
  level: PropTypes.number
};

class Parent extends Component{
  render(){
    return(
      <div>
        <h1>03 클래스 컴포넌트 - 컴포넌트의 라이프 사이클</h1>
        {/* <Child level={1} /> */}
        <ClickMe level={5} />
      </div>
    );
  }
}

export default Parent;