import './styles.css';

export function Header(){
  return (
    <div className="dos-header-container">
      <div className="dos-title">Assoc. Ecletica dos Aposentados e Pensionistas</div>
      <div className="dos-container">
        <header className="dos-header">
          <div className="dos-menu">
            <span>Arquivos</span>
            <span>Movimentos</span>
            <span>Relatórios</span>
            <span>Ajuda</span>
          </div>
        </header>
      </div>
    </div>
  );
}

