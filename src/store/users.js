import { writable } from "svelte/store";

function createUsers() {
  const { subscribe, set } = writable([]);

  return {
    subscribe,
    set: users => set(users),
    reset: () => set([]),
  };
}

export const users = createUsers();
