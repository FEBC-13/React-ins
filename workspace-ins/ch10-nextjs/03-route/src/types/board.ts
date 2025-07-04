export interface Post {
  _id: number;
  title: string;
  content: string;
}

export interface PostList {
  posts: Post[];
}

export interface PostListRes { 
  ok: 0 | 1;
  item: PostList;
}

export interface PostInfoRes { 
  ok: 0 | 1;
  item: Post;
  errors?: {
    msg: string;
  }[];
}