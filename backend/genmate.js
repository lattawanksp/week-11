const http = require("http");

const port = 3030;

const user = [
  {
    name: "Emmika",
    jsd_number: 5,
    genmate: "F",
  },
  {
    name: "Card",
    jsd_number: 9,
    genmate: "F",
  },
  {
    name: "Lin",
    jsd_number: 13,
    genmate: "F",
  },
  {
    name: "Jay",
    jsd_number: 19,
    genmate: "F",
  },
  {
    name: "Toon",
    jsd_number: 38,
    genmate: "F",
  },
  {
    name: "P'Sign",
    jsd_number: 41,
    genmate: "F",
  },
  {
    name: "P'Ong",
    jsd_number: 42,
    genmate: "F",
  },
];

const server = http.createServer((req, res) => {
  console.log(`${req.url} ${req.method} ${req.headers}`);

  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
      res.end("สวัสดีครับยินดีต้อนรับสู่ร้าน Generation Thailand");
    }
    if (req.url === "/users") {
      res.writeHead(200, { "content-type": "application/json; charset=utf-8" });
      res.end(JSON.stringify(user));
    }
    if (req.url === "/randomUser") {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      const randomNumber = Math.floor(Math.random() * user.length);
      res.end(JSON.stringify(user[randomNumber]));
    }
    if (req.url.startsWith("/users/")) {
      const param = Number(req.url.split("/")[2]);
      console.log(param);
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.write(JSON.stringify(users.find((e) => e.jsd_number === param)));
      res.end();
    }
  }
});

server.listen(port, () => {
  console.log(`server is running port ${port} 🌍`);
});
