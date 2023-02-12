const express = require('express')
const app = express()
const dotenv = require("dotenv").config();
const mongoose = require("mongoose")
mongoose.set('strictQuery', true);
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")

app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
.then(console.log("connected to MongoDb"))
.catch((err) =>console.log(err));

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)

app.listen(5001, ()=>{
    console.log("Listeninggg")
})