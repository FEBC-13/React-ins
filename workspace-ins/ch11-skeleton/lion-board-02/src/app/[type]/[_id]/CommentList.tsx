import CommentItem from "@/app/[type]/[_id]/CommentItem";
import CommentNew from "@/app/[type]/[_id]/CommentNew";

export default function CommentList() {
  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 2개</h4>

      <CommentItem />
      <CommentItem />

      <CommentNew />

    </section>
  );
}