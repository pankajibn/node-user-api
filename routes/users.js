const router = require("express").Router();
const User = require("../models/User");
const { validateUser } = require("../validations/index");

// ADD NEW USER
router.post("/", async (req, res) => {
  const newUser = req.body;
  try {
    //validate user
    const errors = validateUser(newUser);
    if (errors.length > 0) res.status(400).send(JSON.stringify(errors));
    //add user
    const user = new User(newUser);
    const latestUser = await user.save();
    res.status(201).json(latestUser);
  } catch (error) {
    res.status(500).json({ message: `${error}` });
  }
});

// GET ALL USERS
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET SINGLE USER
router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  if (typeof userId === "undefined" || userId === "")
    res.status(404).send(`User doesn't exist`);

  try {
    const user = await User.findById(userId);
    if (!user) res.status(404).send(`User doesn't exist`);

    res.status(200).json(user._doc);
  } catch (error) {
    res.status(500).send(error);
  }
});

// UPDATE USER
router.put("/:id", async (req, res) => {
  const userId = req.params.id;
  if (userId !== req.body.id) res.status(404).send(`Invalid user id.`);
  try {
    //validate user
    const errors = validateUser(req.body);
    if (errors.length > 0) res.status(400).send(JSON.stringify(errors));
    const udatedUser = await User.findByIdAndUpdate(userId, req.body);
    if (!udatedUser) res.status(404).send(`Record not found.`);

    res.status(200).send(`User has been updated.`);
  } catch (error) {
    res.status(500).send(error);
  }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
  const userId = req.params.id;
  if (userId !== req.body.id) res.status(404).send(`Invalid user id.`);
  try {
    //validate user
    await User.findByIdAndDelete(userId);
    res.status(200).send(`User has been deleted.`);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
