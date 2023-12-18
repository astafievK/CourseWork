import './index.css'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import PageLogin from "./components/PageLogin/PageLogin.tsx";
import { Provider } from 'react-redux';
import {persistor, store} from "./store/store.ts";
import PageStats from "./components/PageStats/PageStats.tsx";
import PageStudents from "./components/PageStudents/PageStudents.tsx";
import PageDisciplines from "./components/PageDisciplines/PageDisciplines.tsx";
import {PersistGate} from "redux-persist/integration/react";

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
                    <PageLogin/>
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
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    )
}

export default App
