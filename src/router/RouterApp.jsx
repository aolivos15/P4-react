import { Routes, Route } from "react-router-dom"
import { HomePage, MenuPage, ReservationsPage, NotFound } from '../views/IndexView'
import { NavBarApp } from "../components/NavBarApp"

export const RouterApp = () => {
    return (
        <>
            <NavBarApp />
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='menu' element={<MenuPage/>} />
                <Route path='reservas' element={<ReservationsPage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}