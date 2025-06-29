import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About',
  description: 'About 페이지입니다.'
}

export default function AboutPage() {
  console.log('About 페이지 렌더링');
  return (
    <h1>About</h1>
  );
}