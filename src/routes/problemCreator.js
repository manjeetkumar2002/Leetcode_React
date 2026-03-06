// Possible routes
// create
// fetch
// update
// delete

const express = require("express")
const adminMiddleware = require("../middleware/adminMiddleware")

const problemRouter = express.Router()

// admin works
problemRouter.post("/create",adminMiddleware,createProblem)
problemRouter.patch("/:id",adminMiddleware,updateProblem)
problemRouter.delete("/:id",adminMiddleware,deleteProblem)
// normal user routes
problemRouter.get("/:id",getProblemById)
problemRouter.get("/",getAllProblem)
problemRouter.get("/user",solvedAllProblemByUser)