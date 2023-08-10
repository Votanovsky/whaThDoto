import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Home from './components/home'
import Layout from './components/Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>,
)
