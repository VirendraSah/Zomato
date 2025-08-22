import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './Pages/Home'
import { ScrollProvider } from './context/ScrollContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScrollProvider>
      <Home />
    </ScrollProvider>
  </StrictMode>,
)
