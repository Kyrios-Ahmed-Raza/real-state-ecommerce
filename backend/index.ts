import express from "express";
const app = express();
import { PORT } from "./config";

app.use(express.json());

app.get("/", (req, res) => {
  res.json([
    {
      name: "Ahmed",
      age: 16,
      gender: "Male",
    },
    {
      name: "Areeba",
      age: 21,
      gender: "Female",
    },
    {
      name: "Abdullah",
      age: 32,
      gender: "Male",
    },
  ]);
});

app.listen(PORT, () =>
  console.log(`Server stared on: http://localhost:${PORT}`)
);
