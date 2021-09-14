import express from "express";
import productRouter from "./routes/products.js";
import carritoRouter from "./routes/carrito.js";

const app = express();
const port = process.env.PORT || 3000;

const { pathname: __dirname } = new URL("./", import.meta.url);

// Parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/products", productRouter);
app.use("/carrito", carritoRouter);

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Listening on port:${port}`);
});
