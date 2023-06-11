import axiosClient from "./axiosInstance";

const login = async ({ email, password, remember_me }) => {
  return await axiosClient.post("/auth/login", {
    email,
    password,
    remember_me,
  });
};

const getAllShop = async () => {
  return await axiosClient.get("/inforshop");
};

const getAllReview = async () => {
  return await axiosClient.get("/reviewfood");
};
export default {
  login,
  getAllShop,
  getAllReview,
};
