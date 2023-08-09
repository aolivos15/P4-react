import { BookingCalendar } from "../components/BookingCalendar/BookingCalendar"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"
import { BookingTimeSelector } from "../components/BookingTimeSelector/BookingTimeSelector"

export const BookingPage = () => {
    return (
        <>
            <Header title='Reservas'/>
            <BookingCalendar />
            <BookingTimeSelector />
            <Footer />
        </>
    )
}
