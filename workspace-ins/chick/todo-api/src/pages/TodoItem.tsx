import useAxiosInstance from "../hooks/useAxiosInstance";

export interface TodoItem {
  _id: number;
  title: string;
  done: boolean;
}

interface TodoItemProps {
  item: TodoItem;
  deleteItem: (_id: number) => void;
  toggleDone: (_id: number) => void;
  fetchList: () => void;
}

function TodoItem({ item, toggleDone, fetchList }: TodoItemProps) {

  const axiosInstance = useAxiosInstance();

  const handleDelete = async (_id: number) => {
    console.log(_id, '삭제 요청.');
    
    
    try{
      const res = await axiosInstance.delete(`/todolist/${_id}`);
      // fulfilled 상태
      console.log('서버의 응답', res);
      fetchList();
    }catch(err){
      // rejected 상태
      console.error(err);
    }

    
  };

  return (
    <li>
      <span>{ item._id }</span>
      <span onClick={ () => toggleDone(item._id) }>{ item.done ? <s>{ item.title }</s> : item.title }</span>
      <button type="button" onClick={ () => handleDelete(item._id) }>삭제</button>
    </li>
  );
}

export default TodoItem;