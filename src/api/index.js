import axios from "axios";

export const api = axios.create({
  baseURL: "https://randomuser.me/api/",
});

export async function apiGet(page) {
  try {
    const { data } = await api.get(`?page=${page}&results=50&seed=abc`);
    return data;
  } catch (err) {
    return err.message;
  }
}
