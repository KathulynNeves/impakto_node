const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Notificacao', {
    mensagem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING, 
      allowNull: false
    }, 
    hora: {
      type: DataTypes.DATE, 
      allowNull: false
    },
    data: {
      type: DataTypes.DATE, 
      allowNull: false
    }, 
  });
};