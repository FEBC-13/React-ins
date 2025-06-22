import useAxiosInstance from "@/hooks/useAxiosInstance";
import type { TodoItem } from "@/pages/TodoInfo";
import TodoListItem from "@/pages/TodoListItem";
import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router";

interface TodoList {
  items: TodoItem[];
}

function TodoList() {
  const axios = useAxiosInstance();

  const [data, setData] = useState<TodoList | null>(null);

  // 쿼리 스트링 정보를 읽거나 설정
  // /list?page=1&keyword=hello => new URLSearchParams('page=1&keyword=hello');
  const [searchParams, setSearchParams] = useSearchParams();

  const params = {
    keyword: searchParams.get('keyword') || '',
    page: searchParams.get('page') || 1,
    limit: 3, // 한 페이지에 3개씩
  };

  // 검색어
  const searchRef = useRef<HTMLInputElement>(null);

  // 삭제 후에 목록 조회해야 하므로 fetchData 함수로 만듬
  const fetchList = async () => {
    // TODO: API 서버에 목록 조회 요청
    console.log('목록 조회 API 호출');

    try{
      const res = await axios.get<TodoList>('/todolist', { params });
      setData(res.data);
    }catch(err){
      console.error(err);
      alert('할일 목록 조회에 실패했습니다.');
    }

    // setData(dummyData);

  }

  useEffect(() => {
    console.log('searchParams', searchParams);
    fetchList();
  }, [searchParams]); // 마운트된 후에 한번만 호출

  // 삭제 작업
  const handleDelete = async (_id: number) => {
    try{
      // TODO API 서버에 삭제 요청
      console.log('할일 삭제 API 호출', _id);
      const res = await axios.delete(`/todolist/${ _id }`);
      console.log(res.data);
  
      alert('할일이 삭제 되었습니다.');

      // TODO API 서버에서 목록을 다시 조회
      fetchList();

    }catch(err){
      console.error(err);
      alert('할일 삭제에 실패했습니다.');
    }
  };

  // 검색버튼 클릭
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams(new URLSearchParams(`keyword=${searchRef.current?.value}`));
  }

  const itemList = data?.items.map(item => <TodoListItem key={ item._id } item={ item } handleDelete={ handleDelete } />);

  return (
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <Link to="/add">추가</Link>
        <br />
        <form className="search" onSubmit={ handleSearch }>
          <input type="text" autoFocus ref={ searchRef } defaultValue={ params.keyword } />
          <button type="submit">검색</button>
        </form>
        <ul className="todolist">
          { itemList }
        </ul>
      </div>
    </div>
  );
}

export default TodoList;