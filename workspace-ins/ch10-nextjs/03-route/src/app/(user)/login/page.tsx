import LoginForm from "@/app/(user)/login/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '로그인',
  description: '로그인 페이지입니다.'
}

// import { authenticate } from '@/app/lib/actions'
 
export default function LoginPage() {
  return (
    <>
      <h1>로그인</h1>
      <LoginForm />
    </>
  )
}