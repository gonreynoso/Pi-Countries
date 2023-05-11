//! ESTE ES EL ENRUTADOR PRINCIPAL

const { Router } = require('express');
const mainRouter = Router();

// Importar todos los routers;
const countriesRouter = require("./countriesRouter")
const postActivityRouter = require("./postActivityRouter")


// Configurar los routers
mainRouter.use("/countries", countriesRouter )
mainRouter.use("/post", postActivityRouter )




module.exports = mainRouter;

