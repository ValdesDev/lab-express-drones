const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

router.get("/drones", async (req, res, next) => {
  try {
    const drones = await Drone.find({});
    res.render("drones/list", { drones });
  } catch (err) {
    console.log("err", err);
  }
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create", async (req, res, next) => {
  try {
    await Drone.create(req.body);
    res.redirect("/drones");
  } catch (err) {
    console.log("err", err);
  }
});

router.get("/drones/:id/edit", async (req, res, next) => {
  try {
    const updateDrone = await Drone.findById(req.params.id);
    res.render("drones/update-form", updateDrone);
  } catch (err) {
    console.log("err", err);
  }
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
