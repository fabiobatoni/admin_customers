import './global.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export function App() {

  return (
    <div className="app-container">
      <div className="App">
        <Header />
        <main>
          Teste 123
        </main>
        <Footer />
      </div>
    </div>
  )
}
