import express from "express";

const PORT = (process.env.PORT || 3000) as number;
const HOST = process.env.HOST || "0.0.0.0";

const app = express();
app.use(express.json());
