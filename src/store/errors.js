import { writable } from "svelte/store";
import { ERRORS_CODES } from "../constants/errors";

function createErrorsStore() {
  const { subscribe, set } = writable([]);

  return {
    subscribe,
    set: ({ code, message }) => set({ [code]: message }),
    reset: () => set([]),
  };
}

export const errors = createErrorsStore();

const errorCodeHandler = code => {
  console.log("errorCodeHandler", ERRORS_CODES[code || "Default"]());
};

const errorStatusHandler = status => {
  console.log("errorStatusHandler", status);
};

export const globalHubErrorsHandler = ({ message }) => {
  const error = JSON.parse(message.split("HubException: ")[1]);
  return axiosMiddlewareErrorsHandler(error);
};

export const axiosMiddlewareErrorsHandler = ({ status, data }) => {
  data ? errorCodeHandler(data.code) : errorStatusHandler(status);
};
