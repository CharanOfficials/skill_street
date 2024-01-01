import express from "express";
import dotenv from "dotenv";
import router from "./router/index.router.js";
import connectUsingMongoose from "./config/mongoose.js";
import mongoose from "mongoose";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "./config/swaggerSpecs.js";
const app = express();
dotenv.config();
const swaggerSpecs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use(express.json());
app.use("/api", router);
const server = async () => {
  try {
    await connectUsingMongoose();
    app.listen(process.env.PORT || 8000, () => {
      console.log("Listening to ", process.env.PORT);
    });
  } catch (err) {
    console.error("Ann error occured while setting up the server.");
    if (mongoose.connection.readyState === 1) {
      await mongoose.disconnect();
    }
  }
};
server();
