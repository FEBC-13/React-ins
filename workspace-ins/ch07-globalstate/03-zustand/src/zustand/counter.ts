import { create } from "zustand";

interface CounterState {
  count: number;
  name: string;
  countDown: (step: number) => void;
  countReset: () => void;
  countUp: (step: number) => void;
  getCount: () => number;
}

// get()을 호출하면 create() 함수의 인자값으로 전달한 함수의 리턴값을 반환(상태값)
const useCounterStore = create<CounterState>((set, get) => ({
  // 상태값 초기화
  count: 5, 
  name: 'Zustand',

  // set()의 인자값으로 새로운 상태를 지정(count 값만 가진 객체를 지정하면 count만 변경되고 다른 상태값은 변경되지 않음)
  countReset: () => set({ count: 0 }),

  // get()으로 현재 상태를 꺼내서 새로운 상태를 지정
  // countDown: (step) => {
  //   const newState = { count: get().count - step };
  //   set(newState);
  // },
  countDown: (step) => set({ count: get().count - step }),

  // set()에 전달한 함수의 인자값으로 현재 상태를 꺼내서 새로운 상태를 지정
  // countUp: (step) => {
  //   set((state) => {
  //     return { count: state.count + step };
  //   });
  // },
  // countUp: (step) => set((state) => ({ count: state.count + step })),

  // count 10 단위로 달성시 보너스 1 추가
  countUp: (step: number) => {
    let newCount = get().count + step;
    if(newCount % 10 === 0){ 
      newCount++;
    }
    set({ count: newCount });
  },

  // 현재 상태값을 반환하는 함수
  getCount: () => get().count,
}));

export default useCounterStore;