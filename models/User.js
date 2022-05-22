const mongoose = require("mongoose");
const emailValidator = (email) => {
  return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
};

const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: {
    type: String,
    min: 3,
    required: true,
  },
  lastName: {
    type: String,
    min: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (email) {
        return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
      },
      message: `Please enter a valid Email address!`,
    },
  },
  contactNo: {
    type: Number,
    unique: true,
    validate: {
      validator: function (p) {
        return /\d{10}/.test(p);
      },
      message: (props) => `${props.value} is not a valid contact number!`,
    },
  },
});

module.exports = mongoose.model("users", userSchema);
