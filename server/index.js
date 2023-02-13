const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnect = require("./dbConnect");
dotenv.config("./.env");
const authRouter = require("./routers/authRouter");
const morgan = require("morgan");
app.use(express.json());

app.use("/auth", authRouter);

//middlewares

app.use(morgan("common"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
