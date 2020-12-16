const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

//Server port
const port = process.env.PORT || 5000;

//Routes 
const postRouter = require("./routes/posts")

//Middlewares
app.use(express.json())
app.use('/post', postRouter)

//Database connection
mongoose
    .connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected "))
    .catch((err) => console.log(err));

//Server connection
app.listen(port, () => console.log(`app running successfully in the port ${port}`));