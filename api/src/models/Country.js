const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', 
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
    },
    
    flag_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    continent: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    capital: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    population: {
      type: DataTypes.INTEGER,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  },
  //atributos
  { timestamps: false , });
};
