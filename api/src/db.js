require('dotenv').config();//adentro tiene el archivo process {env {DB_USER etc}}
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
//   logging: false, //? set to console.log to see the raw SQL queries
//   native: false, //? lets Sequelize know we can use pg-native for ~30% more speed
// });

//* Aca estamos deployando
const sequelize = new Sequelize(DB_DEPLOY,{
  logging: false, //? set to console.log to see the raw SQL queries
  native: false, //? lets Sequelize know we can use pg-native for ~30% more speed
});


const basename = path.basename(__filename);

const modelDefiners = [];

//? Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

//? Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
//? Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Country, Activity } = sequelize.models;

// Aca vendrian las relaciones y la creacion de la tabla intermedia a traves de country_activity
Country.belongsToMany(Activity, { through: "country_activity" });
Activity.belongsToMany(Country, { through: "country_activity" });


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Country, Activity } = require('./db.js');
  conn: sequelize,     // para importar la conexión { conn } = require('./db.js');
};
