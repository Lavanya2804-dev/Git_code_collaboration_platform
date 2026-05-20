import { io } from "socket.io-client";

const socket = io(
  "https://git-code-collaboration-platform.onrender.com",
  {
    withCredentials: true
  }
);

socket.on("connect", () => {

  console.log(
    "Socket connected:",
    socket.id
  );

});

export default socket;