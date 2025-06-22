import axios from "axios";

const API_SERVER = 'http://localhost/todo';
// const API_SERVER = 'https://fesp-api.koyeb.app/todo';

function useAxiosInstance(){
  const instance = axios.create({
    baseURL: API_SERVER, // 기본 URL
    timeout: 1000*5,
    headers: {
      'Content-Type': 'application/json', // 요청 바디의 데이터 타입
      // response의 데이터 타입
      // 설정하지 않으면 크롬은 application/json, text/plain, */*
      //   JSON 형식의 응답을 선호
      //   일반 텍스트 형식도 허용
      //   모든 미디어 타입을 허용 (최후의 선택)
      Accept: 'application/json'
    }
  });

  return instance;
}

export default useAxiosInstance;