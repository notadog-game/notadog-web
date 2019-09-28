import { writable } from "svelte/store";
import { getUsers } from "../services/api";
import { globalErrorsHandler } from "../store/errors";

function createUsersStore() {
  const { subscribe, set } = writable([]);

  return {
    subscribe,
    set: users => set(users),
    reset: () => set([]),
  };
}

export const users = createUsersStore();

export const loadUsersAction = async () => {
  try {
    const items = await getUsers();
    users.set(items);
  } catch (err) {
    globalErrorsHandler(err);
  }
};
