import express from "express";
import productos from './routes/productos.route.js';

const app = express();
const port = 3000;

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/productos', productos);


try {
  app.listen(port, (error) => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
} catch (error) {
  console.log("Hubo un error, el servidor no pudo ser inicio");
  console.log(error);
}
