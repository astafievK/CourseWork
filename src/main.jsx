import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from "./components/Header/Header.jsx";
import Table from "./components/Table/Table.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Table/>
  </React.StrictMode>,
)
