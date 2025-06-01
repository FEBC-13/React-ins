import { useEffect, useState } from "react";

const API_SERVER = 'https://todo-api.fesp.shop/api';

function useFetch(fetchParams){
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
      
      const res = await fetch(API_SERVER + params.url);
      console.log(res);
      const jsonData = await res.json();
      console.log(jsonData);
      
      if(jsonData.ok){
        setError(null);
        setData(jsonData);
      }else{
        throw new Error(jsonData.error.message);
      }
    }catch(err){
      // 에러 처리
      console.error(err);
      setError(err);
      setData(null);
    }finally{
      setIsLoading(false);
    }
  };
  
  return { isLoading, data, error };
}

export default useFetch;