import signalR from "@aspnet/signalr/dist/browser/signalr";
import { game } from "../store/game";
import { config } from "../config.js";
import { tokenService } from "./token";

let connection;

export const GAME_STATES = {
  WAITING_PLAYERS: "WaitingPlayersState",
  WAITING_START: "WaitingStartState",
  PLAYING_STATE: "PlayingState",
  END_STATE: "EndState",
};

export class GameHub {
  static init() {
    connection = new signalR.HubConnectionBuilder()
      .withUrl(config.apiWsGameHost, {
        accessTokenFactory: async () => {
          return `Bearer ${tokenService.get()}`;
        },
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .configureLogging(signalR.LogLevel.Information)
      .build();

    connection.on("OnConnect", data => {
      console.log("OnConnect", data);
    });

    connection.on("OnRoomUpdate", data => {
      console.log("OnRoomUpdate", data);
      game.updateRoom(data);
    });

    connection.on("OnDisconnect", data => {
      console.log("OnDisconnect", data);
    });

    connection.on("OnMakedMove", data => {
      console.log(`OnMakedMove`, data);
    });
  }

  static async connect() {
    try {
      if (!connection) this.init();
      await connection.start();
    } catch (err) {
      console.log(err);
    }
  }

  static async disconnect() {
    try {
      await connection.stop();
    } catch (err) {
      console.log(err);
    }
  }

  static async makeMove() {
    try {
      await connection.invoke("MakeMove");
    } catch (err) {
      console.log(err);
    }
  }
}
