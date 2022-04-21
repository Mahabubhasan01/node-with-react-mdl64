const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "This is my first line about express js opps added new things via nodemon"
  );
});

const users = [
  {
    id: 1,
    name: "Iphone",
    brand: "Apple",
    price: 100000,
    email: "abc@gmail.com",
  },
  {
    id: 2,
    name: "One plus",
    brand: "Apple",
    price: 300000,
    email: "bbc@yahoo.com",
  },
  {
    id: 3,
    name: "Samsung",
    brand: "Apple",
    price: 500000,
    email: "cbc@outlook.com",
  },
  {
    id: 4,
    name: "Tesla",
    brand: "Apple",
    price: 600000,
    email: "dbc@protonmai.ch",
  },
];
app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const mathced = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(mathced);
  } else {
    res.send(users);
  }
});
app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  /*     const user = users[id]*/
  const user = users.find((u) => u.id == id);
  res.send(user);
});
app.post("/user", (req, res) => {
  console.log(req);
  const user = req.body;
  user.id = user.length + 1;
  users.push(user);
  res.send(user);
});
app.listen(port, () => {
  console.log("this is last line for set port", port);
});
