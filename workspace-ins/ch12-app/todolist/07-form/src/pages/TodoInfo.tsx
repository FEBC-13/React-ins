import useAxiosInstance from "@/hooks/useAxiosInstance";
import { useEffect, useState } from "react";
import { Link, Outlet, useMatch, useParams } from "react-router";

export interface TodoItem {
  _id: number;
  title: string;
  content?: string;
  done: boolean;
  important?: boolean;
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
  const axios = useAxiosInstance();
  // URL의 파라미터 추출
  // 라우터에 'list/:_id'로 등록된 컴포넌트가 호출되는 경우
  // URL이 list/3일 때 useParams()는 { _id: 3 }을 반환
  const { _id } = useParams();
  console.log(_id);

  const infoMatch = useMatch('/list/:_id');

  const [ item, setItem ] = useState<TodoItem | null>(null);

  const fetchData = async () => {
    // TODO: API 서버에서 상세 정보 조회
    console.log('상세 정보 조회 API 호출', _id);

    try{
      const res = await axios.get<{item: TodoItem}>(`/todolist/${ _id }`);
      setItem(res.data.item);
    }catch(err){
      console.error(err);
      alert('할일 상세 정보 조회에 실패했습니다.');
    }

    // setItem(dummyData);
  }

  useEffect(() => {
    fetchData();
  }, []);

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