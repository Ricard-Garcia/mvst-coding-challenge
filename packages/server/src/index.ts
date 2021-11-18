import { app } from "./server";
import { config } from "./config/config";
import { connect } from "./db/connect";
import { seedDefaultTime } from "./db/seed";

// Connect server
connect()
  .then(async () => {
    // Initial db seeding
    seedDefaultTime();

    app.listen(config.app.port, () => {
      console.log(`Server is now running at port ${config.app.port}!`);
    });
  })
  .catch((error) => {
    console.log(`Error connecting the server: ${error}`);
  });
