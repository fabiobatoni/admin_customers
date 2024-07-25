import { Helmet } from "react-helmet-async";

export function Home() {
  return(
    <>
      <Helmet title="Clientes | Home" />
      <ul>
        <li>(Cadastrar) - Opção para cadastrar todos os clientes</li>
        <li>(Consultar) - Opção para consultar todos os clientes</li>
        <li>(Relatórios) - Opção para Visualizar informações <b>"Em desenvolvimento"</b></li>
        <li>(Ajuda) - Mais informações do sistema</li>
      </ul>
    </>
  )
}