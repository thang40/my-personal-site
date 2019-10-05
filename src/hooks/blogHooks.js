import { useEffect, useState } from "react";
import { getBlogList } from "../services/hashnode.service";

export const useBlogList = (defaultValue = []) => {
  const [blogList, setBlogList] = useState(defaultValue);
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    const getBlogListWrapper = async () => {
      setBlogList(await getBlogList());
      setIsLoading(false);
    };
    getBlogListWrapper();
  }, []);
  return [blogList, setBlogList, loading, setIsLoading];
};
