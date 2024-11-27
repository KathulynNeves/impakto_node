const { Sequelize, ForeignKeyConstraintError } = require('sequelize');


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

// Carrega os modelos passando `sequelize`
const Agendamento = require('./Agendamento')(sequelize);
const Cliente = require('./Cliente')(sequelize);
const Contrato = require('./Contrato')(sequelize);
const Outdoor = require('./Outdoor')(sequelize);
const Mapa = require('./Mapa')(sequelize);
const Usuario = require('./Usuario')(sequelize);
const Notificacao = require('./Notificacao')(sequelize);
const Relatorio = require('./Relatorio')(sequelize);


//relaçao um para muitos cliente-contrato
//Cliente
Cliente.hasMany(Contrato, {
    foreignKey: 'idCliente', 
    as: 'contratos'
}); 
Contrato.belongsTo(Cliente, {
    foreignKey: 'idCliente', 
    as: 'cliente'
});

Cliente.hasOne(Agendamento, {
    foreignKey: 'clienteId', 
    as: 'agendamento'
}); 
Agendamento.belongsTo(Cliente, {
    foreignKey: 'clienteId', 
    as: 'cliente'
}); 

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

//Agendamento
Agendamento.hasOne(Outdoor, {
    foreignKey: 'agendamentoId', 
    as: 'outdoor'
}); 
Outdoor.belongsTo(Agendamento, {
    foreignKey: 'agendamentoId', 
    as: 'agendamento'
}); 

//Mapa
Mapa.hasMany(Outdoor, {
    foreignKey: 'mapaId', 
    as: 'outdoors'
});
Outdoor.belongsTo(Mapa, {
    foreignKey: 'mapaId', 
    as: 'mapa'
});


Mapa.hasOne(Agendamento,{
    foreignKey: 'agendamentoId',
    as: 'agendamento'
});
Agendamento.belongsTo(Mapa,{
    ForeignKey: 'agendamentoId',
    as: 'mapa'
});

//Notificação
Notificacao.hasMany(Usuario,{
    foreignKey: 'usuarioId',
    as: 'usuario'
});
Usuario.belongsTo(Notificacao,{
    foreignKey: 'usuarioId',
    as: 'notificacao'
});

//Relatorio
Relatorio.hasMany(Outdoor,{
    foreignKey: 'outdoorId',
    as: 'outdoor'
});
Outdoor.belongsTo(Relatorio,{
    foreignKey:'outdoorId',
    as: 'relatorio'
});

Relatorio.hasOne(Cliente,{
    foreignKey: 'clienteId',
    as: 'cliente'
});
Cliente.belongsTo(Relatorio,{
    foreignKey:'clienteId',
    as: 'relatorio'
});

Relatorio.hasMany(Contrato,{
    foreignKey: 'contratoId',
    as: 'contrato'
});
Contrato.belongsTo(Relatorio,{
    foreignKey:'contratoId',
    as: 'relatorio'
});

Relatorio.hasMany(Usuario,{
    foreignKey: 'usuarioId',
    as: 'usuario'
});
Usuario.belongsTo(Relatorio,{
    foreignKey:'usuarioId',
    as: 'relatorio'
});



// Sincroniza o banco de dados
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

module.exports = { 
    sequelize, 
    Cliente, 
    Contrato, 
    Agendamento, 
    Outdoor,
    Mapa,
    Notificacao,
    Relatorio, 
    Usuario
};