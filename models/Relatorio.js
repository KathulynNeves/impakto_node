const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Relatorio', {
    tituloRelatorio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    historico: {
      type: DataTypes.STRING, 
      allowNull: false
    }, 
  });
};