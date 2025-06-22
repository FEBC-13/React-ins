import { useEffect, useState } from "react";
import { Link, Outlet, useMatch, useParams } from "react-router";

// TodoItem 인터페이스 정의 - 할일 정보의 타입을 지정
export interface TodoItem {
  _id: number;          // 할일 ID
  title: string;        // 제목
  content?: string;     // 내용 (선택적)
  done: boolean;        // 완료 여부
  createdAt: string;    // 생성일시
  updatedAt: string;    // 수정일시
}

// 임시 데이터 - API 연동 전까지 사용할 더미 데이터
const dummyData: TodoItem = {
  "_id": 5,
  "title": "임시 데이터",
  "content": "임시 데이터 입니다.",
  "done": true,
  "createdAt": "2025.06.15 16:49:00",
  "updatedAt": "2025.06.15 16:49:00"
};

function TodoInfo() {
  // URL의 파라미터 추출
  // 라우터에 'list/:_id'로 등록된 컴포넌트가 호출되는 경우
  // URL이 list/3일 때 useParams()는 { _id: 3 }을 반환
  const { _id } = useParams();

  // 현재 경로가 '/list/:_id'와 일치하는지 확인
  const infoMatch = useMatch('/list/:_id');

  // 할일 상세 정보를 저장할 상태
  const [ item, setItem ] = useState<TodoItem | null>(null);

  // API에서 할일 상세 정보를 가져오는 함수
  const fetchData = async () => {
    console.log('상세 정보 조회 API 호출', _id);
    // TODO: API 서버에서 상세 정보 조회
    

    // 임시로 더미 데이터 사용
    setItem(dummyData);
  }

  // 컴포넌트가 마운트될 때 데이터 조회
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="main">
      <h2>할일 상세 보기</h2>

      { /* 할일 정보가 있는 경우에만 표시 */ }
      { item && 
        <>
          <div className="todo">
            <div>제목 : { item.title }</div>
            <div>내용 : { item.content }</div>
            <div>상태 : { item.done ? '완료' : '미완료' }</div>
            <div>작성일 : { item.createdAt }</div>
            <div>수정일 : { item.updatedAt }</div>

            { /* 상세 보기 화면일 때만 수정/목록 링크 표시 */ }
            { infoMatch && 
              <>
                <Link to={`/list/${ item._id }/edit`}>수정</Link> 
                <Link to="/list">목록</Link>
              </>
            }
            
          </div>
          { /* 중첩된 라우트의 컴포넌트를 표시하고 할일 정보를 전달 */ }
          <Outlet context={{ item }} />
        </>
      }
      
    </div>
  );
}

export default TodoInfo;