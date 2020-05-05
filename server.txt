import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3005;

if (typeof jest === "undefined") {
  app.listen(port, () => {
    console.log(Date(), "Servidor rodando na porta:",port);
  });
}

export default app;
