const validateEmail = (email) => {
  return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
};
const validatePhone = (p) => {
  return /\d{10}/.test(p);
};
const validateUser = (user) => {
  let errors = [];
  // for user name
  if (user && typeof user.firstName === "undefined") {
    errors.push(`First Name can't be blank.`);
  }
  if (
    user &&
    typeof user.firstName !== "undefined" &&
    user.firstName.length < 3
  ) {
    errors.push(`First Name can't be less than 3 character.`);
  }
  // for email
  if (user && typeof user.email === "undefined") {
    errors.push(`Email can't be blank.`);
  }
  if (user && typeof user.email !== "undefined") {
    if (!validateEmail(user.email)) {
      errors.push(`Invalid email address!`);
    }
  }
  // for phone
  if (user && typeof user.contactNo === "undefined") {
    errors.push(`Contact No can't be blank.`);
  }
  if (user && typeof user.contactNo !== "undefined") {
    if (!validatePhone(user.contactNo)) {
      errors.push(`Invalid Contact No.!`);
    }
  }
  return errors;
};
module.exports = { validateUser };
