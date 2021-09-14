import * as express from "express";
import { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.end("server corriendo");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
