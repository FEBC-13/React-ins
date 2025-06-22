import useAxios from "@hooks/useAxios";
import useFetch from "@hooks/useFetch";
import { ClockLoader } from "react-spinners";

function App() {
  
  // const { data, error, isLoading } = useFetch({ url: '/todolist?delay=1000' });
  const { data, error, isLoading } = useAxios({ url: '/todolist?delay=1000' });

  return (
    <>
      <h1>10 customHook - useFatch, useAxios 커스텀 훅 사용</h1>
      <h2>할일 목록</h2>

      {/* 로딩중일 때 ClockLoader 컴포넌트 표시 */}
      { isLoading && 
        <ClockLoader />
      }

      {/* 에러가 있을 경우 빨간색으로 에러 메시지 표시 */}
      { error && <p style={{ color: 'red' }}>{ error.message }</p> }

      {/* Todo 목록을 리스트로 렌더링 */}
      <ul>
        { data?.items.map((item) => (
          <li key={item._id}>{item.title}</li>
        )) }
      </ul>
    </>
  );
}

export default App
