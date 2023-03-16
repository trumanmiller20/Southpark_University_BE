const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const AuthRouter = require("./routes/AuthRouter");
const CourseRouter = require("./routes/CourseRouter");
const GradeRouter = require("./routes/GradeRouter");
const StudentRouter = require("./routes/StudentRouter");
const UserRouter = require("./routes/UserRouter");


const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", AuthRouter);
app.use("/course", CourseRouter);
app.use("/grade", GradeRouter);
app.use("/student", StudentRouter);
app.use("/user", UserRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`));
