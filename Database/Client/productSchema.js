import mongoose, { Mongoose } from "mongoose";
import ProductType from "../Types/ProductType";

const productCommentSchema = new mongoose.Schema({
  commentID: number,
  userID: Number,
  userName: String,
  description: String,
  likes: Number,
});

const productSchema = new mongoose.Schema({
    image: any,
    description_long: String,
    description_short: String,
    title: {type: String, unique: true},
    price: String,
    type: ProductType,
    comments: [productCommentSchema],
  },
  { collection: "products" }
);

export default productSchema;