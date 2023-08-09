import { Routes, Route } from "react-router-dom"
import { HomePage, MenuPage, BookingPage, NotFound } from '../views/IndexView'
import { NavBar } from "../components/NavBar/NavBar"

export const RouterApp = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/menu' element={<MenuPage/>} />
                <Route path='/reservas' element={<BookingPage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}