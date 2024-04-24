import mongoose from "mongoose";

const productCommentSchema = new mongoose.Schema({
  commentID: Number,
  userID: Number,
  userName: String,
  description: String,
  likes: Number,
});

const productSchema = new mongoose.Schema({
  image: String,
  description_long: String,
  description_short: String,
  title: {type: String, unique: true},
  price: String,
  type: String,
  comments: [productCommentSchema],
});

const accountSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, requried: true },
  accountType: {
      type: String,
      enum: ["BUYER", "SELLER", "ADMIN", "USER"],
      default: "BUYER",
  },
  name: String,
  bio: String,
  products: productSchema,
  profilePicture: String,
  }, 
  { collection: "accounts" }
);

export default accountSchema;