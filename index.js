const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, Contrato} = require('./models'); // importa os modelos corretamente

const app = express();
app.use(bodyParser.json());

// Rota para criar um contrato
app.post('/contrato', async (req, res) => {
  try {
    const contrato = await Contrato.create(req.body);
    res.status(201).json(contrato);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/contratos', async (req, res) => {
    try {
      const contratos = await Contrato.findAll();
      res.json(contratos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
app.get('/contratos/:id', async (req, res) => {
    try {
      const contrato = await Contrato.findByPk(req.params.id);
      if (contrato) {
        res.json(contrato);
      } else {
        res.status(404).json({ error: 'Contrato não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
app.put('/contratos/:id', async (req, res) => {
    try {
      const contrato = await Contrato.findByPk(req.params.id);
      if (contrato) {
        await contrato.update(req.body);
        res.json(contrato);
      } else {
        res.status(404).json({ error: 'Contrato não encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});
  
app.delete('/contrato/:id', async (req, res) => {
    try {
      const contrato = await Contrato.findByPk(req.params.id);
      if (contrato) {
        await contrato.destroy();
        res.json({ message: 'Contrato deletado' });
      } else {
        res.status(404).json({ error: 'Contrato não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});


// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});