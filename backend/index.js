import express, { request, response } from "express"
import mongoose from "mongoose";
import Product from "./models/product.model.js";

const app = express()
const PORT = 3000;

mongoose.connect("mongodb+srv://syedanasahmed412:tajdarsana2000@firstproject.nq5yslb.mongodb.net/Node-api?retryWrites=true&w=majority&appName=FirstProject")
.then(res=>{
    console.log("Connected to the database")
})
.catch(error=>{
    console.log("not connected to db" , error.message)
})

app.use(express.json())

app.listen(PORT , ()=>{
    console.log("SERVER IS RUNNING" , PORT)
})


app.post("/api/products" , async(request , response) => {
   
    try {
        const product = await Product.create(request.body);
        response.status(200).json(Product)   
    } 
    catch (error) {
        response.json({
            data : [],
            status: false,
            message:error.message
        })
    }
} )

app.get("/" , (request , response) =>{
    response.send("GET API, HELLO WORLD ")
    console.log("GET API HELLO WORLD")
} )

