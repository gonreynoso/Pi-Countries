const { getCountryDB } = require("../controllers/countryController")
require('dotenv').config();//adentro tiene el archivo process {env {DB_USER etc}}
const { API_URL } = process.env;

const getCountryHandler = async (req, res) => {
 try {
  const getCountries = await axios.get(`${API_URL}/countries`);
   // response.data contiene el arreglo de países obtenido desde el servidor
  const response = res.json(response.data);
  } catch (error) {
   console.error(error);
   res.status(500).send('Error al obtener los países');
  }

 };

 // const { name } = req.query;

 //  try {
 //   if (name) {
 //    const response = await getCountryDB(name)
 //    return res.status(200).json(response);
 //   }
 //   const response = await getCountryDB()
 //   res.status(200).json(response)
 //  } catch (error) {
 //   res.status(400).json({ error: error.message })
 //  }

module.exports = {
 getCountryHandler,
}