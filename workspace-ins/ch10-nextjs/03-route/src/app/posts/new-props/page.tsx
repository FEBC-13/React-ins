import RegistForm from "@/app/posts/new-props/RegistForm";
import { PostInfoRes } from "@/types/board";
import { Metadata } from "next";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: '게시글 등록',
  description: '게시글 등록 페이지입니다.'
}

export default function NewPage() {

  async function createPost(prevState: PostInfoRes | null, formData: FormData): Promise<PostInfoRes> {
    'use server';
    
    const title = formData.get('title');
    const content = formData.get('content');
    const res = await fetch('https://fesp-api.koyeb.app/market/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content, type: 'test' }),
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': 'openmarket',
      },
    });
    const data = await res.json();
    if(data.ok){
      revalidatePath('/posts');
      redirect('/posts');
    }
    return data;
  }

  return (
    <>
      <h1>게시글 등록</h1>
      <RegistForm createPost={ createPost }/>
    </>    
  );
}