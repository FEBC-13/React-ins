import { useCallback, useMemo, useState } from "react";

import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from "./Product3";
import Product4 from "./Product4";

import Shipping1 from "./Shipping1";
import Shipping2 from "./Shipping2";

function App(){

  console.log('App 호출됨.');

  // Product 컴포넌트가 React.memo로 메모이제이션 되어도
  // App 컴포넌트가 리렌더링 될 때마다 Product의 props로 전달되는 data가 새로운 객체로 만들어지므로 
  // Product가 매번 다시 호출됨
  const data = {
    _id: 2,
    price: 125000,
    shippingFees: 3000,
    name: '나이키 잼',
    quantity: 35,
    buyQuantity: 10,
    mainImage: "/files/00-nike/NIKE_JAM_01.jpg",
    content: '나이키가 세계적인 무대에 오르는 브레이크 댄서를 위해 제작한 첫 신발인 잼과 함께 몸과 마음, 정신을 하나로 만들어 보세요. 신발의 모든 디테일을 꼼꼼히 제작했기 때문에 자신 있게 사이퍼에 도전할 수 있습니다. 유연하고 내구성이 뛰어난 갑피가 몸을 따라 움직이며, 중창의 텍스처 처리된 핸드 그립 덕분에 공중에서 신발을 쉽게 잡을 수 있습니다. 그리고 위아래가 뒤집힌 로고를 배치해 프리즈 동작을 할 때 로고가 똑바로 보이는 재미를 더했죠.'
  };

  // 함수의 리턴값인 data2를 메모이제이션하면 
  // App 컴포넌트가 리렌더링 될 때에도 Product의 props로 전달되는 data2가 바뀌지 않으므로
  // memoized된 Product가 사용됨
  const memoizedData = useMemo(() => ({
    _id: 2,
    price: 125000,
    shippingFees: 3000,
    name: '나이키 잼',
    quantity: 35,
    buyQuantity: 10,
    mainImage: "/files/00-nike/NIKE_JAM_01.jpg",
    content: '나이키가 세계적인 무대에 오르는 브레이크 댄서를 위해 제작한 첫 신발인 잼과 함께 몸과 마음, 정신을 하나로 만들어 보세요. 신발의 모든 디테일을 꼼꼼히 제작했기 때문에 자신 있게 사이퍼에 도전할 수 있습니다. 유연하고 내구성이 뛰어난 갑피가 몸을 따라 움직이며, 중창의 텍스처 처리된 핸드 그립 덕분에 공중에서 신발을 쉽게 잡을 수 있습니다. 그리고 위아래가 뒤집힌 로고를 배치해 프리즈 동작을 할 때 로고가 똑바로 보이는 재미를 더했죠.'
  }), []);

  const [quantity, setQuantity] = useState(1);
  const [shippingFees, setShippingFees] = useState(data.shippingFees);

  const totalPrice = data.price * quantity;

  // 수량이 변경될 때 배송비 다시 계산
  const handleQuantityChange = e => {
    const newQuantity = Number(e.target.value);
    setShippingFees(data.shippingFees * Math.ceil(newQuantity / 5));
    setQuantity(newQuantity);
  };

  // App 컴포넌트가 리렌더링 될 때마다 Shipping의 props로 전달되는 handlePayment가 새로운 함수로 만들어지므로 
  // Shipping이 매번 다시 호출됨
  const handlePayment = () => {
    alert(`상품을 결제 하시겠습니까?`);
  };

  // handlePayment2 함수를 메모이제이션하면 
  // App 컴포넌트가 리렌더링 될 때에도 Shipping의 props로 전달되는 handlePayment2가 바뀌지 않으므로
  // memoized된 Shipping이 사용됨
  const memoizedHandlePayment = useCallback(() => {
    alert(`상품을 결제 하시겠습니까?`);
  }, []);

  // 컴포넌트 마운트때 영구적으로 메모이제이션 됨
  const memoizedHandlePayment2 = useCallback(() => {
    alert(`배송비 ${shippingFees}원이 추가됩니다. 결제 하시겠습니까?`);
  }, []);

  // 컴포넌트 마운트때 함수가 메모이제이션이 된 후 배송비가 바뀔면 다시 생성된 후에 메모이제이션 됨
  const memoizedHandlePayment3 = useCallback(() => {
    alert(`배송비 ${shippingFees}원이 추가됩니다. 결제 하시겠습니까?`);
  }, [shippingFees]);
  
  return (
    <>
      <h1>06 useCallback(함수 자체를 memoize), React.memo(컴포넌트를 memoize)</h1>

      <Product1 name={ data.name } price={ data.price } mainImage={ data.mainImage } content={ data.content } />
      <Product2 name={ data.name } price={ data.price } mainImage={ data.mainImage } content={ data.content } />
      <Product3 product={ data } />
      <Product4 product={ data } />

      <Product4 product={ memoizedData } />

      <h2>수량 선택</h2>
      <div>
        가격: { data.price.toLocaleString() }원<br/>
        수량: <input type="number" min="1" max={ data.quantity - data.buyQuantity } value={ quantity } onChange={ handleQuantityChange }/>
        (배송비는 5개당 { data.shippingFees }원씩 추가됩니다.)<br/>
        상품 금액: { totalPrice.toLocaleString() }원
      </div>

      <Shipping1 fees={ shippingFees } handleClick={ handlePayment } />
      <Shipping2 fees={ shippingFees } handleClick={ handlePayment } />
      <Shipping2 fees={ shippingFees } handleClick={ memoizedHandlePayment } />
      <Shipping2 fees={ shippingFees } handleClick={ memoizedHandlePayment2 } />

      <Shipping2 fees={ shippingFees } handleClick={ memoizedHandlePayment3 } />
    </>
  );
}

export default App;