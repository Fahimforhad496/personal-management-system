import express from 'express';
import configureRoutes from "./controllers"

const app = express();

configureRoutes(app);

export default app;