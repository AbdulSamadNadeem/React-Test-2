import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ApiContext from './Context/API Context/ApiContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <ApiContext>
    <BrowserRouter>
         <App />
    </BrowserRouter>
  </ApiContext>,
)
