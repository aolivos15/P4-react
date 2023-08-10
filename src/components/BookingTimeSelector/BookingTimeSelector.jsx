import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase'
import { TimeButton } from '../TimeButton/TimeButton';
import './bookingTimeSelector.css';

export const BookingTimeSelector = ({ date }) => {

  const [ time, setTime ] = useState('');

  // These are all the available time blocks on a normal day
  const initialTimeBlocksState = [ '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00' ];
  const [ availableTimeBlocks, setAvailableTimeBlocks ] = useState(initialTimeBlocksState);

  // Check the database for already booked time blocks on the selected date and hide all the time block buttons corresponding to booked times
  const removeUnavailableBlocks = async () => {

    try {
      // Get the document for the selected date from the database
      const dateDoc = await getDoc(doc(db, 'bookings', date));

      // Create a copy of the initial state of the available time blocks array
      let available = [...initialTimeBlocksState];

      // Loop through bookings in the selected date document
      for (const booking in dateDoc.data()) {
        // Get the time of the booking we are currently in
        const bookedTime = dateDoc.data()[booking].time;
        console.log(`Booked time: ${bookedTime}`);

        // Find the index of the booked time in the available time blocks array
        const index = available.findIndex(timeBlock => timeBlock === bookedTime);

        // If the index is found, remove the booked time block from the array
        if (index !== -1) {
          available.splice(index, 1);
        }
      }
      // Update the state with the new array of available time blocks
      setAvailableTimeBlocks(available);
    } catch (error) {
      console.error(`Error al obtener los bloques de tiempo disponibles: ${error}`);
    }

  }

  // Execute removeUnavailableBlocks every time the user selects a date
  useEffect( () => {
    removeUnavailableBlocks();
  }, [date]);

  // Display all available time block buttons in the page
  const displayAvailableTimeBlocks = () => {
    // Array to store the time button components and return them at the end
    const timeBlockElements = [];

    // Loop through the available time blocks and create a time block button for each of them. Store these time button in the timeBlockElements array
    for (const timeBlock of availableTimeBlocks) {
      timeBlockElements.push(<TimeButton key={timeBlock} buttonTime={timeBlock} onClick={handleClick} />);
    }

    return timeBlockElements;
  }

  // Change the selected time when the user clicks a time block button
  const handleClick = (event) => {
    event.preventDefault();
    setTime(event.target.id);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center m-4">
            <hr />
            <h3 className="my-5">Paso 2: Elige la hora en que quieres reservar entre los bloques disponibles</h3>
            <div className="mb-5">
              {
                displayAvailableTimeBlocks()
              }
            </div>
            <p className="text-center resp-p"><b className="me-2">Hora seleccionada: </b>{time}</p>
          </div>
        </div>
      </div>
    </>
  );
}
