import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <h1>ERP Mercadinhos</h1>
      <p>✅ Sistema de Controle de Estoque</p>
      <p>✅ Lotes AAA-0000 com FEFO</p>
      <p>✅ Alertas de validade configuráveis</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
