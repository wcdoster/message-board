"use client";

import { Button } from "@/components/Button";
import { TextArea } from "@/components/TextArea";
import { TextInput } from "@/components/TextInput";
import { createPost } from "@/data/posts/requests";
import { useAuthContext } from "@/util/authProvider";
import { useRouter } from "next/navigation";
import { FC, useMemo, useState } from "react";

interface CreatePostFormProps {
  boardId: string;
}

export const CreatePostForm: FC<CreatePostFormProps> = ({ boardId }) => {
  const { user, token } = useAuthContext();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const isValid = useMemo(
    () => Boolean(title.length) && Boolean(body.length),
    [title, body],
  );

  const handleSubmit = async (): Promise<void> => {
    setError(null);
    setLoading(true);
    try {
      if (user && token) {
        const post = await createPost(
          { boardId, createdByUserId: user.id, description: body, title },
          token,
        );
        router.push(`/posts/${post.id}`);
      }
    } catch {
      setError("There was an issue. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl flex flex-col justify-start gap-4 mt-4">
      <TextInput
        id="title"
        name="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Title"
        value={title}
      />
      <TextArea
        id="body"
        name="body"
        onChange={(e) => {
          setBody(e.target.value);
        }}
        placeholder="Body"
        value={body}
      />
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-row justify-end">
        <Button
          disabled={!isValid || !user || loading}
          onClick={handleSubmit}
          theme="primary"
        >
          Post
        </Button>
      </div>
    </div>
  );
};
