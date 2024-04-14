import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, requried: true },
    accountType: {
        type: String,
        enum: ["BUYER", "SELLER", "ADMIN"],
        default: "BUYER",
    },
}, { collection: "accounts" });

export default accountSchema;