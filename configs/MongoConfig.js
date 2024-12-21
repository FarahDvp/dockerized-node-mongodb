var mongoose = require("mongoose");

module.exports.ConnectMongo = () => {
  mongoose
    .connect("mongodb://mongodb:27017/db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB is connected "))
    .catch((err) => console.log(err));
};
