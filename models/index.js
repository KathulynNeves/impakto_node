const { Sequelize, ForeignKeyConstraintError } = require('sequelize');


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

// Carrega os modelos passando `sequelize`
const Contrato = require('./Contrato.js')(sequelize);


//relaçao um para um 
//Contrato
Contrato.hasOne(Outdoor, {
  foreignKey: 'contratoId', 
  as: 'outdoor'
}); 
Outdoor.belongsTo(Contrato, {
  foreignKey: 'contratoId', 
  as: 'contrato'
}); 


// Sincroniza o banco de dados
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

module.exports = { 
    sequelize, 
    Contrato, 
};