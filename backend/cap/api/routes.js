const express = require("express");
const procurementService = require("../services/procurement.service");

const router = express.Router();

router.post("/procurement", async (req, res, next) => {
  try {
    const result = await procurementService.createRequest(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
});

router.get("/health", (_, res) => {
  res.json({ status: "UP" });
});

module.exports = router;
