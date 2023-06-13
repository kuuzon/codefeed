import mongoose from "mongoose";

// DOCS: https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.connect()
const connectMongo = async () => {
  try {
    const connectionResult = await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_URI);
    // const connectionResult = await mongoose.connect(process.env.MONGO_RAILS_CONNECTION_URI);
    if (connectionResult) console.log("Connected to MongoDB");
  } catch (err) {
    (err) => console.error("Connection Failed", err);
  }
}

export default connectMongo;