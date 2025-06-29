import LoginInfo from "@/components/common/LoginInfo";
import MainMenu from "@/components/common/MainMenu";
import Theme from "@/components/common/Theme";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-8 min-w-80 bg-slate-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 transition-color duration-500 ease-in-out">
      <nav className="flex flex-wrap justify-center items-center p-4 md:flex-nowrap md:justify-between">
        <div className="w-1/2 order-1 md:w-auto">
          <Link href="/" className="flex items-center gap-2">
            <Image className="mr-3 h-6 w-auto sm:h-9" src="/images/favicon.svg" width="24" height="24" alt="로고 이미지" />
            <span className="text-lg font-bold">라이언 보드 v.02</span>
          </Link>
        </div>
        
        <MainMenu />

        <div className="w-1/2 order-1 flex justify-end items-center md:order-2 md:w-auto">

          {/* <LoginInfo /> */}

          <div className="flex justify-end">
            <Link href="/user/login" className="bg-orange-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">로그인</Link>
            <Link href="/user/signup" className="bg-gray-900 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">회원가입</Link>
          </div>

          <Theme />

        </div>
      </nav>
    </header>
  );
}