import { useEffect, useState } from "react";
import axios from 'axios';

axios.defaults.baseURL = 'https://todo-api.fesp.shop/api';
axios.defaults.timeout = 1500;

function useAxios(fetchParams){
  // 할일 목록
  const [data, setData] = useState(null);
  // 에러 메세지
  const [error, setError] = useState();
  // 로딩중 상태
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    request(fetchParams);
  }, []); // 마운트때 한번만 호출됨

  // API 서버에 ajax 요청을 보낸다.
  const request = async (params) => {
    try{
      setIsLoading(true);
      
      const res = await axios(params.url);
      console.log(res);
      
      setError(null);
      setData(res.data);
    }catch(err){
      // 에러 처리
      console.error(err.message);
      setError({ message: '일시적인 문제로 인해 작업에 실패했습니다. 잠시 후 다시 요청해 주시기 바랍니다.' });
      setData(null);
    }finally{
      setIsLoading(false);
    }
  };
  
  return { isLoading, data, error };
}

export default useAxios;