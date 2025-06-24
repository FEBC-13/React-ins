// 게시물 한건에 대한 타입
export interface BoardInfoType {
  _id: number;
  title: string;
  content: string;
  replies: ReplyType[];
}

export interface BoardInfoResType {
  ok: boolean;
  item: BoardInfoType;
}

export interface ReplyType {
  _id: number;
  content: string;
}

export interface ReplyResType {
  ok: boolean;
  item: ReplyType[];
}