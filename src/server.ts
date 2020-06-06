import express from "express";
import morgan from "morgan";
import cors from "cors";

import users from "./routes/users.routes";
import index from "./routes/index.routes";

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(index);
app.use("/users", users);

export default app;
