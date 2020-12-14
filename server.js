const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

const port = process.env.PORT || 5000;

// server port
app.get("/", (req, res) => {
    res.send("HELLO WORD!");
});

// Middlewares
app.use(express.json());

// Database connection
mongoose
    .connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected "))
    .catch((err) => console.log(err));

// server connection
app.listen(port, () => console.log(`app running successfully in the port ${port}`));