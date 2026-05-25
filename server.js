const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const USER = {
  username: "farrel",
  password: "12345"
};

app.post("/login", (req, res) => {

  const { username, password } = req.body;

  if (
    username === USER.username &&
    password === USER.password
  ) {

    return res.json({
      success: true,
      message: "Login berhasil 🔥"
    });

  }

  return res.status(401).json({
    success: false,
    message: "Username/password salah"
  });

});

app.listen(3000, () => {

  console.log(
    "Server jalan di http://localhost:3000"
  );

});