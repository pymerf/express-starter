import config from "./config";
import app from "./app";

app.listen(config.port, (err) => {
  if (err) console.error(err);
  else console.log(`Server started on port ${config.port}`);
});
