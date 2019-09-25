import { requestService } from "./request";

export const getUsers = async () => {
  try {
    return await requestService.get("/users");
  } catch (e) {
    throw new Error(e);
  }
};

export const login = async ({ email, password }) => {
  try {
    return await requestService.post("/Users/login", { email, password });
  } catch (e) {
    throw new Error(e);
  }
};

export const signup = async ({ name, email, password }) => {
  try {
    return await requestService.post("/Users/signup", {
      name,
      email,
      password,
    });
  } catch (e) {
    throw new Error(e);
  }
};

export const createGame = async () => {
  try {
    return await requestService.post("/Game");
  } catch (e) {
    throw new Error(e);
  }
};

export const connectToPublicGame = async ({ playersMaxCount }) => {
  try {
    return await requestService.put("/Game/Public", { playersMaxCount });
  } catch (e) {
    throw new Error(e);
  }
};

export const connectToPrivateGame = async ({ forceAdding, roomId }) => {
  try {
    return await requestService.put("/Game/Private", { forceAdding, roomId });
  } catch (e) {
    throw new Error(e);
  }
};

export const updateProfile = async ({ name, email, password }) => {
  try {
    return await requestService.put("/Profile", {
      name,
      email,
      password,
    });
  } catch (e) {
    throw new Error(e);
  }
};
