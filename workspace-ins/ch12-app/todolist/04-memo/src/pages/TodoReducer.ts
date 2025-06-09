import type { TodoItem } from "@pages/TodoItem";
import { produce } from "immer";

interface TodoReducerAction {
  type: 'ADD' | 'TOGGLE' | 'DELETE';
  value: TodoItem | { _id: number };
}

// state, action을 전달받고 새로운 state를 반환하는 순수 함수
function TodoReducer(state: TodoItem[], action: TodoReducerAction){
  const targetIndex = state.findIndex(item => item._id === action.value._id);
  let newState;

  switch(action.type){
    case 'ADD':
      newState = produce(state, (draft: TodoItem[]) => {
        draft.push(action.value as TodoItem);
      });
      break;
    case 'TOGGLE':
      newState = produce(state, (draft: TodoItem[]) => {
        draft[targetIndex].done = !draft[targetIndex].done;
      });
      break;
    case 'DELETE':
      newState = produce(state, (draft: TodoItem[]) => {
        draft.splice(targetIndex, 1);
      });
      break;
    default:
      newState = state;
  }
  return newState;
}

export default TodoReducer;