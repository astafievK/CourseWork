import './index.css'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from "./components/Login/Login.jsx";
import { Provider } from 'react-redux';
import {store} from "./store/store.ts";
import PageStats from "./components/PageStats/PageStats.tsx";
import PageStudents from "./components/PageStudents/PageStudents.tsx";
import PageDisciplines from "./components/PageDisciplines/PageDisciplines.tsx";

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
            <Route path="" element={
                <>
                    <Login/>
                </>
            } />
            <Route path="stats" element={
                <>
                    <PageStats/>
                </>
            } />
            <Route path="students" element={
                <>
                    <PageStudents/>
                </>
            }/>
            <Route path="disciplines" element={
                <>
                    <PageDisciplines/>
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
