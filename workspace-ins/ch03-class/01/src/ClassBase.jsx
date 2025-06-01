import { Component } from "react";
import PropTypes from 'prop-types';

class ClickMe extends Component {
  // state/setState는 부모에(Component) 정의되어 있는 이름
  // 샹태는 state 변수 하나만 사용 가능해서 여러개의 상태를 관리하려면 객체로 지정
  // 함수형에서는 state 변수를 여러개 지정 가능(useState 훅)
  state = { count: 0 };

  // props를 기반으로 state를 초기화 할 경우 생성자 작성
  constructor(props) {
    // 부모 클래스의 생성자를 통해 this를 생성하고 초기화 하므로
    // super()를 호출해야 자식 클래스에서 this 사용 가능
    // super(props)를 호출해야 자식 클래스에서 this.props 사용 가능
    super(props);
    this.state = { count: props.level || 1 };
  }

  // arrow function으로 작성해야 this.state 등에 접근 가능함
  increase = () => {
    this.setState({ count: this.state.count + this.props.level });
  }

  render(){
    return (
      <>
        <div>
          클릭 횟수 X { this.props.level }: { this.state.count }
          <button onClick={ this.increase }>클릭</button>
        </div>
      </>
    );
  }
}

ClickMe.propTypes = {
  level: PropTypes.number
};

class Parent extends Component{
  render(){
    return (
      <div>
        <h1>01 클래스 컴포넌트</h1>
        <ClickMe level={1} />
        <ClickMe level={5} />
      </div>
    );
  }
}

export default Parent;