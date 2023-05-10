const { Country } = require("../db")

const createCountryDB = async (id, name, continent, flag_image, continent, capital, population) => {
 const newCountry = await Country.create({ id, name, continent, flag_image, continent, capital, population })
 return newCountry
}

module.exports = {
 createCountryDB,
}