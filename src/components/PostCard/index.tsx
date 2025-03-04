import { Post } from "@/data/posts/types";
import moment from "moment";
import Link from "next/link";
import { FC } from "react";

interface PostCardProps {
  post: Post;
}

export const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <div className="border-t border-gray-500 py-2">
      <div className="rounded-xl hover:bg-gray-800 p-1">
        <Link
          href={`/posts/${post.id}`}
        >
          <p className="text-sm">
            {post.createdBy.username} - {moment(post.createdAt).fromNow()}
          </p>
          <p className="text-xl">{post.title}</p>
          <p className="text-sm">{post.description}</p>
        </Link>
      </div>
    </div>
  );
};
