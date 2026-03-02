const Book = require("../models/Book");

exports.createBook = async (req, res) => {
  const book = await Book.create({
    ...req.body,
    seller: req.user._id
  });
  res.json(book);
};

exports.getBooks = async (req, res) => {
  const query = {
    title: { $regex: req.query.search || "", $options: "i" }
  };

  if (req.query.category) query.category = req.query.category;

  const books = await Book.find(query).populate("seller", "name");
  res.json(books);
};

exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
};

exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ msg: "Book deleted" });
};