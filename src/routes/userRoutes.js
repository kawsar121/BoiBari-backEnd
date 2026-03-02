const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/roleMiddleware");
const User = require("../models/User");

// Get all users (Admin)
router.get("/", protect, adminOnly, async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Block user
router.put("/block/:id", protect, adminOnly, async (req, res) => {
  const user = await User.findById(req.params.id);
  user.isBlocked = true;
  await user.save();
  res.json({ msg: "User Blocked" });
});

// Delete user
router.delete("/:id", protect, adminOnly, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ msg: "User Deleted" });
});

module.exports = router;