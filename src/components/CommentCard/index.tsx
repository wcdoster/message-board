import { Comment } from "@/data/comments/types";
import moment from "moment";
import { FC } from "react";
import { CommentPills } from "./commentPills";

interface CommentCardProps {
  comments: Comment[];
  postId: string;
}

export const CommentCard: FC<CommentCardProps> = ({ comments, postId }) => {
  return (
    <div className="pl-2">
      {comments.map((x, i) => (
        <div className="my-8" key={i}>
          <p className="text-sm">
            {x.createdBy.username} - {moment(x.createdAt).fromNow()}
          </p>
          <p>{x.text}</p>
          <CommentPills comment={x} postId={postId} />
          {x.subComments && (x.subComments?.length ?? 0) > 0 && (
            <div className="border-l border-l-gray-400 ml-8">
              <CommentCard comments={x.subComments} postId={postId} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
