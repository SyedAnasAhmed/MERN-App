import express, { request, response } from "express";
import { Router } from "express";
import Product from "../models/product.model";

const router = Router();

router.get("/", async (request, response) => {
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
