//! ESTE ES EL ENRUTADOR PRINCIPAL

const { Router } = require('express');
const router = Router();
const countriesRouter = require("./countriesRouter") 
const activityRouter = require("./activitiesRouter") 


// Configurar los routers
router.use("/countries", countriesRouter)
router.use("/activities", activityRouter)


module.exports = router;