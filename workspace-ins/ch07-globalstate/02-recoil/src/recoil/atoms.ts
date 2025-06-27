import { atom } from "recoil";
export const countState = atom({
  key: 'count', // atom 식별자. 모든 atom에서 고유해야 함
  default: 10 // 상태 초기값
});