const Book = require("../models/Book");

exports.createBookService = async (data, userId) => {
  return await Book.create({
    ...data,
    seller: userId
  });
};

exports.getBooksService = async (query) => {
  const filter = {
    title: { $regex: query.search || "", $options: "i" }
  };

  if (query.category) filter.category = query.category;

  return await Book.find(filter).populate("seller", "name");
};