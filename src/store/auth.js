import { writable } from "svelte/store";
import { tokenService } from "../services/tokenService";
import { login } from "../services/api";

export const token = writable("");

export const getToken = async payload => {
  try {
    const token = await login(payload);
    tokenService.set(token);
    window.location.href = "/game";
  } catch (e) {
    console.log("e :", e);
  }
};
