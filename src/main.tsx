import React from 'react'
import ReactDOM from 'react-dom/client'
import './utils/index.css'
import { Router } from './router/Router.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
