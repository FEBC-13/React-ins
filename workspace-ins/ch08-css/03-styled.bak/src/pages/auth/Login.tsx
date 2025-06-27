import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;

  label {
    display: block;
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

function Login() {
  return (
    <Container>
      <h2>Login</h2>
      <Form className="login">
        <InputGroup>
          <label htmlFor="email">Email:</label>
          <Input type="email" id="email" autoComplete="email" required />
        </InputGroup>
        <InputGroup>
          <label htmlFor="password">Password:</label>
          <Input type="password" id="password" autoComplete="current-password" required />
        </InputGroup>
        <button>회원가입</button>
        <button>로그인</button>
        <button>아이디 찾기</button>
      </Form>
    </Container>
  );
};

export default Login;