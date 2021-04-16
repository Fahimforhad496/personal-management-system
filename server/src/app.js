import express from 'express';
import configureRoutes from "./controllers";
import { handleRequest, handleError } from "./middlewares/index";

const app = express();
app.use(express.json());
app.use(handleRequest);
configureRoutes(app);
app.use(handleError);

export default app;