"use strict";

const { mouse, right } = require("@nut-tree/nut-js");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    const io = require("socket.io")(strapi.server.httpServer, {
      cors: {
        // origin: "https://062e-223-123-9-28.ngrok-free.app",
        // origin: "http://localhost:3000",
        origin: process.env.FRONTEND_URL,
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
      },
    });

    let onlineUsers = [];

    const getUser = (userId) => {
      return onlineUsers?.find((user) => user?.userId === userId);
    };

    io?.on("connection", (socket) => {
      console.log(`⚡: ${socket?.id} user just connected!`);

      socket?.on("addNewUser", (userId) => {
        !onlineUsers?.some((user) => user?.userId === userId) &&
          onlineUsers.push({
            userId,
            socketId: socket?.id,
          });

        console.log("onlineUsers", onlineUsers);
        io?.emit("getOnlineUsers", onlineUsers);
      });

      socket?.on("moveMouse", async (data) => {
        if (data == "click") {
          io.emit("doSomething", "move");
          await mouse.move(right(300));
        }
      });

      // add message
      socket?.on("sendMessage", async (data) => {
        const user = onlineUsers?.find((usr) => usr?.userId == data.receiver);
        if (user) {
          io?.to(user?.socketId)?.emit("getMessage", data);
        }
      });

      socket.on("sendNotification", (data) => {
        const receiver = getUser(data?.newNotification.attributes?.receiver);

        io?.to(receiver?.socketId)?.emit(
          "getNotification",
          data.newNotification
        );
      });

      socket.on("disconnect", () => {
        onlineUsers = onlineUsers?.filter(
          (user) => user?.socketId !== socket?.id
        );
        io.emit("getOnlineUsers", onlineUsers);
      });
    });
  },
};
