import { useState } from 'react';
import './styles.css';
import { Helmet } from 'react-helmet-async';

interface ClienteInfo {
  nome: string;
  observacao: string;
  categoria: string;
  estado: string;
  naturalidade: string;
  endereco: string;
  telefone: string;
  pago: boolean;
}

export function SearchClient() {
  const [clienteInfo, setClienteInfo] = useState<ClienteInfo | null>(null);

  const buscarCliente = () => {
    setClienteInfo({
      nome: 'Andre Luis de Andrade',
      observacao: 'Caloteiro',
      categoria: 'Careca',
      estado: 'N/A',
      naturalidade: 'Itapira',
      endereco: 'Rua Exemplo, 123',
      telefone: '(00) 00000-0000',
      pago: true,
    });
  };

  return (
    <>
    <Helmet title="Clientes | Consultar" />
    <div className="consulta-container">
      <input
        type="text"
        className="input-pesquisa"
        placeholder="Digite o código do cliente"
      />
      <button onClick={buscarCliente} className="buscar-button">Procurar</button>

      {clienteInfo && (
        <div className="info-container">
          <p><strong>Nome:</strong> {clienteInfo.nome}</p>
          <p><strong>Observação:</strong> {clienteInfo.observacao}</p>
          <p><strong>Categoria:</strong> {clienteInfo.categoria}</p>
          <p><strong>Estado:</strong> {clienteInfo.estado}</p>
          <p><strong>Naturalidade:</strong> {clienteInfo.naturalidade}</p>
          <p><strong>Endereço:</strong> {clienteInfo.endereco}</p>
          <p><strong>Telefone:</strong> {clienteInfo.telefone}</p>
          <p><strong>Pago:</strong> {clienteInfo.pago ? 'Sim' : 'Não'}</p>
        </div>
      )}
    </div>
    </>
  );
}
