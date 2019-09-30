import { writable, derived } from "svelte/store";

function createProgressStore() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    inc: () => update(n => n + 1),
    dec: () => update(n => n - 1),
    reset: () => set(0),
  };
}

export const progress = createProgressStore();
export const isActive = derived(progress, $progress => $progress > 0);
