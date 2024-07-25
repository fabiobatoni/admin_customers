import './global.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

export function App() {

  return (
    <div className="app-container">
      <div className="App">
        <Header />
        <main>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </main>
        <Footer />
      </div>
    </div>
  )
}
