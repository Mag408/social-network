import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "057859b6-03b9-43df-8369-90a969a06c40",
  },
});

export const userApi = {
  getUsers: (currentPage: number = 1, pageSize: number = 5) => {
    return instance
      .get(`/users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },
  follow: (userId: number) => {
    return instance.delete(`/follow/${userId}`);
  },
  unfollow: (userId: number) => {
    return instance.post(`/follow/${userId}`);
  },
  getProfile: (userId: number) => {
    return instance.get(`/profile/${userId}`);
  },
};

export const authAPI = {
  me: () => {
    return instance.get(`/auth/me`);
  },
};
