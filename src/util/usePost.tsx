import { useState } from "react";

export const usePostRequest = (req: () => Promise<void>) => {
  const [loading, setLoading] = useState(false);

  const callReq = async () => {
    setLoading(true);
    await req();
    setLoading(false);
  };

  return [callReq, { loading }];
};
