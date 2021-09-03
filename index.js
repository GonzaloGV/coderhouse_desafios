import express from "express";
import handlebars from "express-handlebars";
import http from "http";
import { Server } from "socket.io";
import products from "./routes/productos.route.js";
import inventory from "./crud.js";
import messageArr from "./chat.js";

const { pathname: __dirname } = new URL("./", import.meta.url);
const app = express();
const port = 3000;

const server = http.createServer(app);
const io = new Server(server);
messageArr.loadMessages();

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "views/layouts",
    partialsDir: __dirname + "views/partials/",
  })
);

app.set("view engine", "hbs");
app.set("views", "./views");
app.set("socketio", io);

// app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/productos", products);

io.on("connection", (socket) => {
  socket.on("product added", async (formData) => {
    console.log(formData);
  });

  socket.on("send msg", async (msg) => {
    messageArr.addMessage(JSON.parse(msg));
    messageArr.persistMsgs();
    socket.broadcast.emit("new msg", msg);
  });
});

app.get("/", (request, response) => {
  const productList = inventory.getProducts();
  const isEmpty = productList.length === 0;
  const messages = messageArr.getMessages();
  response.render("addProduct", {
    productList: productList,
    isEmpty: isEmpty,
    messages,
  });
});

server.listen(port, (error) => {
  if (error) throw new Error(`Error en servidor ${error}`);
  console.log(`Servidor corriendo en el puerto ${port}`);
});
