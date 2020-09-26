require("express-async-errors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("config");
const mailer = require("./nodemailer/nodemailer");

const users = require("./routes/users");
const auth = require("./routes/auth");
const publishRide = require("./routes/publishRide");
const getRides = require("./routes/getRides");
const searchRide = require("./routes/searchRide");
const requestRide = require("./routes/requestRide");
const getRequestRide = require("./routes/getRequestRide");
const forgotPassword = require("./routes/forgotPassword");
const resetPassword = require("./routes/resetPassword");

if (!config.get("jwtPrivateKey")) {
  console.log("FATAL ERROR: jwtPrivateKey is not defined");
  process.exit(1);
}

if (!config.get("mongoURI")) {
  console.log("FATAL ERROR: mongoURI is not defined");
  process.exit(1);
}

if (!config.get("clientEndPoint")) {
  console.log("FATAL ERROR: Client Url is not defined");
  process.exit(1);
}

//Connection with mongodb
const db_URI = config.get("mongoURI");
mongoose
  .connect(db_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected to mongoDB.. "))
  .catch(err => console.error("could not connect to mongoDB"));

mongoose.set("useCreateIndex", true);

//Middleware
app.use(express.json());

//enabling cross
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-auth-token"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("got it");
  res.end();
});

app.get("/sendMail", (req, res) => {
  mailer.sendMail("pursharth.vohra@gmail.com", " hello from server");
  res.send("got it");
  res.end();
});

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/publishRide", publishRide);
app.use("/api/getRides", getRides);
app.use("/api/searchRide", searchRide);
app.use("/api/requestRide", requestRide);
app.use("/api/getRequestRide", getRequestRide);
app.use("/api/forgotPassword", forgotPassword);
app.use("/api/resetPassword", resetPassword);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server listening at port:${port}`);
});
