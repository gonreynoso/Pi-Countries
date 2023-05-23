const { Router } = require("express");
const {
  activityHandler,
  activityPostHandler,
} = require("../handlers/activitiesHandler");

const activityRouter = Router();

//📍  POST | /activities**
// -  Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
// -  Toda la información debe ser recibida por body.
// -  Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).
activityRouter.post("/", activityPostHandler);



// 📍 GET | /activities**
// - Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.
activityRouter.get("/", activityHandler);

module.exports = activityRouter;