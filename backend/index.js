import express from "express";
import mongoose from "mongoose";
import router from "./routes/product.Route.js";
import * as dotenv from "dotenv"
dotenv.config()

const app = express();
const PORT = 3000;
const myURI = process.env.URI


mongoose
  .connect(myURI)
  .then((res) => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.log("not connected to db", error.message);
  });


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log("SERVER IS RUNNING", PORT);
});

// routes
app.use("/api/products", router);

app.get("/", (request, response) => {
  response.send("GET API, HELLO WORLD ");
  console.log("GET API HELLO WORLD");
});
