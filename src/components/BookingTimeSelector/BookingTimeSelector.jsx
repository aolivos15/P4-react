import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase'
import { TimeButton } from '../TimeButton/TimeButton';
import './bookingTimeSelector.css';

export const BookingTimeSelector = ({ date }) => {

  const [ time, setTime ] = useState('');
  const [ bookings, setBookings ] = useState([]);

  // Using database collection 'bookings'
  const bookingCollectionRef = collection(db, 'bookings');

  // Function to get all bookings from database
  const getBookings = async () => {
    const data = await getDocs(bookingCollectionRef);
    //console.log(data);
    setBookings(
      data.docs.map(doc => ({...doc.data(), id: doc.id}))
    );
  }

  // Function to hide buttons for times already booked
  const hideBookedTimes = () => {
    // if (id == )
  }

  // Execute getBookings only one time, when page loads
  useEffect( () => {
    getBookings();
  }, []);

  // Function to change selected time when the user clicks a time button
  const handleClick = (event) => {
    event.preventDefault();
    setTime(event.target.id);
    console.log(bookings);
    console.log(`Recibí la fecha desde el calendario: ${date}`);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center m-4">
            <hr />
            <h3 className="my-5">Paso 2: Elige la hora en que quieres reservar</h3>
            <div className="mb-5">
              <TimeButton buttonTime='9:00' onClick={handleClick} />
              <TimeButton buttonTime='9:30' onClick={handleClick} />
              <TimeButton buttonTime='10:00' onClick={handleClick} />
              <TimeButton buttonTime='10:30' onClick={handleClick} />
              <TimeButton buttonTime='11:00' onClick={handleClick} />
              <TimeButton buttonTime='11:30' onClick={handleClick} />
              <TimeButton buttonTime='12:00' onClick={handleClick} />
              <TimeButton buttonTime='12:30' onClick={handleClick} />
              <TimeButton buttonTime='13:00' onClick={handleClick} />
              <TimeButton buttonTime='13:30' onClick={handleClick} />
              <TimeButton buttonTime='16:00' onClick={handleClick} />
              <TimeButton buttonTime='16:30' onClick={handleClick} />
              <TimeButton buttonTime='17:00' onClick={handleClick} />
              <TimeButton buttonTime='17:30' onClick={handleClick} />
              <TimeButton buttonTime='18:00' onClick={handleClick} />
              <TimeButton buttonTime='18:30' onClick={handleClick} />
              <TimeButton buttonTime='19:00' onClick={handleClick} />
              <TimeButton buttonTime='19:30' onClick={handleClick} />
              <TimeButton buttonTime='20:00' onClick={handleClick} />
              <TimeButton buttonTime='20:30' onClick={handleClick} />
            </div>
            <p className="text-center resp-p"><b className="me-2">Hora seleccionada: </b>{time}</p>
          </div>
        </div>
      </div>
    </>
  );
}
