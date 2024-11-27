const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Agendamento', {
    data: {
      type: DataTypes.DATE, 
      allowNull: false
    },
    hora: {
      type: DataTypes.DATE, 
      allowNull: false
    } 
  });
};
