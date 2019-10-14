import { useEffect, useState } from "react";
import { getBlogList } from "../services/hashnode.service";
import { HTTPTimeoutError } from "../commons/types/errors";

export const useBlogList = (defaultValue = []) => {
  const [blogList, setBlogList] = useState(defaultValue);
  const [loading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    let didCancel = false;
    const getBlogListWrapper = async () => {
      try {
        const list = await getBlogList();
        if (list && !didCancel) {
          setBlogList(list);
          setIsLoading(false);
        }
      } catch (error) {
        if (error instanceof HTTPTimeoutError) {
          setErrorMsg("Oi, I think your network is down or something!! 😢");
        } else {
          throw error;
        }
      }
    };
    getBlogListWrapper();
    return () => {
      didCancel = true;
    };
  }, []);
  return [blogList, loading, errorMsg];
};
