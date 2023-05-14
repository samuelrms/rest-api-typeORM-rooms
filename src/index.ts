import express from "express";
import { AppDataSource } from "./data-source";
import router from "./routes";

AppDataSource.initialize().then(() => {
  const app = express();
  app.use(express.json());

  const port = process.env.PORT;

  app.get("/", (_, res) => {
    return res.json(`🔥 Welcome to server, is living port: ${port} 🔥`);
  });

  app.use(router);

  return app.listen(port, () =>
    console.log(`🔥 Start server port = ${port} 🔥`)
  );
});
