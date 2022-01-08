require("dotenv").config();
const express = require("express");
const db = require("./db");
const morgan = require("morgan");
const app = express();

//middleware
app.use(express.json());

//get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  const results = await db.query("select * from restaurants");
  console.log(results);
  res.status(200).json({
    status: "success",
    data: {
      restaurants: ["mcdonalds", "wendys", "pizza hut"],
    },
  });
});

//get a specific restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      restaurant: "mcdonalds",
    },
  });
});

//create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
  res.status(201).json({
    status: "success",
    data: {
      restaurant: "mcdonalds",
    },
  });
});

app.put("/api/v1/restaurants/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      restaurant: "mcdonalds",
    },
  });
});

//delete a restaurant
app.delete("api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "success",
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
