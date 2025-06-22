import axios from "axios";
import { useEffect, useState } from "react";

// API 서버 엔드포인트 주소 상수 정의
const API_SERVER = 'http://localhost/todo';
// const API_SERVER = 'https://fesp-api.koyeb.app/todo';
axios.defaults.baseURL = API_SERVER;
axios.defaults.timeout = 5000;

// fetch 함수 호출시 필요한 파라미터 타입 정의
interface FetchParams {
  url: string;
}

// Todo 아이템의 타입 정의
interface Todo {
  _id: number;      // Todo 아이템의 고유 식별자
  title: string;    // Todo 제목
  done: boolean;    // 완료 여부
}

// Todo 목록 조회 성공시 응답 데이터 타입 정의
interface TodoListRes {
  ok: 1;  // 성공 여부 (1: 성공)
  items: Todo[];  // Todo 아이템 배열
  pagination: {   // 페이지네이션 정보
    page: number;      // 현재 페이지
    limit: number;     // 페이지당 아이템 수
    total: number;     // 전체 아이템 수
    totalPages: number; // 전체 페이지 수
  };
}

function useAxios(fetchParams: FetchParams) {
  // 데이터를 저장할 상태 (초기값: null)
  const [data, setData] = useState<TodoListRes | null>(null);

  // 에러 메시지를 저장할 상태 (초기값: null)
  const [error, setError] = useState<Error | null>(null);
  
  // 로딩 상태를 저장할 상태 (초기값: true)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    requestFetch(fetchParams);
  }, []); // 빈 배열을 전달하여 마운트시 한번만 실행되도록 설정

  // Todo API 서버에 데이터를 요청하는 비동기 함수
  const requestFetch = async (params: FetchParams) => {
    console.log('requestFetch 함수 호출됨', fetchParams);
    try{
      // 로딩 상태를 true로 설정
      setIsLoading(true);
      
      // fetch API를 사용하여 서버에 GET 요청
      const jsonRes = await axios.get<TodoListRes>(params.url);
      console.log('서버 응답:', jsonRes);

      // Todo 목록 상태 업데이트
      setData(jsonRes.data);
    }catch(err){ // catch 문에서 에러의 타입은 unknown
      // 네트워크 오류 등 예외 발생시 처리
      console.error('에러 발생:', err);
      setError(err as Error);
      setData(null);
    }finally{
      // 성공/실패 여부와 관계없이 로딩 상태를 false로 설정
      setIsLoading(false);
    }
  };

  return { data, error, isLoading };
}

export default useAxios;