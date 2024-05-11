// import express, { request, response } from "express";
import { Router } from "express";
import { deleteProducts, getProduct, getProducts, createProduct, updateProducts } from "../Controllers/products.controller.js";

const router = Router();

router.get("/", getProducts );
router.get("/:id" , getProduct );
router.post("/" , createProduct);
router.put("/:id" , updateProducts);
router.delete("/:id" , deleteProducts );


export default router;