import { useState } from 'react';
import './styles.css';
import { Helmet } from 'react-helmet-async';
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom';

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
      observacao: 'Aposentado por idade',
      categoria: 'Associado',
      estado: 'SP',
      naturalidade: 'Brasileiro',
      endereco: 'Rua Exemplo, 123',
      telefone: '(00) 00000-0000',
      pago: true,
    });
  };

  return (
    <div className="puff-in">
    <Helmet title="Clientes | Consultar" />
    <div className="consulta-container">
      <input
        type="text"
        className="input-pesquisa"
        placeholder="Digite o código do cliente"
      />
      <button onClick={buscarCliente} className="buscar-button"><Search width={15} height={15}/> Procurar</button>

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

          <button className="buscar-button">
            <Link to="/update">
              Alterar
            </Link>
          </button>
        </div>
      )}
    </div>
    </div>
  );
}
