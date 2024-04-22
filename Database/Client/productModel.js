import mongoose from "mongoose";
import productSchema from "./productSchema";

const productModel = mongoose.model("products", productSchema, "products")
export default productModel;