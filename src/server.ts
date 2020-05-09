import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { routes } from "./routes";

const app = express();

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

const port = 3333;


app.listen(port, () => {
  console.log(Date(), "Servidor rodando na porta:", port);
});

