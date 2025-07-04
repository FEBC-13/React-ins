'use client';

import { signInWithCredentials } from "@/data/actions/authAction";

export default function LoginForm() {
  return (
    <form >
      <input type="email" name="email" placeholder="이메일" required />
      <input type="password" name="password" placeholder="비밀번호" required />

      <button type="submit" formAction={ signInWithCredentials }>로그인</button>
      {/* <button type="submit" formAction={ signInWithGithub }>깃허브</button>
      <button type="submit" formAction={ signInWithGoogle }>구글</button> */}

    </form>
  );
}