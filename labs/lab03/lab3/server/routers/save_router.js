import express from "express";

const saveRouter = express.Router();

saveRouter.post("/save", (req, res) => {
  // Add your logic for saving data here
  res.send("Data saved!");
});

export default saveRouter;
