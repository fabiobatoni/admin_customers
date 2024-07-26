import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './styles.css';
import { toast } from 'sonner';

export function UpdateClient() {
  const [formData, setFormData] = useState({
    nome: 'Andre Luis de Andrade',
    observacao: 'Aposentado por idade',
    endereco: 'Rua Exemplo, 123',
    bairro: 'Centro',
    cidade: 'Itapira',
    estado: 'SP',
    naturalidade: 'Brasileiro',
    categoria: 'Associado',
    estado_civil: 'C',
    nacionalidade: 'Brasileira',
    telefone1: '(00) 00000-0000',
    mespago: 7,
    anopago: 2023,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleCreateClient() {
    toast('Cliente Alterado com sucesso');
  }

  return (
    <div className="puff-in">
      <Helmet title="Clientes | Cadastro" />
      <div className="cadastro-container">
        <form className="cadastro-form">
          <div className="full-width">
            <label>Nome:</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />

            <label>Observação:</label>
            <textarea
              name="observacao"
              value={formData.observacao}
              onChange={handleChange}
            />

            <label>Endereço:</label>
            <input
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
            />
          </div>

          <div className="form-columns">
            <div className="form-column">
              <label>Bairro:</label>
              <input
                type="text"
                name="bairro"
                value={formData.bairro}
                onChange={handleChange}
              />

              <label>Cidade:</label>
              <input
                type="text"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
              />

              <label>Estado:</label>
              <input
                type="text"
                name="estado"
                value={formData.estado}
                onChange={handleChange}
              />
            </div>

            <div className="form-column">
              <label>Naturalidade:</label>
              <input
                type="text"
                name="naturalidade"
                value={formData.naturalidade}
                onChange={handleChange}
              />

              <label>Categoria:</label>
              <input
                type="text"
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
              />

              <label>Estado Civil:</label>
              <input
                type="text"
                name="estado_civil"
                value={formData.estado_civil}
                onChange={handleChange}
              />
            </div>

            <div className="form-column">
              <label>Nacionalidade:</label>
              <input
                type="text"
                name="nacionalidade"
                value={formData.nacionalidade}
                onChange={handleChange}
              />

              <label>Telefone:</label>
              <input
                type="tel"
                name="telefone1"
                value={formData.telefone1}
                onChange={handleChange}
              />

              <label>Mês pagamento:</label>
              <input
                type="number"
                name="mespago"
                value={formData.mespago}
                onChange={handleChange}
              />

              <label>Ano pagamento:</label>
              <input
                type="number"
                name="anopago"
                value={formData.anopago}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
        <button type="submit" className="submit-button" onClick={handleCreateClient}>
          Alterar
        </button>
      </div>
    </div>
  );
}
