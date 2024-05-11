import express from "express";
import mongoose from "mongoose";
import router from "./routes/product.Route.js";

const app = express();
const PORT = 3000;

mongoose
  .connect(
    "mongodb+srv://syedanasahmed412:tajdarsana2000@firstproject.nq5yslb.mongodb.net/Node-api?retryWrites=true&w=majority&appName=FirstProject"
  )
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
