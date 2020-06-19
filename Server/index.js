const express = require("express");
const cors = require("cors");

const app = express();

//Middleware

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

const usermanagment = require("./routes/api/usermanagment");

app.use("/api/usermanagment", usermanagment);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on Port: ${port}`));
