const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const database = require("./db/database");
dotenv.config();
database();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use("/users", userRoute);

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => console.log(`App is running on port: ${PORT}`));
