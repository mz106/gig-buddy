require("dotenv");

const express = require("express");

const userRouter = require("./routes");

const app = express();

app.use(express.json());

app.use("/user", userRouter);

app.listen(80, () => {
    console.log('server is listening in port 80');
});