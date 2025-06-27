import Login from "@pages/auth/Login";
import Button from "@components/ui/Button";

function App(){
  return (
    <>
      <h1 className="text-2xl font-bold my-5 bg-gray-600 text-sky-200">04 Tailwind CSS</h1>

      <div className="w-80 mx-auto my-2.5">
        <Button onClick={() => {}}>그냥 버튼</Button>
        <Button onClick={() => {}} color="blue">파란 배경의 빨간 버튼</Button>
        <Button onClick={() => {}} color="yellow">노란 배경의 빨간 버튼</Button>
        <Button onClick={() => {}} color="lightgray">회색 배경의 파간 버튼</Button>
      </div>
      
      <Login />
    </>
  );
}

export default App;