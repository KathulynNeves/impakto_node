const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, Mapa, Contrato, Notificacao, Usuario, Cliente, Relatorio, Outdoor, Agendamento} = require('./models'); // importa os modelos corretamente

const app = express();
app.use(bodyParser.json());

// Rota para criar um cliente
app.post('/cliente', async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.get('/clientes', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/clientes/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/clientes/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (cliente) {
      await cliente.update(req.body);
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/cliente/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (cliente) {
      await cliente.destroy();
      res.json({ message: 'Cliente deletado' });
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


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

// Rota para criar um notificação
app.post('/notificacao', async (req, res) => {
  try {
    const notificacao = await Notificacao.create(req.body);
    res.status(201).json(notificacao);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/notificacoes', async (req, res) => {
  try {
    const notificacoes = await Notificacao.findAll();
    res.json(notificacoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/notificacoes/:id', async (req, res) => {
  try {
    const notificacao = await Notificacao.findByPk(req.params.id);
    if (notificacao) {
      res.json(notificacao);
    } else {
      res.status(404).json({ error: 'Notificação não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/notificacoes/:id', async (req, res) => {
  try {
    const notificacao = await Notificacao.findByPk(req.params.id);
    if (notificacao) {
      await notificacao.update(req.body);
      res.json(notificacao);
    } else {
      res.status(404).json({ error: 'Notificação não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/notificacao/:id', async (req, res) => {
  try {
    const notificacao = await Notificacao.findByPk(req.params.id);
    if (notificacao) {
      await notificacao.destroy();
      res.json({ message: 'Notificação deletada' });
    } else {
      res.status(404).json({ error: 'Notificação não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// Rota para criar um usuario
app.post('/usuario', async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/usuarios/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/usuarios/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
      await usuario.update(req.body);
      res.json(usuario);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/usuario/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
      await usuario.destroy();
      res.json({ message: 'Usuário deletado' });
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para criar um mapa
app.post('/localizacao', async (req, res) => {
  try {
    const localizacao = await Mapa.create(req.body);
    res.status(201).json(localizacao);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/localizacoes', async (req, res) => {
  try {
    const localizacoes = await Mapa.findAll();
    res.json(localizacoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/localizacoes/:id', async (req, res) => {
  try {
    const localizacao = await Mapa.findByPk(req.params.id);
    if (localizacao) {
      res.json(localizacao)
    } else {
      res.status(404).json({ error: 'Localização não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/localizacoes/:id', async (req, res) => {
  try {
    const localizacao = await Mapa.findByPk(req.params.id);
    if (localizacao) {
      await localizacao.update(req.body);
      res.json(localizacao);
    } else {
      res.status(404).json({ error: 'Localização não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/localizacao/:id', async (req, res) => {
  try {
    const localizacao = await Mapa.findByPk(req.params.id);
    if (localizacao) {
      await localizacao.destroy();
      res.json({ message: 'Localização deletada' });
    } else {
      res.status(404).json({ error: 'Localização não encontrad' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para criar um relatorio
app.post('/relatorio', async (req, res) => {
  try {
    const relatorio = await Relatorio.create(req.body);
    res.status(201).json(relatorio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/relatorios', async (req, res) => {
  try {
    const relatorios = await Relatorio.findAll();
    res.json(relatorios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/relatorios/:id', async (req, res) => {
  try {
    const relatorio = await Relatorio.findByPk(req.params.id);
    if (relatorio) {
      res.json(relatorio);
    } else {
      res.status(404).json({ error: 'Relatório não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/relatorio/:id', async (req, res) => {
  try {
    const relatorio = await Relatorio.findByPk(req.params.id);
    if (relatorio) {
      await relatorio.update(req.body);
      res.json(relatorio);
    } else {
      res.status(404).json({ error: 'Relatório não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/relatorio/:id', async (req, res) => {
  try {
    const relatorio = await Relatorio.findByPk(req.params.id);
    if (relatorio) {
      await relatorio.destroy();
      res.json({ message: 'Relatório deletado' });
    } else {
      res.status(404).json({ error: 'Relatório não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

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

// Rota para criar um agendamento
app.post('/agendamento', async (req, res) => {
  try {
    const agendamento = await Agendamento.create(req.body);
    res.status(201).json(agendamento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/agendamentos', async (req, res) => {
    try {
      const agendamentos = await Agendamento.findAll();
      res.json(agendamentos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
app.get('/agendamentos/:id', async (req, res) => {
    try {
      const agendamento = await Agendamento.findByPk(req.params.id);
      if (agendamento) {
        res.json(agendamento);
      } else {
        res.status(404).json({ error: 'Agendamento não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
app.put('/agendamentos/:id', async (req, res) => {
    try {
      const agendamento = await Agendamento.findByPk(req.params.id);
      if (agendamento) {
        await agendamento.update(req.body);
        res.json(agendamento);
      } else {
        res.status(404).json({ error: 'Agendamento não encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});
  
app.delete('/agendamento/:id', async (req, res) => {
    try {
      const agendamento = await Agendamento.findByPk(req.params.id);
      if (agendamento) {
        await agendamento.destroy();
        res.json({ message: 'Agendamento deletado' });
      } else {
        res.status(404).json({ error: 'Agendamento não encontrado' });
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

