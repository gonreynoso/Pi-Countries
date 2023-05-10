const { Country } = require("../db")

const getCountryDB = async (name) => {
 if (name) {
  const countryByName = await Country.findOne({ where: { name } })
  return countryByName;
 }
 const allCountries = await Country.findAll()
 return allCountries
}

const createActivityDB = async(id, name, dificulty, duration, season) => {
 const newActivity = await activity.create({id, name, dificulty, duration, season})
 return newActivity
}


module.exports = {
 getCountryDB,
 createActivityDB,
}