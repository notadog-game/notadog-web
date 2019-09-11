import { writable } from "svelte/store";
import { connectToPublicGame, connectToPrivateGame, createGame } from "../services/api";
import { handleError } from "../services/errors";

function createGameStore() {
  const initialState = {
    room: undefined,
    isLoading: false,
  };

  const { subscribe, set, update } = writable({ ...initialState });

  return {
    subscribe,
    connectToPublicGame: async params => {
      update(state => ({ ...state, isLoading: true }));
      try {
        const room = await connectToPublicGame(params);
        update(() => ({ room, isLoading: false }));
      } catch (e) {
        handleError(e);
      }
    },
    connectToPrivateGame: async params => {
      update(state => ({ ...state, isLoading: true }));
      try {
        const room = await connectToPrivateGame(params);
        update(() => ({ room, isLoading: false }));
      } catch (e) {
        handleError(e);
      }
    },
    createGame: async params => {
      update(state => ({ ...state, isLoading: true }));
      try {
        const room = await createGame(params);
        update(() => ({ room, isLoading: false }));
      } catch (e) {
        handleError(e);
      }
    },
    updateRoom: room => update(state => ({ ...state, room })),
    reset: () => set({ ...initialState }),
  };
}

export const game = createGameStore();
