import { Metadata } from "next";

export const metadata: Metadata = {
  title: '회원 가입',
  description: '회원 가입 페이지입니다.'
}

export default function SignupPage() {
  return (
    <>
      <h1>회원 가입</h1>
      <form>
        <input type="email" name="email" placeholder="이메일" />
        <input type="password" name="password" placeholder="비밀번호" />
        <input type="text" name="name" placeholder="이름" />
        <button type="submit">회원 가입</button>
      </form>
    </>
  );
}