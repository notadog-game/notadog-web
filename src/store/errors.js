import { writable } from "svelte/store";

function createGameErrorsStore() {
  const initialState = {
    connection: false,
  };

  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    update: () => update(state => ({ ...state, error: true })),
    reset: () => set({ ...initialState }),
  };
}
export const gameErrors = createGameErrorsStore();
