import './styles.css';

export function CreateClient(){
  return (
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

            <label>Telefone 1:</label>
            <input type="tel" name="telefone1" />

            <label>Telefone 2:</label>
            <input type="tel" name="telefone2" />

            <label>Data Pagamento:</label>
            <input type="date" name="mespago" />

          </div>

          <div className="form-column">
            <label>Categoria:</label>
            <input type="text" name="categoria" />

            <label>Naturalidade:</label>
            <input type="text" name="naturalidade" />

            <label>Estado Natural:</label>
            <input type="text" name="estado_natural" />

            <label>Nacionalidade:</label>
            <input type="text" name="nacionalidade" />

            <label>Estado Civil:</label>
            <input type="text" name="estado_civil" />
          </div>
        </div>
      </form>
      <button type="submit" className="submit-button">Cadastrar</button>
    </div>
  );
}
