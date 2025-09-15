import UserModel from "../models/user_models.js";

// Home route
export const home = (req, res) => {
  res.send("Welcome to User API 🚀");
};

// Register new user
export const addUser = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password || !phone) {
      return res.status(400).send("All fields are required");
    }

    // check if email already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    const userDoc = new UserModel({ name, email, password, phone });
    await userDoc.save();

    res.status(201).send({ message: "User registered successfully", user: userDoc });
  } catch (error) {
    console.error("Error in addUser:", error.message);
    res.status(500).send("Server error");
  }
};

// Login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userDoc = await UserModel.findOne({ email });
    if (!userDoc) {
      return res.status(404).send("User not found");
    }

    if (userDoc.password !== password) {
      return res.status(401).send("Invalid password");
    }

    res.status(200).send({ message: "Login successful", token: userDoc.email });
  } catch (error) {
    console.error("Error in login:", error.message);
    res.status(500).send("Server error");
  }
};

// Get user profile
export const profile = async (req, res) => {
  try {
    const { email } = req.query;

    const userDoc = await UserModel.findOne({ email });
    if (!userDoc) {
      return res.status(404).send("User not found");
    }

    res.status(200).send(userDoc);
  } catch (error) {
    console.error("Error in profile:", error.message);
    res.status(500).send("Server error");
  }
};

// Edit user
export const userEdit = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const updateDoc = { $set: { name, phone } };
    const status = await UserModel.updateOne({ email }, updateDoc);

    res.status(200).send(status);
  } catch (error) {
    console.error("Error in userEdit:", error.message);
    res.status(500).send("Server error");
  }
};

// Compose message (stub for now)
export const compose_message = async (req, res) => {
  try {
    res.send("Message composed successfully (not implemented fully yet)");
  } catch (error) {
    console.error("Error in compose_message:", error.message);
    res.status(500).send("Server error");
  }
};

// User inbox (stub)
export const userInbox = async (req, res) => {
  try {
    res.send("User inbox data (not implemented fully yet)");
  } catch (error) {
    console.error("Error in userInbox:", error.message);
    res.status(500).send("Server error");
  }
};

// All resources (stub)
export const allResources = async (req, res) => {
  try {
    res.send("All resources list (not implemented yet)");
  } catch (error) {
    console.error("Error in allResources:", error.message);
    res.status(500).send("Server error");
  }
};

// All tutors (stub)
export const allTutors = async (req, res) => {
  try {
    res.send("All tutors list (not implemented yet)");
  } catch (error) {
    console.error("Error in allTutors:", error.message);
    res.status(500).send("Server error");
  }
};

// Meeting request (stub)
export const meetingRequest = async (req, res) => {
  try {
    res.send("Meeting request submitted (not implemented yet)");
  } catch (error) {
    console.error("Error in meetingRequest:", error.message);
    res.status(500).send("Server error");
  }
};
