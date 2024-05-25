import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: [true, "Please enter prod name"],
    },

    description: {
      type: String,
      required: true,
      default: 0,
    },

    // price: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },

    // image: {
    //   type: String,
    //   required: false,
    // },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Products" , ProductSchema);
export default Product
