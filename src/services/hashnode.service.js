import axios from "axios";
import { commonErrorParser } from "../utils/errorHandler.util";

const hashnodeAxios = axios.create({
  baseURL: "https://api.hashnode.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "7cca50ac-d08f-4ca0-a77e-655cb8cc7d94"
  }
});

export const getBlogList = async () => {
  try {
    const res = await hashnodeAxios.post("", {
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
    });
    const publication = res.data.data.user.publication;
    return publication === null ? [] : publication.posts;
  } catch (error) {
    throw new Error(commonErrorParser(error));
  }
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
    const errors = res.data.errors;
    if (errors) {
      throw new Error(JSON.stringify(errors));
    }
    return post === null ? undefined : post;
  } catch (error) {
    throw new Error(commonErrorParser(error));
  }
};
