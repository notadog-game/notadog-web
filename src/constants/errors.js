export const ERRORS_CODES = {
  Default: () => "Unknown error",

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
