require("dotenv").config();
const express = require("express");
//enables domains to communicate
const cors = require("cors");
const db = require("./db");
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("select * from restaurants");

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//get a specific restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    //$1 notation indicates variable. Number represents index of array argument
    //req.params.id
    //This setup, rather than string interpolation prevents SQL injection
    const restaurant = await db.query(
      `select * from restaurants where id= $1`,
      [req.params.id]
    );

    //get reviews for specified restaurant
    const reviews = await db.query(
      `select * from reviews where restaurant_id=$1`,
      [req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//create a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
  try {
    //'returning *' returns newly created entry to table
    const results = await db.query(
      "insert into restaurants (name, location, price_range) values($1, $2, $3) returning *",
      [req.body.name, req.body.location, req.body.price_range]
    );
    res.status(201).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//edit a restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE restaurants SET name=$1, location=$2, price_range=$3 where id=$4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//delete a restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query("delete from restaurants where id=$1", [
      req.params.id,
    ]);

    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
});

//Create a new review
app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
  try {
    const result = await db.query(
      "INSERT INTO reviews (restaurant_id, name, rating, review) values($1, $2, $3, $4) returning *",
      [req.params.id, req.body.name, req.body.rating, req.body.review]
    );

    res.status(201).json({
      status: "success",
      data: {
        review: result.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
