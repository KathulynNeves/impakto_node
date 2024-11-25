const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
  return sequelize.define('Contrato', {
    data: {
      type: DataTypes.DATE, 
      allowNull: false
    },
    assinaturaDigital: {
      type: DataTypes.STRING, 
      allowNull: false
    }, 
    prazo: {
        type: DataTypes.DATE, 
        allowNull: false
    }
  });
};