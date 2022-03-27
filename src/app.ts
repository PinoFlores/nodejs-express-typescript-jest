import express from "express";
import { healthCheck } from "./controllers/api";

const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

healthCheck(app);

export default app;
