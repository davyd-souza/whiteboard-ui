// DEPENDENCY
import React from 'react'
import ReactDOM from 'react-dom/client'

// COMPONENT
import { App } from './App'

// STYLE
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
