import TutorModel from "../models/tutor_models.js";
import MessageModel from "../models/Message_Models.js";
import MeetingRequest from "../models/MeetingRequest_models.js";

// ➡️ Add Tutor
export const addTutor = async (req, res) => {
  try {
    const {
      tutorId,
      password,
      name,
      email,
      phone,
      experience,
      qualification,
      skill,
      gender,
      city,
      standard,
      board
    } = req.body;

    console.log("Tutor Registration Request:", req.body);

    // Create new tutor document
    const tutorDoc = new TutorModel({
      tutorId,
      password,
      name,
      email,
      phone,
      experience,
      qualification,
      skill,
      gender,
      city,
      standard,
      board
    });

    await tutorDoc.save();

    res.status(201).send({ message: "Tutor registered successfully ✅" });
  } catch (error) {
    console.error("❌ Error while adding tutor:", error.message);
    res.status(400).send({ error: error.message });
  }
};

// ➡️ Tutor Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login attempt:", req.body);

    const tutor_data = await TutorModel.findOne({ email });

    if (!tutor_data) {
      return res.status(404).send({ code: 404, message: "Invalid credentials" });
    }

    if (tutor_data.password !== password) {
      return res.status(401).send({ code: 401, message: "Password error" });
    }

    res.send({ code: 200, message: "tutorhome", token: tutor_data.email });
  } catch (error) {
    console.error("❌ Error during login:", error.message);
    res.status(500).send({ error: error.message });
  }
};

// ➡️ Tutor Profile
export const profile = async (req, res) => {
  try {
    const uid = req.query.email;
    console.log("Fetching profile for:", uid);

    const user_data = await TutorModel.findOne({ email: uid });
    if (!user_data) {
      return res.status(404).send({ message: "Tutor not found" });
    }

    res.send(user_data);
  } catch (error) {
    console.error("❌ Error fetching profile:", error.message);
    res.status(500).send({ error: error.message });
  }
};

// ➡️ Tutor Edit
export const TutorEdit = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const updateDoc = {
      $set: { name, phone }
    };

    const status = await TutorModel.updateOne({ email }, updateDoc);
    res.send(status);
  } catch (err) {
    console.error("❌ Error editing tutor:", err.message);
    res.status(500).send({ error: err.message });
  }
};

// ➡️ Compose Message
export const compose_message = async (req, res) => {
  try {
    const { sender_id, receiver_id, subject, text } = req.body;

    const messageDoc = new MessageModel({
      receiver_id,
      sender_id,
      subject,
      text
    });

    await messageDoc.save();
    res.send("Message sent successfully ✅");
  } catch (err) {
    console.error("❌ Error sending message:", err.message);
    res.status(500).send({ error: err.message });
  }
};

// ➡️ Tutor Inbox
export const tutor_inbox = async (req, res) => {
  try {
    const receiver_id = req.query.receiver_id;
    console.log("Inbox fetch for:", receiver_id);

    const inbox_data = await MessageModel.find({ receiver_id });
    res.send(inbox_data);
  } catch (err) {
    console.error("❌ Error fetching inbox:", err.message);
    res.status(500).send({ error: err.message });
  }
};

// ➡️ Pending Query request
export const pendingquery = async (req, res) => {
  try {
    const Tutor_id = req.query.Tutor_id;
    console.log("Pending queries for:", Tutor_id);

    const pending_data = await MeetingRequest.find({
      $and: [{ Tutor_id }, { Answer: null }]
    });

    res.send(pending_data);
  } catch (err) {
    console.error("❌ Error fetching pending queries:", err.message);
    res.status(500).send({ error: err.message });
  }
};

// ➡️ Answer Query
export const update = async (req, res) => {
  try {
    const { id, Answer } = req.body;

    const status = await MeetingRequest.updateOne(
      { _id: id },
      { $set: { Answer } }
    );

    res.send(status);
  } catch (error) {
    console.error("❌ Error updating answer:", error.message);
    res.status(500).send({ error: error.message });
  }
};

// ➡️ Show All Answered
export const AllAnswered = async (req, res) => {
  try {
    const Tutor = req.query.Tutor_id;

    const userData = await MeetingRequest.find({ Tutor_id: Tutor });
    if (!userData) {
      return res.send("No Tutor found");
    }

    res.send(userData);
  } catch (err) {
    console.error("❌ Error fetching answered:", err.message);
    res.status(500).send({ error: err.message });
  }
};
