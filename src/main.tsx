import React from 'react'
import ReactDOM from 'react-dom/client'
import CardsMenu from './pages/CardsMenu.js'
import LoginForm from './pages/LoginForm.js'
import './utils/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginForm />
  </React.StrictMode>,
)
