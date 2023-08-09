import { useState } from "react";
import Calendar from "react-calendar";
import './bookingCalendar.css';

export const BookingCalendar = () => {

  const [date, setDate] = useState(new Date());

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h3 className="my-5">Paso 1: Elige el día en que quieres reservar</h3>
            <div className="mb-5">
              <Calendar onChange={setDate} value={date} />
            </div>
            <p className="text-center resp-p"><b className="me-2">Fecha seleccionada: </b>{''}{date.toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </>
  );
}
