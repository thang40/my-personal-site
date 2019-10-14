import { useEffect, useState } from "react";
import { getBlogList } from "../services/hashnode.service";

export const useBlogList = (defaultValue = []) => {
  const [blogList, setBlogList] = useState(defaultValue);
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    let didCancel = false;
    const getBlogListWrapper = async () => {
      const list = await getBlogList();
      if (list && !didCancel) {
        setBlogList(list);
        setIsLoading(false);
      }
    };
    getBlogListWrapper();
    return () => {
      didCancel = true;
    };
  }, []);
  return [blogList, setBlogList, loading, setIsLoading];
};
