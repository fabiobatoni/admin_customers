import { Link } from 'react-router-dom';
import './styles.css';

export function Header(){
  return (
    <div className="dos-header-container">
      <div className="dos-title">Assoc. Ecletica dos Aposentados e Pensionistas</div>
      <div className="dos-container">
        <header className="dos-header">
          <div className="dos-menu">
            <span>
              <Link to="/create">
                Cadastrar
              </Link>
            </span>
            <span>
              <Link to="/search">
                Consultar
              </Link>
            </span>
            <span>Alterar</span>
            <span>Relatórios</span>
          </div>
        </header>
      </div>
    </div>
  );
}

