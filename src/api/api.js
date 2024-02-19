import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "057859b6-03b9-43df-8369-90a969a06c40",
  },
});

export const userApi = {
  getUsers: (currentPage = 1, pageSize = 5) => {
    return instance
      .get(`/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((res) => res.data);
  },
};
