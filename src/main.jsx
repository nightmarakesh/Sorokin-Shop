import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/globals/globals.css'
import './styles/base/variables.css'
import './styles/error.css'
import './styles/base/reset.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   </StrictMode>
)
