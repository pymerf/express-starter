import mongoose from "mongoose";
import config from "./config";
import app from "./app";

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, { autoIndex: true });

mongoose.connection.on("error", () => {
  throw new Error(`Unable to connect to database: ${config.mongoUri}`);
});

app.listen(config.port, (err) => {
  if (err) console.error(err);
  else console.log(`Server started on port ${config.port}`);
});
