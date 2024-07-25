import './styles.css';

export function Footer() {

  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString();

  return (
    <footer className="dos-footer">
      {currentDate} © {currentYear} - Todos os Direitos Reservados
    </footer>
  );
}