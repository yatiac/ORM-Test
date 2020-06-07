import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import Knex from "knex";
import { Model } from "objection";

const connection = require("../knexfile");

import Users from "./routes/user.routes";
import Posts from "./routes/post.routes";

const knex = Knex(connection.development);

Model.knex(knex);

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());

app.use("/users", Users);
app.use("/posts", Posts);

export default app;
