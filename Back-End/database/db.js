import mongoose from "mongoose";

const dbUrl = "mongodb+srv://prince:princelucknow@cluster0.r6ecv6k.mongodb.net/tutor_db?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connection established with MongoDB");
  } catch (err) {
    console.error("❌ Error while connecting with DB:", err.message);
    process.exit(1);
  }
};

export default connectDB;
