import axios from "axios";
import { tokenService } from "./token";
import { config } from "../config.js";
import { axiosMiddlewareErrorsHandler } from "../store/errors";
import { progress } from "../store/progress";

if (config.apiHost == "undefined") {
  console.error("Missing API host!");
}

const requestProvider = axios.create({
  baseURL: config.apiHost,
  timeout: 15000,
  headers: {
    Authorization: `Bearer ${tokenService.get()}`,
    Accept: "application/json, text/plain",
    "Content-Type": "application/json",
  },
});

export class requestService {
  static get(url = "") {
    return requestProvider.get(url);
  }

  static delete(url = "") {
    return requestProvider.delete(url);
  }

  static post(url = "", data = {}) {
    return requestProvider.post(url, data);
  }

  static put(url = "", data = {}) {
    return requestProvider.put(url, data);
  }
}

requestProvider.interceptors.request.use(
  function(config) {
    progress.inc();
    return config;
  },
  function(error) {
    progress.dec();
    return Promise.reject(error);
  }
);

requestProvider.interceptors.response.use(
  res => {
    progress.dec();
    return res.data;
  },
  error => {
    progress.dec();
    axiosMiddlewareErrorsHandler(error);
    return Promise.reject(error);
  }
);
