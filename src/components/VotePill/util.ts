import {
  createUpvote,
  deleteDownvote,
  deleteUpvote,
} from "@/data/comments/requests";
import { useAuthContext } from "@/util/authProvider";
import { useCallback, useMemo, useState } from "react";

export const useVoteRequests = (commentId: string) => {
  const { user, token } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const upvote = useCallback(() => {
    setLoading(true);
    if (user && token) {
      try {
        createUpvote({ commentId: commentId, createdByUserId: user.id }, token);
        setLoading(false);
        location.reload();
      } catch {
        setLoading(false);
      }
    }
  }, [user, token, commentId]);

  const downvote = useCallback(() => {
    setLoading(true);
    if (user && token) {
      try {
        createUpvote({ commentId: commentId, createdByUserId: user.id }, token);
        setLoading(false);
        location.reload();
      } catch {
        setLoading(false);
      }
    }
  }, [user, token, commentId]);

  const removeUpvote = useCallback(() => {
    setLoading(true);
    if (user && token) {
      try {
        deleteUpvote({ commentId: commentId, createdByUserId: user.id }, token);
        setLoading(false);
        location.reload();
      } catch {
        setLoading(false);
      }
    }
  }, [user, token, commentId]);

  const removeDownvote = useCallback(() => {
    setLoading(true);
    if (user && token) {
      try {
        deleteDownvote(
          { commentId: commentId, createdByUserId: user.id },
          token,
        );
        setLoading(false);
        location.reload();
      } catch {
        setLoading(false);
      }
    }
  }, [user, token, commentId]);

  const userHasDownvote = useMemo(
    () => Boolean(user?.downvotes.find((x) => x.comment.id === commentId)),
    [commentId, user],
  );
  const userHasUpvote = useMemo(
    () => Boolean(user?.upvotes.find((x) => x.comment.id === commentId)),
    [commentId, user],
  );

  return {
    upvote,
    downvote,
    userHasDownvote,
    userHasUpvote,
    loading,
    removeUpvote,
    removeDownvote,
  };
};
