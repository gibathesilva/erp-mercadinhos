import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <h1>ERP Mercadinhos</h1>
      <p>✅ Backend funcionando em: https://erp-mercadinhos-backend.onrender.com</p>
      <p>✅ Sistema de estoque e validade</p>
      <p>✅ Controle FEFO com lotes AAA-0000</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
