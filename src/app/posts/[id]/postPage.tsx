import { CommentCard } from "@/components/CommentCard";
import { Pill } from "@/components/Pill";
import { Comment } from "@/data/comments/types";
import { Post } from "@/data/posts/types";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import Link from "next/link";
import { FC } from "react";
import { CommentInput } from "./commentInput";

interface PostPageProps {
  post: Post;
}

const mapComments = (comments: Comment[]): Comment[] => {
  const map = new Map();
  const roots = [];

  for (const item of comments) {
    map.set(item.id, { ...item, subComments: [] });
  }

  for (const item of comments) {
    const node = map.get(item.id);
    if (item.parentCommentId === null) {
      roots.push(node);
    } else {
      const parentNode = map.get(item.parentCommentId);
      if (parentNode) {
        parentNode.subComments.push(node);
      }
    }
  }

  return roots;
};

export const PostPage: FC<PostPageProps> = ({ post }) => {
  const comments = mapComments(post.comments);
  return (
    <>
      <p className="text-sm">
        <Link className="hover:text-gray-300" href={`/boards/${post.boardId}`}>
          {post.board.title}
        </Link>{" "}
        - {moment(post.createdAt).fromNow()}
      </p>
      <p className="text-sm">{post.createdBy.username}</p>
      <p className="text-3xl">{post.title}</p>
      <p className="text-md">{post.description}</p>
      <div className="flex flex-row justify-start">
        <div className="flex flex-row flex-start basis-auto p-1 rounded-3xl bg-gray-100 dark:bg-gray-700 w-auto">
          <Pill text={post._count.comments} icon={faComment} />
        </div>
      </div>
      <CommentInput postId={post.id} />
      <CommentCard comments={comments} postId={post.id} />
    </>
  );
};
