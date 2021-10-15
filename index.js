import express from "express";
import productRouter from "./routes/products.js";
import carritoRouter from "./routes/carrito.js";
import authRouter from "./routes/auth.js";
import handlebars from "express-handlebars";
import http from "http";
import createSocketIo from "./socketio.js";
import initMessageListeners from "./listeners/messagesListeners.js";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
const server = http.createServer(app);
const io = createSocketIo(server);
const port = process.env.PORT || 3000;

const { pathname: __dirname } = new URL("./", import.meta.url);

// init io listeners
initMessageListeners(io);

// template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "views/layouts",
    partialsDir: __dirname + "views/partials/",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);

app.set("view engine", "hbs");
app.set("views", "./views");
app.set("socketio", io);

// Parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// session middleware
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 1000 },
  })
);

// routes
app.use("/products", productRouter);
app.use("/", authRouter);
// app.use("/carrito", carritoRouter);

server.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Listening on port:${port}`);
});
