import Button from "@components/ui/Button";

function Login() {
  return (
    <div className="w-80 mx-auto my-12 p-5 border border-gray-300 rounded-lg shadow-sm text-center">
      <h2 className="mb-5">Login</h2>
      <form className="flex flex-col">
        <div className="mb-4 text-left">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input 
            type="email" 
            id="email" 
            className="w-full p-2.5 rounded border border-gray-300"
            autoComplete="email" 
            required 
          />
        </div>
        <div className="mb-4 text-left">
          <label htmlFor="password" className="block mb-1">Password:</label>
          <input 
            type="password" 
            id="password" 
            className="w-full p-2.5 rounded border border-gray-300"
            autoComplete="current-password" 
            required 
          />
        </div>
        <Button onClick={() => {}}>회원가입</Button>
        <Button onClick={() => {}}>로그인</Button>
        <Button onClick={() => {}}>아이디 찾기</Button>
      </form>
    </div>
  );
};

export default Login;