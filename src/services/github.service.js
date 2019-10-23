import axios from "axios";
import { axiosErrorHandler } from "../utils/errorHandler.utils";

const githubAxios = axios.create({
  baseURL: "https://api.github.com/repos/thang40/my-personal-site",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});

export const getCommits = async () => {
  try {
    const res = await githubAxios.get("/commits?per_page=3");
    const { data } = res;
    return data;
  } catch (error) {
    axiosErrorHandler(error);
  }
};
