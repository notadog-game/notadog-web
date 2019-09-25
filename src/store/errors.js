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
  console.log("errorCodeHandler", ERRORS_CODES[code]());
};

const errorHandler = error => {
  console.log("errorHandler", error);
};

export const globalErrorsHandler = error =>
  error.Code ? errorCodeHandler(error.Code) : errorHandler(error);

export const globalHubErrorsHandler = ({ message }) => {
  const error = JSON.parse(message.split("HubException: ")[1]);
  return globalErrorsHandler(error);
};
