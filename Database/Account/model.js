import mongoose from "mongoose";
import accountSchema from "./schema.js";

const model = mongoose.model("AccountModel", accountSchema);
export default model;