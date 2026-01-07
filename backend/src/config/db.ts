import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mini-youtube");
    console.log("Mongo Connection Successfully");
  } catch (err) {
    console.log("Mongo Connection Error: ", err);
    process.exit(1);
  }
};
