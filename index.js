import express from "express";
import productos from "./routes/productos.route.js";
import handlebars from "express-handlebars";

const { pathname: __dirname } = new URL("./", import.meta.url);
const app = express();
const port = 3000;

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

// app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/productos", productos);

app.get("/", (request, response) => {
  response.render("addProduct");
});

app.listen(port, (error) => {
  if (error) throw new Error(`Error en servidor ${error}`);
  console.log(`Servidor corriendo en el puerto ${port}`);
});
