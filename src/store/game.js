import { writable } from "svelte/store";

function createGameStore() {
  const { subscribe, set } = writable(undefined);

  return {
    subscribe,
    set: room => set(room),
    reset: () => set(undefined),
  };
}

export const game = createGameStore();
