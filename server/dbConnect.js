const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
module.exports = mongoose
  .connect("mongodb://0.0.0.0:27017/Patients", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((e) => {
    console.log(e);
  });
