import express from "express";
import useAuth from "../modules/auth/auth.route";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(useAuth);

export { app };
