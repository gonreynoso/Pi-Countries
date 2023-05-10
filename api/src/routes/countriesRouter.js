const { Router } = require('express');
const {
 getCountryHandler,
 getCountryIdHandler,
 postCountryHandler,
} = require("../handlers/getCountryHandler")


const countriesRouter = Router();

countriesRouter.get("/", getCountryHandler)

module.exports = countriesRouter;

