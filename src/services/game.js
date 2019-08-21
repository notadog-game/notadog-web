import signalR from "@aspnet/signalr/dist/browser/signalr";
import { config } from "../config.js";

let connection;

export class GameHub {
  static init() {
    connection = new signalR.HubConnectionBuilder()
      .withUrl(config.apiWsGameHost)
      .configureLogging(signalR.LogLevel.Information)
      .build();

    connection.on("OnConnect", user => {
      console.log(`user ${user} connected`);
    });

    connection.on("OnDisconnect", user => {
      console.log(`user ${user} disconnected`);
    });
  }

  static async connect() {
    try {
      if (!connection) this.init();

      await connection.start();
      console.log("connected");
    } catch (err) {
      console.log(err);
    }
  }

  static async disconnect() {
    try {
      await connection.stop();
      console.log("disconnected");
    } catch (err) {
      console.log(err);
    }
  }
}
