const express = require("express");
const PORT = 4000;
const app = express();
require("./db");
const productRoute = require("./routes/product");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const path = require("path");
/************ MIDDLEVARES *************/

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add headers in order to perform all operation on API
// Because CORS Thing (Google it if you do not know)
app.use((req, res, next) => {
  console.log("/api/v1/"+PORT+req.method+req.url)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "*");

  next();
});

app.get("/app",(req, res, next) => {
  console.log("api***")
  res.send(200)
  next();
});


/************ ROUTES *************/
app.use("/api/v1/", productRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
  });
}
// listen to the port
app.listen(PORT);
