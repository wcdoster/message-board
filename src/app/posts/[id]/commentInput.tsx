"use client";

import { Button } from "@/components/Button";
import { TextArea } from "@/components/TextArea";
import { createComment } from "@/data/comments/requests";
import { useAuthContext } from "@/util/authProvider";
import { FC, useState } from "react";

interface CommentInputProps {
  postId: string;
}

export const CommentInput: FC<CommentInputProps> = ({ postId }) => {
  const { user, token } = useAuthContext();
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!user) {
    return null;
  }

  return (
    <div className="m-2">
      <TextArea
        id="comment"
        name="comment"
        placeholder="Add comment"
        value={inputText}
        rows={4}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-row justify-end">
        <Button
          disabled={isLoading}
          onClick={() => {
            setInputText("");
            setError(null);
          }}
          theme="dark"
        >
          Cancel
        </Button>
        <Button
          disabled={isLoading}
          onClick={async () => {
            setError(null);
            setIsLoading(true);
            if (user && token) {
              try {
                await createComment(
                  {
                    createdByUserId: user?.id ?? "",
                    postId: postId,
                    text: inputText,
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
    </div>
  );
};
