const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

const MongoClient = mongodb.MongoClient;
const uri =
  "mongodb+srv://server:CXNmGjqstLgNsL1g@cluster0-ovgsz.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//User Collection

client.connect((error) => {
  console.log(error);
});

//Get User
router.get("/:email", async (req, res) => {
  const user = await getUser(req.params.email).catch((err) => console.log(err));
  if (user !== null) {
    res.send(await user);
  } else {
    res.status(404);
    res.send("Email Adresse nicht bekannt");
  }
});

//Add User
router.post("/", async (req, res) => {
  console.log(req.body);

  const success = await createUser(req.body);
  console.log(success);

  if (success.result.n === 1) {
    res.status(201).send(success);
  } else {
    res.status(500).send();
  }
});

//Delete User

//Update User

// get User from mongodb

async function getUser(email) {
  return client.db("querkraft").collection("user").findOne({ email: email });
}

async function createUser(user) {
  try {
    return client.db("querkraft").collection("user").insertOne(user);
  } catch (err) {
    console.log(err);
  }
}

module.exports = router;
