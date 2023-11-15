import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Header from "./components/header/Header.jsx";
import Table from "./components/table/Table.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Table/>
  </React.StrictMode>,
)
