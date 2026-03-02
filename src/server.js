// const app = require("./src/app");
// const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGO_URI)
// .then(() => {
//     console.log("MongoDB Connected");
//     app.listen(process.env.PORT, () => {
//         console.log(`Server running on ${process.env.PORT}`);
//     });
// });

require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});