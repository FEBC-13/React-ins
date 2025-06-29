import Image from "next/image";

export default function LoginInfo() {
  return (
    <form action="/">
      <p className="flex items-center">
        <Image 
          className="w-8 rounded-full mr-2" 
          src="https://fesp-api.koyeb.app/market/files/openmarket/user-muzi.png"
          alt="용쌤 프로필 이미지"
          width="32"
          height="32"
        />
        용쌤님 :)
        <button type="submit" className="bg-gray-900 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">로그아웃</button>
      </p>
    </form>
  );
}