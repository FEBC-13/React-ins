import useAxios from "@hooks/useAxios";
import useFetch from "@hooks/useFetch";
import { ClockLoader } from "react-spinners";

function App() {

  // const { data, error, isLoading } = useFetch({
  //   url: '/todolist?delay=1000'
  // });

  const { data, error, isLoading } = useAxios({
    url: '/todolist?delay=1000'
  });

  return (
    <>
      <h1>09 Custom Hook - useFatch, useAxios 커스텀 훅 사용</h1>
      <h2>할일 목록</h2>

      { isLoading &&
        <ClockLoader />
      }

      { error && 
        <p style={{ color: 'red' }}>{ error.message }</p>
      }
      
      { data && (
        <ul>
          { data.items.map(item => <li key={ item._id }>{ item.title }</li>) }
        </ul>
      ) }
    </>
  );
}

export default App
