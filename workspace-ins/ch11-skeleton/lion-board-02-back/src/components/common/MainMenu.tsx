import Link from "next/link";

export default function MainMenu() {
  return (
    <div className="w-auto order-2 text-base mt-4 md:mt-0">
      <ul className="flex items-center gap-6 uppercase">
        <li className="hover:text-amber-500 hover:font-semibold"><Link href="/info">정보공유</Link></li>
        <li className="hover:text-amber-500 hover:font-semibold"><Link href="/info">자유게시판</Link></li>
        <li className="hover:text-amber-500 hover:font-semibold"><Link href="/info">질문게시판</Link></li>
      </ul>
    </div>
  );
}