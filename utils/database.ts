// import mongoose from "mongoose";
// let isConnected = false;

// export const connectToDb = async () => {
//   mongoose.set("strictQuery", true);
//   if (isConnected) {
//     console.log("mongodb is connected");
//     return;
//   }
//   try {
//     await mongoose.connect(process.env.MONGODB_URI || "", {
//       dbName: "login",
//     });
//   } catch (error) {
//     console.log("error", error);
//   }
// };
