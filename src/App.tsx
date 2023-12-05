import './index.css'
import TableMarks from "./components/Marks/TableMarks/TableMarks.jsx";
import TableDisciplines from "./components/Disciplines/TableDisciplines/TableDisciplines.jsx";
import TableStudents from "./components/Students/TableStudents/TableStudents.jsx";
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import StaffHeaderStats from './components/StaffHeaderStats/StaffHeaderStats.jsx';
import StaffHeaderStudents from './components/StaffHeaderStudents/StaffHeaderStudents.jsx';
import StaffHeaderDisciplines from './components/StaffHeaderDisciplines/StaffHeaderDisciplines.jsx';
import Login from "./components/Login/Login.jsx";
import { Provider } from 'react-redux';
import {store} from "./store/store.ts";

const Root = () => {
    return (
        <>
            <Outlet/>
        </>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="login" element={
                <>
                    <Login/>
                </>
            } />
            <Route path="stats" element={
                <>
                    <StaffHeaderStats/>
                    <TableMarks/>
                </>
            } />
            <Route path="students" element={
                <>
                    <StaffHeaderStudents/>
                    <TableStudents />
                </>
            }/>
            <Route path="disciplines" element={
                <>
                    <StaffHeaderDisciplines/>
                    <TableDisciplines />
                </>
            }/>
        </Route>
    ))


function App() {

  return (
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
  )
}

export default App
