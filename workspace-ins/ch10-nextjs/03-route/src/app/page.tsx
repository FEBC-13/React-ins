import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home2',
  description: 'Home 페이지입니다.'
}

export default async function RootPage() {
  
  return (
    <h1>Home</h1>
  );
}
