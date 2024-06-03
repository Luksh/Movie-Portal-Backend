import express from "express";
import connectDB from "./connect.db.js";
import userRoutes from "./src/User/user.routes.js";

const app = express();

// To make the app accept JSON data
app.use(express.json());

connectDB();

app.use(userRoutes);

const PORT = process.env.API_PORT;

// Network PORT and server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
