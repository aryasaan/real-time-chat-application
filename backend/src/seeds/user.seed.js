import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    email: "emma@example.com",
    fullName: "aryan",
    password: "123456",
    profilePic: "",
  },
  {
    email: "emm1a@example.com",
    fullName: "Padosi",
    password: "123456",
    profilePic: "",
  },
  
  
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();