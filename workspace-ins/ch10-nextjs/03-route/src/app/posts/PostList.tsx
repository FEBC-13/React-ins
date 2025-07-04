import { fetchPosts } from "@/data/functions/boardFetch";
import Link from "next/link";

export default async function PostList() {
  const data = await fetchPosts();
  const posts = data.map(post => <li key={ post._id }><Link prefetch={false} href={`/posts/${post._id}`}>{ post._id } - { post.title }</Link></li>);
  return (
    <ul>
      { posts }
    </ul>
  );
}