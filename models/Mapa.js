const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Mapa', {
    geolocalizacao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};