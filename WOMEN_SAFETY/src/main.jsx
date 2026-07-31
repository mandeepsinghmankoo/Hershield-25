
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lenis from 'lenis'

const lenis = new Lenis({ autoRaf: true , duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
