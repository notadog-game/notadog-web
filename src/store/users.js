import { writable } from "svelte/store";
import { getUsers } from "../services/api";
import { handleError } from "../services/errors";

function createUsers() {
  const { subscribe, set } = writable([]);

  return {
    subscribe,
    load: async () => {
      try {
        const users = await getUsers();
        set(users);
      } catch (e) {
        handleError(e);
      }
    },
    reset: () => set([]),
  };
}

export const users = createUsers();
