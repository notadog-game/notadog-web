export const DEFAULT_ERROR = "Unknown error";

export const ERRORS_CODES = {
  UserNotFound: () => "UserNotFound",
  UserEmailAlreadyExist: () => "UserEmailAlreadyExist",
  UserEmailUncorrect: () => "UserEmailUncorrect",
  UserPasswordTooShort: () => "UserPasswordTooShort",
  UserAlreadyInRoom: () => "UserAlreadyInRoom",

  RoomStoragePlayerAlreadyInRoom: () => "RoomStoragePlayerAlreadyInRoom",

  RoomPlayersMaxCountLacked: () => "RoomPlayersMaxCountLacked",
  RoomNotInWaitingPlayersStateOnAddingPlayer: () =>
    "RoomNotInWaitingPlayersStateOnAddingPlayer",
  RoomOnAddingExistingPlayer: () => "RoomOnAddingExistingPlayer",
  RoomStartingByNonRootPlayer: () => "RoomStartingByNonRootPlayer",
  RoomStartingNotInWaitingPlayersState: () =>
    "RoomStartingNotInWaitingPlayersState",
  RoomStartingNotEnoughPlayers: () => "RoomStartingNotEnoughPlayers",
  RoomReplayingdByNonRootPlayer: () => "RoomReplayingdByNonRootPlayer",
  RoomReplayingNotInEndPlayersState: () => "RoomReplayingNotInEndPlayersState",
  RoomMakeMoveNotInPlayingState: () => "RoomMakeMoveNotInPlayingState",
};
