const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, rquired: true },
    profilePic: { type: String, default: "" },
    favourite: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
    default: [{}],
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
