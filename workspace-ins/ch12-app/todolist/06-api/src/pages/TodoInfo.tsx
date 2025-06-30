import useAxiosInstance from "@/hooks/useAxiosInstance";
import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useMatch, useParams } from "react-router";

export interface TodoItem {
  _id: number;
  title: string;
  content?: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

const dummyData: TodoItem = {
  "_id": 5,
  "title": "임시 데이터",
  "content": "임시 데이터 입니다.",
  "done": true,
  "createdAt": "2025.06.15 16:49:00",
  "updatedAt": "2025.06.15 16:49:00"
};

function TodoInfo() {
  console.log('🎬 TodoInfo 컴포넌트 렌더링 시작');
  
  const axios = useAxiosInstance();
  // URL의 파라미터 추출
  // 라우터에 'list/:_id'로 등록된 컴포넌트가 호출되는 경우
  // URL이 list/3일 때 useParams()는 { _id: 3 }을 반환
  const { _id } = useParams();
  console.log(_id);

  const infoMatch = useMatch('/list/:_id');

  const [ item, setItem ] = useState<TodoItem | null>(null);
  // Promise 캐싱
  const promiseRef = useRef<Promise<TodoItem> | null>(null);

  // 1. 데이터 요청시 Promise를 throw 해서 Suspense 동작
  // 2. 데이터 요청 성공시 응답 데이터를 반환
  // 3. 데이터 요청 실패시 에러를 throw
  const fetchData = () => {
    console.log('🔄 fetchData 호출됨, item 상태:', item);
    console.log('promiseRef.current1', promiseRef.current);

    if (!item) {
      if (promiseRef.current) {
        // 이미 요청 중인 Promise가 있으면 그걸 throw
        throw promiseRef.current;
      }
      // 새 Promise 생성 및 캐싱
      console.log('상세 정보 조회 API 호출', _id);
      promiseRef.current = axios.get<{item: TodoItem}>(`/todolist/${ _id }?delay=1000`)
        .then(res => {
          setItem(res.data.item);
          // promiseRef.current = null; // 성공시 캐시 초기화
          return res.data.item;
        })
        .catch(err => {
          // promiseRef.current = null; // 실패시 캐시 초기화
          alert('할일 상세 정보 조회에 실패했습니다.');
          throw err;
        });
        console.log('promiseRef.current2', promiseRef.current);
      throw promiseRef.current;
    }
    
    console.log('✨ fetchData 끝 (조건 미만족)');
  }

  fetchData();

  useEffect(() => {
    console.log('마운트');
    return () => {
      console.log('언마운트');
    }
  }, []);

  // Suspense 미사용 코드
  // const fetchData = async () => {
  //   // TODO: API 서버에서 상세 정보 조회
  //   console.log('상세 정보 조회 API 호출', _id);

  //   try{
  //     const res = await axios.get<{item: TodoItem}>(`/todolist/${ _id }?delay=2000`);
  //     setItem(res.data.item);
  //   }catch(err){
  //     console.error(err);
  //     alert('할일 상세 정보 조회에 실패했습니다.');
  //   }

  //   // setItem(dummyData);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div id="main">
      <h2>할일 상세 보기</h2>

      { item && 
        <>
          <div className="todo">
            <div>제목 : { item.title }</div>
            <div>내용 : { item.content }</div>
            <div>상태 : { item.done ? '완료' : '미완료' }</div>
            <div>작성일 : { item.createdAt }</div>
            <div>수정일 : { item.updatedAt }</div>

            { infoMatch && 
              <>
                <Link to={`/list/${ item._id }/edit`}>수정</Link> 
                <Link to="/list">목록</Link>
              </>
            }
            
          </div>
          <Outlet context={{ item, refetch: fetchData }} />
        </>
      }
      
    </div>
  );
}

export default TodoInfo;