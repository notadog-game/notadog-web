import { requestService } from "./requestService";

export const getUsers = async () => {
  try {
    return await requestService.get("/users");
  } catch (e) {
    console.log("e :", e);
  }
};

export const login = async ({ email, password }) => {
  try {
    return await requestService.post("/users/login", { email, password });
  } catch (e) {
    throw new Error(e);
  }
};
