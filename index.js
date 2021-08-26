import express from "express";
import productos from "./routes/productos.route.js";
import handlebars from "express-handlebars";

const { pathname: __dirname } = new URL("./", import.meta.url);
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

// app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/productos", productos);

app.get("/", (request, response) => {
  response.render("addProduct.ejs");
});

app.listen(PORT, (error) => {
  if (error) throw new Error(`Error en servidor ${error}`);
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
