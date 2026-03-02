const express = require("express");
const router = express.Router();

const {
  createBook,
  getBooks,
  updateBook,
  deleteBook
} = require("../controllers/bookController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createBook);
router.get("/", getBooks);
router.put("/:id", protect, updateBook);
router.delete("/:id", protect, deleteBook);

module.exports = router;