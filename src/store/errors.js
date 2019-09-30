import { writable } from "svelte/store";
import { ERRORS_CODES } from "../constants/errors";

function createErrorsStore() {
  const { subscribe, set } = writable(null);

  return {
    subscribe,
    set: message => set(message),
    reset: () => set(null),
  };
}

export const errors = createErrorsStore();

const errorCodeHandler = code => {
  const message = ERRORS_CODES[code || "Default"]();
  errors.set(message);
};

const errorStatusHandler = status => {
  errors.set(status);
};

const errorHandler = ({ message }) => {
  errors.set(message);
};

export const globalHubErrorsHandler = ({ message }) => {
  const error = JSON.parse(message.split("HubException: ")[1]);
  error.code ? errorCodeHandler(error.code) : errorHandler(error);
};

export const axiosMiddlewareErrorsHandler = error => {
  if (!error.response) return errorHandler(error);

  const { status, data } = error.response;
  data ? errorCodeHandler(data.code) : errorStatusHandler(status);
};
