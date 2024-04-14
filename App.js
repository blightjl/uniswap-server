import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import cors from "cors";
import AccountRoutes from "./Database/Account/routes.js";

mongoose.connect("mongodb://127.0.0.1:27017/uniswap");
const app = express();
// app.use(cors({
//     credentials: true,
//     origin: process.env.FRONTEND_URL
// }));
app.use(cors());
const sessionOptions = {
    secret: "secret",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.HTTP_SERVER_DOMAIN,
    }
}
app.use(session(sessionOptions));
app.use(express.json());
AccountRoutes(app);
app.listen(4000);