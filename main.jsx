import React from 'react'
import ReactDOM from 'react-dom/client'
import ProficoWebsite from './ProficoWebsite.jsx'
import ProficoWebsiteEN from './ProficoWebsiteEN.jsx'
import './index.css'

const path = window.location.pathname

const App = () => {
  if (path === '/en') {
    return <ProficoWebsiteEN />
  } else {
    return <ProficoWebsite />
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
