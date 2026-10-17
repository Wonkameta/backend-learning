
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    level: {
        type: Number,
        min: 100,
        max: 500
    },

    role: {
        type: String,
        enum: ["student", "admin"],
        default: "student"
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
