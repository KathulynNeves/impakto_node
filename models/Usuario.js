const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Usuario', {
    nomeUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resposabilidadeDoDia: {
      type: DataTypes.STRING,  
      allowNull: false
    }, 
    cargo: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    senha: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
  });
};

