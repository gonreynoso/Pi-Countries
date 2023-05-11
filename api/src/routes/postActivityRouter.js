const { Router } = require('express');
const {postActivityHandler} = require("../handlers/postActivityHandler")

const postActivityRouter = Router()

// #### **📍 POST | /activities**

// -  Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
// -  Toda la información debe ser recibida por body.
// -  Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).
postActivityRouter.post("/", postActivityHandler)


module.exports = postActivityRouter