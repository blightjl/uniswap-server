import mongoose, { Mongoose } from "mongoose";

const productCommentSchema = new mongoose.Schema({
  commentID: Number,
  userID: String,
  userName: String,
  description: String,
});

const productSchema = new mongoose.Schema({
    image: String,
    description_long: String,
    description_short: String,
    title: {type: String, unique: true},
    price: String,
    type: 'String',
    comments: [productCommentSchema],
  },
  { collection: "products" }
);

export default productSchema;