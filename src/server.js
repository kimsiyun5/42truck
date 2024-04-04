import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import orderRouter from "./routers/orderRouter";
import path from "path";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, 'views'));

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'views')));

if (process.env.NODE_ENV !== 'production')
  app.use(express.static('src/dist'));
app.use(express.static('public'));

app.use("/", rootRouter);
app.use("/order", orderRouter);
app.get('*', (req, res) => {
  res.status(404).render('404');
});

export default app;
