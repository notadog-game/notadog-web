import { requestService } from "./request";

export const getUsers = async () => {
  try {
    return await requestService.get("/users");
  } catch (err) {
    throw new Error(err.message);
  }
};

export const login = async ({ email, password }) => {
  try {
    return await requestService.post("/Users/login", { email, password });
  } catch (err) {
    throw new Error(err.message);
  }
};

export const signup = async ({ name, email, password }) => {
  try {
    return await requestService.post("/Users/signup", {
      name,
      email,
      password,
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

export const createGame = async () => {
  try {
    await requestService.post("/Game");
  } catch (err) {
    throw new Error(err.message);
  }
};

export const connectToPublicGame = async ({ playersMaxCount }) => {
  try {
    await requestService.put("/Game/Public", { playersMaxCount });
  } catch (err) {
    throw new Error(err.message);
  }
};

export const connectToPrivateGame = async ({ forceAdding, roomId }) => {
  try {
    await requestService.put("/Game/Private", { forceAdding, roomId });
  } catch (err) {
    throw new Error(err.message);
  }
};

export const updateProfile = async ({ name, email, password }) => {
  try {
    await requestService.put("/Profile", {
      name,
      email,
      password,
    });
  } catch (err) {
    throw new Error(err.message);
  }
};
