import axios from "axios";

export const baseURL = axios.create({
  baseURL: "https://saeedwebdev.ir/api/",
});
