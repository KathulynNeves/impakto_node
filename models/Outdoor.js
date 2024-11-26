const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Outdoor', {
    figuraOutdoor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fotoOutdoor: {
      type: DataTypes.STRING,  
      allowNull: false
    }, 
    descricao: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    statusUso: {
      type: DataTypes.BOOLEAN, 
      allowNull: false
    }, 
    tipoOutdoor: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
  });
};

