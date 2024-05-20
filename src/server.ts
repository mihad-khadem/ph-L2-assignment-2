const mongoose = require("mongoose");
import app from "./app";
import config from "./app/config";

async function main() {
  try {
    const port = config.port;
    // mongoDB connection
    await mongoose.connect(config.databaseURl as string);
    // listening
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}

main();
