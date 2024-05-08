import express, { request, response } from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";

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

app.use(express.json());

app.listen(PORT, () => {
  console.log("SERVER IS RUNNING", PORT);
});

app.get("/", (request, response) => {
  response.send("GET API, HELLO WORLD ");
  console.log("GET API HELLO WORLD");
});

app.post("/api/products", async (request, response) => {
  try {
    const product = await Product.create(request.body);
    response.status(200).json(product);
  } catch (error) {
    response.json({
      data: [],
      status: false,
      message: error.message,
    });
  }
});

app.get("/api/products", async (request, response) => {
  try {
    const products = await Product.find({});
    response.status(200).json(products);
  } catch (error) {
    response.json({
      data: [],
      status: false,
      message: error.message,
    });
  }
});

app.get("/api/product/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const product = await Product.findById(id);
    response.status(200).json(product);
  } catch (error) {
    response.json({
      data: [],
      status: false,
      message: error.message,
    });
  }
});

app.put("/api/product/:id", async (request, response) => {
    try {
        const {id} = request.params;
        const product =  await Product.findByIdAndUpdate(id , request.body);
        
        if(!product){
            return response.status(404).json({message:"product not found"});
        }

        const updatedProduct = await Product.findById(id)
        response.status(200).json(updatedProduct)

    } catch (error) {
        response.json({
            data: [],
            status: false,
            message: error.message,
          });
    }
});

app.delete("/api/product/:id" , async (request , response) => {
      try {
        const {id} = request.params;
        const deleteProduct = await Product.findByIdAndDelete(id);

        if(!deleteProduct){
          return response.status(404).json({message: "Product not found"})
        }

        response.status(200).json({message: "Product deleted successfully"});
      
      } catch (error) {
        response.json({
          data: [],
          status: false,
          message: error.message,
        });
      }
} )