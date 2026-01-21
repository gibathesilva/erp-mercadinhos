const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    hora: new Date().toISOString(),
    mensagem: 'ERP Mercadinhos online!'
  });
});

const PORT = 10000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
