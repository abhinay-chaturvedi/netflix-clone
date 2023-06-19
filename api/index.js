const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

const app = express();
dotenv.config()



mongoose.connect(process.env.MONGO_URL).then((e)=>{
    // console.log("event will be: ",e);
    console.log('database is connected to server!');
}).catch((err)=>{
    console.log("error while connecting to database: ",err);
})

console.log("module will be: ",module)

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);



app.listen(5000, () => {
    console.log("server is running on port 5000")
})