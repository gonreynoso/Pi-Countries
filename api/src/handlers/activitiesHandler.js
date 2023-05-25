const {
  getActivities,
  postActivity,
  getActivityByName,
  activityDeleteAll,
  activityDeleteById,
} = require("../controllers/activityController.js");

const activityPostHandler = async (req, res) => {
  const { name, difficulty, duration, season, country } = req.body;

  try {
    const activity = await postActivity({
      name,
      difficulty,
      duration,
      season,
      country,
    });
    res.status(200).send(activity);
  } catch (error) {
    console.error("Error ocurred while creating activity", error);
    res
      .status(400)
      .json({ error: "Failed to create activity. Please try again later." });
  }
};

const activityHandler = async (req, res) => {
  const { name } = req.query;

  try {
    let results;
    if (name) {
      results = await getActivityByName(name);
    } else {
      results = await getActivities();
    }
    res.status(200).send(results);
  } catch (error) {
    console.error("Error ocurred while fetching activity", error);
    res
      .status(400)
      .json({ error: "Failed to fetch activity. Please try again later." });
  }
};

// const activityDeleteHandler = (req, res) => {
//   const { id } = req.params;
//   try {
//     if (id === "all") {
//       activityDeleteAll();
//       res.status(200).send("All activities erased");
//     }else{
//       activityDeleteById(id);
//       res.status(200).send(`Activity ID:${id} deleted successfully`);
//     }
//   } catch (error) {
//     console.error("Not possible to delete activities");
//     res.status(400).json({ error: "Failed to delete activities" });
//   }
// };

module.exports = { 
  activityHandler,
  activityPostHandler, 
  // activityDeleteHandler 
};