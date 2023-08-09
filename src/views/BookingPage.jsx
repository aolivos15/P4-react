import { BookingCalendar } from "../components/BookingCalendar/BookingCalendar"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"
import { BookingTimeSelector } from "../components/BookingTimeSelector/BookingTimeSelector"
import { useState } from "react"

export const BookingPage = () => {

    const [date, setDate] = useState(new Date());

    return (
        <>
            <Header title='Reservas'/>
            <BookingCalendar date={date} onSelectDate={setDate}/>
            <BookingTimeSelector date={date.toLocaleDateString()} />
            <Footer />
        </>
    )
}
