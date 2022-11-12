const mongoose = require("mongoose");
require("dotenv/config");
// mongod --port 27017 --dbpath "C:\\data\db"
return mongoose.connect(
  'mongodb://127.0.0.1:27017/mydb',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("conected to db")
);


