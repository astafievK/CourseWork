import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from "./components/Header/Header.jsx";
import TableMarks from "./components/Marks/TableMarks/TableMarks.jsx";
import TableDisciplines from "./components/Disciplines/TableDisciplines/TableDisciplines.jsx";
import TableStudents from "./components/Students/TableStudents/TableStudents.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header name={"Кирилл"} surname={"Астафьев"} group={"ИСПП-01"}/>
      <TableStudents/>
  </React.StrictMode>,
)
