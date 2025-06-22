import type { TodoItem } from "@/pages/TodoInfo";
import { Link } from "react-router";
import { useActionState } from "react";
import { SubmitButton } from "@/components/common/Button2";

interface TodoListItemProps {
  item: TodoItem;
  handleDelete: (id: number) => void;
  handleToggleImportant: (id: number) => void;
}

function TodoListItem({ item, handleDelete, handleToggleImportant }: TodoListItemProps) {
  // 중요도 토글 액션
  const toggleImportantAction = async () => {
    await handleToggleImportant(item._id);
  };

  // 삭제 액션
  const deleteAction = async () => {
    if (confirm('정말 삭제하시겠습니까?')) {
      await handleDelete(item._id);
    }
  };

  return (
    <li>
      <span>{ item._id }</span>
      
      {/* 중요도 토글 form */}
      <form 
        action={toggleImportantAction}
        style={{ display: 'inline-block', margin: '0 4px' }}
      >
        <SubmitButton
          style={{ 
            background: 'none', 
            border: 'none', 
            fontSize: '16px',
            padding: '2px 4px',
          }}
          title={item.important ? '중요도 해제' : '중요도 설정'}
        >
          { item.important ? '❤️' : '🤍' }
        </SubmitButton>
      </form>

      <Link to={`/list/${ item._id }`}>{ item.done ? <s>{ item.title }</s> : item.title }</Link>
      
      {/* 삭제 form */}
      <form 
        action={deleteAction}
        style={{ display: 'inline-block', margin: '0 4px' }}
      >
        <SubmitButton color="red">삭제</SubmitButton>
      </form>
    </li>
  );
}

export default TodoListItem;