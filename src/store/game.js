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

export const stepCode = derived(room, $room =>
  $room ? $room.stateCode : null
);

export const players = derived(room, $room => ($room ? $room.players : []));

export const roomLink = derived(room, $room =>
  $room ? `${window.location.href}/${$room.guid}` : ""
);

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
    $room.makedMovePlayerIds.some(id => id === $player.id)
);

export const isPrivateRoom = derived(
  room,
  $room => $room && $room.playersMaxCount === null
);
