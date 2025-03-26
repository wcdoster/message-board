import { Post } from "@/data/posts/types";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import Link from "next/link";
import { FC } from "react";
import { Pill } from "../Pill";

interface PostCardProps {
  post: Post;
}

export const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <div className="border-t border-gray-500 py-2">
      <div className="rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 p-1">
        <Link href={`/posts/${post.id}`}>
          <p className="text-sm">
            {post.createdBy.username} - {moment(post.createdAt).fromNow()}
          </p>
          <p className="text-xl">{post.title}</p>
          <p className="text-sm">{post.description}</p>
          <div className="flex flex-row flex-start my-2">
            <div className="flex flex-row flex-start basis-auto p-1 rounded-3xl bg-gray-100 dark:bg-gray-700 w-auto">
              <Pill text={post._count.comments} icon={faComment} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
