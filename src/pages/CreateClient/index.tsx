import { Helmet } from 'react-helmet-async';
import './styles.css';
import { toast } from 'sonner';

export function CreateClient(){


  function handleCreateClient() {
    toast('Cliente cadastrado com sucesso')
  }

  return (
    <div className="puff-in">
    <Helmet title="Clientes | Cadastro" />
    <div className="cadastro-container">
      <form className="cadastro-form">
        <div className="full-width">
          <label>Nome:</label>
          <input type="text" name="nome" />

          <label>Observação:</label>
          <textarea name="observacao" />

          <label>Endereço:</label>
          <input type="text" name="endereco" />
        </div>

        <div className="form-columns">
          <div className="form-column">
            <label>Bairro:</label>
            <input type="text" name="bairro" />

            <label>Cidade:</label>
            <input type="text" name="cidade" />

            <label>Estado:</label>
            <input type="text" name="estado" />
            
          </div>

          <div className="form-column">
            <label>Naturalidade:</label>
            <input type="text" name="naturalidade" />

            <label>Categoria:</label>
            <input type="text" name="categoria" />

            <label>Estado Civil:</label>
            <input type="text" name="estado_civil" />
          </div>

          <div className="form-column">
            <label>Nacionalidade:</label>
            <input type="text" name="nacionalidade" />

            <label>Telefone:</label>
            <input type="tel" name="telefone1" />

            <label>Mês pagamento:</label>
            <input type="number" name="mespago" />

            <label>Ano pagamento:</label>
            <input type="number" name="mespago" />
          </div>
        </div>
      </form>
      <button type="submit" className="submit-button" onClick={handleCreateClient}>Cadastrar</button>
    </div>
    </div>
  );
}
