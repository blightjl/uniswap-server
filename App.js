import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import cors from "cors";
import AccountRoutes from "./Database/Account/routes.js";
import UserRoutes from "./Database/Product/productRoutes.js";

const CONNECTION_STRING = 'mongodb+srv://uniswap-admin:strong-password@uniswap.cb81hea.mongodb.net/' // || "mongodb://127.0.0.1:27017/uniswap"
mongoose.connect(CONNECTION_STRING);
const app = express();
// app.use(cors({
//     credentials: true,
//     origin: process.env.FRONTEND_URL
// }));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true 
}));
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
UserRoutes(app);
app.listen(4000);