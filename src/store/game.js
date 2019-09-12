import { writable, derived } from "svelte/store";
import { GAME_STATES } from "../services/game";

function createPlayerStore() {
  const { subscribe, set } = writable(null);

  return {
    subscribe,
    set: player => set(player),
    reset: () => set(null),
  };
}
export const player = createPlayerStore();

function createRoomStore() {
  const { subscribe, set } = writable(undefined);

  return {
    subscribe,
    set: room => set(room),
    reset: () => set(undefined),
  };
}
export const room = createRoomStore();

export const isRoomRoot = derived(
  [room, player],
  ([$room, $player]) => $room && $player && $room.rootId === $player.id
);

export const isWin = derived(
  [room, player],
  ([$room, $player]) =>
    $room &&
    $player &&
    $room.stateCode === GAME_STATES.END_STATE &&
    $room.makedMovePlayers.some(p => p.id === $player.id)
);

export const isPrivateRoom = derived(
  room,
  $room => $room && $room.playersMaxCount === 0
);
