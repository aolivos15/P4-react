import { Header } from "../components/Header/Header"
import { BookingCalendar } from "../components/BookingCalendar/BookingCalendar"
import { BookingTimeSelector } from "../components/BookingTimeSelector/BookingTimeSelector"
import { BookingForm } from "../components/BookingForm/BookingForm"
import { Footer } from "../components/Footer/Footer"
import { useState } from "react"

export const BookingPage = () => {

    const [ date, setDate ] = useState(new Date());
    const [ time, setTime ] = useState('');

    return (
        <>
            <Header title='Reservas'/>
            <BookingCalendar date={date} onSelectDate={setDate}/>
            <BookingTimeSelector date={date.toLocaleDateString()} time={time} onSelectTime={setTime}/>
            <BookingForm date={date.toLocaleDateString()} time={time}/>
            <Footer />
        </>
    )
}
