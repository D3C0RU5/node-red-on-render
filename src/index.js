import express from "express";
import http from "http";
import RED from "node-red";

const app = express();
const server = http.createServer(app);

const settings = {
  httpAdminRoot: "/red",
  httpNodeRoot: "/api",
  userDir: "./data",
  functionGlobalContext: {},
};

RED.init(server, settings);

app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(3000, () => {
  console.log("Node-RED rodando em http://localhost:3000/red");
});

RED.start();
