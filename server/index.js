import express from "express";
import { connect } from "mongoose";
const app = express();
import employeeRoute from "./routes/employeeRoute.js";
import authRoute from "./routes/authRoute.js";
import bodyParser from "body-parser";
app.use(bodyParser.json());

app.listen(8000, () => {
    console.log("Listening on Port 8000");
});

connect("mongodb://127.0.0.1:27017/Demo")
    .then(() => {
        console.log("Connection Open");
    })
    .catch((e) => {
        console.log("ERROR");
    });

app.use("/home/employee", employeeRoute);
app.use("/", authRoute);
