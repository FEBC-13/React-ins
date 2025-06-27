import styled from 'styled-components';
import Button from "@/components/ui/StyledButton";
import Login from "@pages/auth/Login";

const StyledTitle = styled.h1`
  background-color: darkgray;
  color: lightblue;
`;

const Container = styled.div`
  width: 300px;
  margin: 10px auto;
`;

function App(){
  return (
    <>
      <StyledTitle>03 Styled Components</StyledTitle>

      <Container>
        <button type="button">그냥 버튼</button>
        <Button type="button" bg="blue" color="red" size="16px">파란 배경의 빨간 버튼</Button>
        <Button type="button" bg="yellow" color="red" size="12px">노란 배경의 빨간 버튼</Button>
        <Button type="button" bg="gray" color="blue" size="8px">회색 배경의 파란 버튼</Button>
      </Container>
      
      <Login />
    </>
  );
}

export default App;