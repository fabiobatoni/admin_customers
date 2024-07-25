import './global.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

export function App() {

  return (
    <HelmetProvider>
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
    </HelmetProvider>
  )
}
