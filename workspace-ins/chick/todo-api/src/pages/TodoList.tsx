import { useEffect, useState } from "react";
import useAxiosInstance from "../hooks/useAxiosInstance";
import TodoItem, { type TodoItem as TodoItemType } from "./TodoItem";

interface TodoListPropType {
  itemList: TodoItemType[];
  deleteItem: (_id: number) => void;
  toggleDone: (_id: number) => void;
}

function TodoList({ deleteItem, toggleDone }: TodoListPropType) {

  const axiosInstance = useAxiosInstance();

  const [ list, setList ] = useState<TodoItemType[]>([]);

  const fetchList = async () => {
    try{
      const res = await axiosInstance.get('/todolist');
      // fulfilled 상태
      console.log('서버의 응답', res);
      setList(res.data.items);
    }catch(err){
      // rejected 상태
      console.error(err);
    }
  };

  useEffect(() => {
    fetchList();
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  const liList = list.map((item) => {
    return (
      <TodoItem key={ item._id } item={ item } deleteItem={ deleteItem } toggleDone={ toggleDone } fetchList={ fetchList } />
    );
  });

  return (
    <ul className="todolist">
      { liList }
    </ul>
  );
}

export default TodoList;