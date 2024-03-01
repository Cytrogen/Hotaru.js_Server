const bcrypt = require( "bcrypt");
const mongoose = require("./mongodb");

const UserSchema = new mongoose.Schema({
    emailAddress: {
        type: String,
        unique: true
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        set(val) { return bcrypt.hashSync(val, 10) },
        select: false
    },
    DOBYear: {
        type: Number
    },
    DOBMonth: {
        type: Number
    },
    DOBDay: {
        type: Number
    },
    createTime: {
        type: Date,
        default: Date.now
    }
})

// Create a model from the schema.
const User = mongoose.model("User", UserSchema);
module.exports = User;
