import { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase'
import './bookingTimeSelector.css';

export const BookingTimeSelector = () => {

  const [ bookings, setBookings ] = useState([]);

  // Using database collection 'bookings'
  const bookingsCollectionRef = collection(db, 'bookings');

  // Function to get bookings from database
  const getBookings = async () => {
    const data = await getDocs(bookingsCollectionRef);
    setBookings(
      data.docs.map(doc => ({...doc.data(), id: doc.id}))
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center m-4">
            <hr />
            <h3 className="my-5">Paso 2: Elige la hora en que quieres reservar</h3>
            <div className="mb-5">
              <button id="9:00" className="btn time-button">9:00</button>
              <button id="9:30" className="btn time-button">9:30</button>
              <button id="10:00" className="btn time-button">10:00</button>
              <button id="10:30" className="btn time-button">10:30</button>
              <button id="11:00" className="btn time-button">11:00</button>
              <button id="11:30" className="btn time-button">11:30</button>
              <button id="12:00" className="btn time-button">12:00</button>
              <button id="12:30" className="btn time-button">12:30</button>
              <button id="13:00" className="btn time-button">13:00</button>
              <button id="13:30" className="btn time-button">13:30</button>
              <button id="16:00" className="btn time-button">16:00</button>
              <button id="16:30" className="btn time-button">16:30</button>
              <button id="17:00" className="btn time-button">17:00</button>
              <button id="17:30" className="btn time-button">17:30</button>
              <button id="18:00" className="btn time-button">18:00</button>
              <button id="18:30" className="btn time-button">18:30</button>
              <button id="19:00" className="btn time-button">19:00</button>
              <button id="19:30" className="btn time-button">19:30</button>
              <button id="20:00" className="btn time-button">20:00</button>
              <button id="20:30" className="btn time-button">20:30</button>
            </div>
            <p className="text-center resp-p"><b className="me-2">Hora seleccionada: </b>{''}{}</p>
          </div>
        </div>
      </div>
    </>
  );
}
