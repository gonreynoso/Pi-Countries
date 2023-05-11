const express = require('express');
const getCountriesHandler = express();
const axios = require('axios');
require('dotenv').config();
const { API_URL } = process.env;

// #### **📍 GET | /countries**
// -  Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.
getCountriesHandler.get("/", async (req, res) => {
 try {
   const response = await axios.get(API_URL);
   // response.data contiene el arreglo de países obtenido desde el servidor
   res.json(response.data);
 } catch (error) {
   console.error(error);
   res.status(500).send('Error al obtener los países');
 }
});

// #### **📍 GET | /countries/:idPais**
// -  Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
// -  El país es recibido por parámetro (ID de tres letras del país).
// -  Tiene que incluir los datos de las actividades turísticas asociadas a este país.
const getCountryHandler = (req, res) => {
 res.send(200, "Traigo los paises por id")

}
// #### **📍 GET | /countries/name?="..."**

// -  Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// -  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// -  Si no existe el país, debe mostrar un mensaje adecuado.
const createCountryHandler = (req, res) => {
 res.send(200, "Creo un pais")

}


module.exports = {
 getCountriesHandler,
 getCountryHandler,
 createCountryHandler
}