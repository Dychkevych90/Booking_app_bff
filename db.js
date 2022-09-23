const mongoose = require("mongoose");

const { MONGO_URL } = process.env;

module.exports = async () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  await mongoose.connect(
    MONGO_URL,
    connectionParams
  );
  console.log("Connected to database.");
};
