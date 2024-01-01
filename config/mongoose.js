import mongoose from "mongoose";
const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected with MongoDB.");
  } catch (err) {
    console.log("Unable to connect with MongoDB.", err);
  }
};
export default connectUsingMongoose;
