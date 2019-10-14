import axios from "axios";
import { axiosErrorHandler } from "../utils/errorHandler.utils";

const hashnodeAxios = axios.create({
  baseURL: "https://api.hashnode.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "7cca50ac-d08f-4ca0-a77e-655cb8cc7d94"
  }
});

const cancelToken = axios.CancelToken;
const source = cancelToken.source();

export const getBlogList = async () => {
  try {
    const res = await hashnodeAxios.post(
      "",
      {
        query: `query {
          user(username: "thangle") {
            publication {
              posts(page:0){
                title
                cuid
                slug
                coverImage
                dateAdded
              }
            }
          }
        }`
      },
      { cancelToken: source.token }
    );
    const { data } = res;
    const publication = data.data.user.publication;
    return publication === null ? [] : publication.posts;
  } catch (error) {
    axiosErrorHandler(error);
  }
};

export const cancelGetBlogList = () => {
  source.cancel("getbloglist cancelled");
};

export const getBlogDetail = async id => {
  try {
    const res = await hashnodeAxios.post("", {
      query: `query {
          post(cuid: "${id}"){
            contentMarkdown,
            title,
            coverImage
          }
        }`
    });
    const post = res.data.data.post;
    return post === null ? undefined : post;
  } catch (error) {
    axiosErrorHandler(error);
  }
};
