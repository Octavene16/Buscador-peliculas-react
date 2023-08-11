import React from 'react'
import ReactDOM from 'react-dom/client'
import './movieSearch.css'
import { BuscadorPeliculas } from './BuscadorPeliculas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BuscadorPeliculas />
  </React.StrictMode>,
)
