import './global.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'

export function App() {

  return (
    <HelmetProvider>
      <Toaster richColors closeButton />
      <BrowserRouter>
      <div className="app-container">
        <div className="App">
          <Header />
          <main>
            <Router />
          </main>
          <Footer />
        </div>
      </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}
