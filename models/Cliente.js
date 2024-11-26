const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Cliente', {
    nomeCliente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numeroContato: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    cpfCliente: {
        type: DataTypes.STRING, 
        allowNull: false
      },
    emailCliente : {
        type: DataTypes.STRING, 
        allowNull: false
      },
    cnpjCliente: {
        type: DataTypes.STRING, 
        allowNull: false
      },
  });
};
