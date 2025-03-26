"use client";

import { createComment } from "@/data/comments/requests";
import { Comment } from "@/data/comments/types";
import { useAuthContext } from "@/util/authProvider";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FC, useState } from "react";
import { Button } from "../Button";
import { Pill } from "../Pill";
import { TextArea } from "../TextArea";
import { VotePill } from "../VotePill";

interface CommentPillsProps {
  comment: Comment;
  postId: string;
}

export const CommentPills: FC<CommentPillsProps> = ({ comment, postId }) => {
  const { user, token } = useAuthContext();

  const [replyIsOpen, setReplyIsOpen] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      <div className="flex flex-row flex-start basis-auto p-1 gap-1 w-auto">
        <VotePill
          netVotes={comment._count.upvotes - comment._count.downvotes}
        />
        <div
          className="hover:cursor-pointer"
          onClick={() => {
            setReplyIsOpen(!replyIsOpen);
          }}
        >
          <Pill icon={faComment} text="Reply" />
        </div>
      </div>
      {replyIsOpen && (
        <>
          <TextArea
            id="subommentInput"
            name="subcommentInput"
            onChange={(e) => {
              setReplyText(e.target.value);
            }}
            placeholder="Reply"
            value={replyText}
            rows={2}
          />
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex flex-row justify-end">
            <Button
              disabled={isLoading}
              onClick={() => {
                setReplyText("");
                setReplyIsOpen(false);
              }}
              theme="dark"
            >
              Cancel
            </Button>
            <Button
              disabled={isLoading}
              onClick={async () => {
                setIsLoading(true);
                if (user && token) {
                  try {
                    await createComment(
                      {
                        createdByUserId: user?.id ?? "",
                        postId: postId,
                        text: replyText,
                        parentCommentId: comment.id,
                      },
                      token,
                    );
                    location.reload();
                  } catch {
                    setError("There was an issue saving your comment.");
                  }
                }
                setIsLoading(false);
              }}
              theme="primary"
            >
              Comment
            </Button>
          </div>
        </>
      )}
    </>
  );
};
