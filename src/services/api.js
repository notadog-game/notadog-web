import { requestService } from "./request";

export const getUsers = async () => {
  return await requestService.get("/users");
};

export const login = async ({ email, password }) => {
  return await requestService.post("/Users/login", { email, password });
};

export const signup = async ({ name, email, password }) => {
  return await requestService.post("/Users/signup", {
    name,
    email,
    password,
  });
};

export const createGame = async () => requestService.post("/Game");

export const connectToPublicGame = async ({ playersMaxCount }) =>
  await requestService.put("/Game/Public", { playersMaxCount });

export const connectToPrivateGame = async ({ forceAdding, roomId }) =>
  await requestService.put("/Game/Private", { forceAdding, roomId });

export const updateProfile = async ({ name, email, password }) =>
  await requestService.put("/Profile", {
    name,
    email,
    password,
  });
