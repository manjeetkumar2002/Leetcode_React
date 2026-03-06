// Possible routes
// create
// fetch
// update
// delete

const express = require("express");
const adminMiddleware = require("../middleware/adminMiddleware");
const userMiddleware = require("../middleware/userMiddleware");
const {
  createProblem,
  updateProblem,
  deleteProblem,
  getProblemById,
  getAllProblem,
  solvedAllProblemByUser,
} = require("../controllers/userProblem");
const problemRouter = express.Router();

// admin works
problemRouter.post("/create", adminMiddleware, createProblem);
problemRouter.put("/update/:id", adminMiddleware, updateProblem);
problemRouter.delete("/delete/:id", adminMiddleware, deleteProblem);
// normal user routes
problemRouter.get("/ProblemById/:id", userMiddleware, getProblemById);
problemRouter.get("/getAllProblem", userMiddleware, getAllProblem);
problemRouter.get(
  "/problemSolvedByUser",
  userMiddleware,
  solvedAllProblemByUser,
);

module.exports = problemRouter;
