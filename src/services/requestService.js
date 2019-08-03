import axios from "axios";
import { tokenService } from "./tokenService";
import { config } from "../config.js";

if (config.apiHost == "undefined") {
  console.error("Missing API host!");
}

const requestProvider = axios.create({
  baseURL: config.apiHost,
  timeout: 15000,
  headers: {
    Authorization: tokenService.get() || "",
    Accept: "application/json, text/plain",
    "Content-Type": "application/json",
  },
});

export class requestService {
  static get(url = "") {
    return this.handleResponse(requestProvider.get(url));
  }

  static delete(url = "") {
    return this.handleResponse(requestProvider.delete(url));
  }

  static post(url = "", data = {}) {
    return this.handleResponse(requestProvider.post(url, data));
  }

  static put(url = "", data = {}) {
    return this.handleResponse(requestProvider.put(url, data));
  }

  static handleResponse(promise) {
    return promise
      .then(res => res.data)
      .catch(e => {
        throw new Error(e);
      });
  }
}
