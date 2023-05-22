const { Router } = require("express");
const {
  activityHandler,
  activityPostHandler,
} = require("../handlers/activitiesHandler");

const activityRouter = Router();

activityRouter.post("/", activityPostHandler);
activityRouter.get("/", activityHandler);

module.exports = activityRouter;