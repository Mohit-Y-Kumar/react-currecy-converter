import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Input from './Components/input.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Input/>
    <App/>
  </StrictMode>,
)
