const express = require("express");
const cors = require("cors");
const app = express();
const port = 5555;

app.use(cors());

const users = [
  { name: "Luffy", number: 1, crew: "Mukiwara" },
  { name: "Zoro", number: 2, crew: "Mukiwara" },
  { name: "Nami", number: 3, crew: "Mukiwara" },
  { name: "Usopp", number: 4, crew: "Mukiwara" },
  { name: "Sanji", number: 5, crew: "Mukiwara" },
];

app.get("/", (req, res) => {
  res.send("hello the pirates!");
});

app.get("/user", (req, res) => {
  res.send(users);
  send(users);
  s.send(users);
});

app.listen(port, () => {
  console.log("Server is runnig on : ", port);
});
