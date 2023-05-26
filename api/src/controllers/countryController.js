const { Country, Activity } = require("../db")
const axios = require("axios");//?solo usado para el pedido a la API
const { Op } = require("sequelize");


//? Peticion a la API para guardar los datos en la DB, se hace una sola vez y luego se deja comentada
// const getAllCountries = async () => {

//     const respuestaApi = await axios.get("https://rest-countries.up.railway.app/v3/all");//?nuevo link
//     const countries = respuestaApi.data.map((country) => ({
//         id: country.cca3,
//         name: country.name.common,
//         flag: country.flags[1],
//         continent: country.continents[0],
//         capital: Array.isArray(country.capital)
//             ? country.capital.join(", ")
//             : country.capital,
//         subregion: country.subregion,
//         area: country.area,
//         population: country.population,
//         created: false,
//     }))

//     //?Aca se guardan los datos
//     const savedCountries = await Country.bulkCreate(countries);
//     return savedCountries;
// }

// //?Trae los paises de la DB junto con la actividad
const getAllCountries = async () => {
    return await Country.findAll({
        include: [
            {
                model: Activity,
                attributes: ["name", "difficulty", "duration", "season"],
                through: { attributes: [] },
            },
        ],
    });
};


//? Obtiene el pais por ID especifico mas las actividades
const getCountriesById = async (id) => {
    return await Country.findOne({
        where: { id },
        include: [
            {
                model: Activity,
                attributes: ["name", "difficulty", "duration", "season"],
                through: { attributes: [] },
            },
        ],
    });
};


//?Obtiene el pais por nombre
const getCountriesByName = async (name) => {
    return await Country.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
    });
};






module.exports = {
    getAllCountries,
    getCountriesById,
    getCountriesByName,
}