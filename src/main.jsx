import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import App from './App'
import './assets/css/satoshi.css'
import './assets/css/plugins.css'
import './assets/css/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter basename='/demos/demo-1'>
  <Routes>
    <Route path="/*" element={<App />} />
  </Routes>
</BrowserRouter>

  </React.StrictMode>,
)
