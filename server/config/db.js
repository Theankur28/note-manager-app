import mongoose from "mongoose";

const MONGO_USER = "ankur_028";
const MONGO_PASS = "ankurpurohit@28";
const MONGO_CLUSTER = "cluster0.v6df8xl.mongodb.net";
const MONGO_URI = `mongodb+srv://${encodeURIComponent(MONGO_USER)}:${encodeURIComponent(MONGO_PASS)}@${MONGO_CLUSTER}/note-taking-app`;

const connectToMongo = async () => {
   try {
      const res = await mongoose.connect(MONGO_URI);
      if (res) {
         console.log("Database Connected Successfully");
      }
   } catch (error) {
      console.log(error);
   }
};

export default connectToMongo;