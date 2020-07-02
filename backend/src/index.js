const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

server.start(
  {
    cors: {
      credentials: true,
      origin: "http://localhost:7777",
    },
  },
  (instance) => {
    console.log(`Server running on http://localhost:${instance.port}`);
  }
);
