const { Router } = require('express');
//traemos los handlers de countriesRouter
const {
  getCountriesHandler,
  getCountryHandler, 
  createCountryHandler} = require("../handlers/getCountriesHandler")

//enrutador
const countriesRouter = Router();



// #### **📍 GET | /countries**
// -  Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.

countriesRouter.get("/", getCountriesHandler)

// #### **📍 GET | /countries/:idPais**
// -  Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
// -  El país es recibido por parámetro (ID de tres letras del país).
// -  Tiene que incluir los datos de las actividades turísticas asociadas a este país.
countriesRouter.get("/:id", getCountryHandler)


// #### **📍 GET | /countries/name?="..."**

// -  Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// -  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// -  Si no existe el país, debe mostrar un mensaje adecuado.

countriesRouter.get("/countries/name?=", createCountryHandler)

module.exports = countriesRouter;

