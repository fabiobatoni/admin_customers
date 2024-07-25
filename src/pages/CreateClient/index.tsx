import { Helmet } from 'react-helmet-async';
import './styles.css';

export function CreateClient(){
  return (
    <>
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

            <label>Naturalidade:</label>
            <input type="text" name="naturalidade" />

            <label>Nacionalidade:</label>
            <input type="text" name="nacionalidade" />
          </div>

          <div className="form-column">
            <label>Cidade:</label>
            <input type="text" name="cidade" />

            <label>Categoria:</label>
            <input type="text" name="categoria" />

            <label>Estado Civil:</label>
            <input type="text" name="estado_civil" />
          </div>

          <div className="form-column">
            <label>Estado:</label>
            <input type="text" name="estado" />

            <label>Telefone:</label>
            <input type="tel" name="telefone1" />

            <label>Data pagamento:</label>
            <input type="date" name="mespago" />
          </div>
        </div>
      </form>
      <button type="submit" className="submit-button">Cadastar</button>
    </div>
    </>
  );
}
