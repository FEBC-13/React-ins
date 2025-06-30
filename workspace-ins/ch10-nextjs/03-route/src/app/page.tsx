import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home 페이지입니다.'
}

export default async function RootPage() {
  await new Promise(resolve => setTimeout(resolve, 1000*2));
  return (
    <h1>Home</h1>
  );
}
