import mongoose from "mongoose";
import productSchema from "./productSchema.js";

const productModel = mongoose.model("products", productSchema, "products")
export default productModel;