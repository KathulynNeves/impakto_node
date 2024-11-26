const { Sequelize, ForeignKeyConstraintError } = require('sequelize');


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

// Carrega os modelos passando `sequelize`
const Contrato = require('./Contrato.js')(sequelize);
const Notificacao = require('./Notificacao')(sequelize);
const Usuario = require('./Usuario')(sequelize);
const Cliente = require('./Cliente')(sequelize);


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

//Notificação
Notificacao.hasMany(Usuario,{
  foreignKey: 'usuarioId',
  as: 'usuario'
});
Usuario.belongsTo(Notificacao,{
  foreignKey: 'usuarioId',
  as: 'notificacao'
});


// Sincroniza o banco de dados
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

module.exports = { 
    sequelize, 
    Contrato, 
    Notificacao,
    Usuario,
};


// Rota para criar um outdoor
app.post('/outdoor', async (req, res) => {
  try {
    const outdoor = await Outdoor.create(req.body);
    res.status(201).json(outdoor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/outdoors', async (req, res) => {
    try {
      const outdoors = await Outdoor.findAll();
      res.json(outdoors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
app.get('/outdoors/:id', async (req, res) => {
    try {
      const outdoor = await Outdoor.findByPk(req.params.id);
      if (outdoor) {
        res.json(outdoor);
      } else {
        res.status(404).json({ error: 'Outdoor não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
app.put('/outdoors/:id', async (req, res) => {
    try {
      const outdoor = await Outdoor.findByPk(req.params.id);
      if (outdoor) {
        await outdoor.update(req.body);
        res.json(outdoor);
      } else {
        res.status(404).json({ error: 'Outdoor não encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});
  
app.delete('/outdoor/:id', async (req, res) => {
    try {
      const outdoor = await Outdoor.findByPk(req.params.id);
      if (outdoor) {
        await outdoor.destroy();
        res.json({ message: 'Outdoor deletado' });
      } else {
        res.status(404).json({ error: 'Outdoor não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

