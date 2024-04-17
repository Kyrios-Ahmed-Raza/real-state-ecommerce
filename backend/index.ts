import express from "express";
const app = express();
import { PORT } from "./config";

app.get("/", (req, res) => {
  res.send("You're at home page!");
});

app.listen(PORT, () =>
  console.log(`Server stared on: http://localhost:${PORT}`)
);
