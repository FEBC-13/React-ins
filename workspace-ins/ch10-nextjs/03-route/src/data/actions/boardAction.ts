'use server';

import { PostInfoRes } from "@/types/board";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(prevState: PostInfoRes, formData: FormData) {
  console.log('createPost', formData);
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
  console.log('API 호출 결과', data);
  if(data.ok){
    // revalidatePath('/posts');
    revalidateTag('list');
    redirect('/posts');
  }
  return data;
}


