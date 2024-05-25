import Product from "../models/product.model.js";

const getProducts = async (request, response) => {
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
};

const getProduct = async (request, response) => {
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
};

const createProduct = async (request, response) => {
  try {
    const product = await Product.create(request.body);
    response.status(200).json(product);

    console.log(request.body)
  } catch (error) {
    response.json({
      data: [],
      status: false,
      message: error.message,
    });
    console.log(error.message)
  }
};

const updateProducts = async (request, response) => {
  try {
    const { id } = request.params;
    const product = await Product.findByIdAndUpdate(id, request.body);

    if (!product) {
      return response.status(404).json({ message: "product not found" });
    }

    const updatedProduct = await Product.findById(id);
    response.status(200).json(updatedProduct);
  } catch (error) {
    response.json({
      data: [],
      status: false,
      message: error.message,
    });
  }
};

const deleteProducts =  async (request, response) => {
    try {
      const { id } = request.params;
      const deleteProduct = await Product.findByIdAndDelete(id);
  
      if (!deleteProduct) {
        return response.status(404).json({ message: "Product not found" });
      }
  
      response.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      response.json({
        data: [],
        status: false,
        message: error.message,
      });
    }
  }

export { getProducts, getProduct, createProduct , updateProducts , deleteProducts };
