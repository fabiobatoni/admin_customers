import './styles.css';

export function Header(){
  return (
    <div className="dos-header-container">
      <div className="dos-title">Assoc. Ecletica dos Aposentados e Pensionistas</div>
      <div className="dos-container">
        <header className="dos-header">
          <div className="dos-menu">
            <span>
              <a href="/create">
                Cadastrar
              </a>
            </span>
            <span>
              <a href="/search">
                Consultar
              </a>
            </span>
            <span>Relatórios</span>
            <span>Ajuda</span>
          </div>
        </header>
      </div>
    </div>
  );
}

