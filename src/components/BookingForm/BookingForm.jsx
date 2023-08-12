import { doc, setDoc, getDoc } from '@firebase/firestore';
import { useState } from 'react';
import { db } from '../../config/firebase'
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import './bookingForm.css';

export const BookingForm = ({ date, time }) => {

  // Constants to store the contents of the form
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ people, setPeople ] = useState('');

  // Function to clear the form after a booking is made
  const clearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setPeople('');
  }

  // Alert to show when the booking is successfully stored in the database
  const BookingSwal = withReactContent(Swal.mixin({
    customClass: {
      confirmButton: 'btn confirm-btn',
      cancelButton: 'btn cancel-btn',
    },
    buttonsStyling: false
  }));


  // Function to add a booking to the database
  const storeBooking = async () => {
    // Remove the ":" from the selected time and create a string to use as the name of the booked time slot field
    const timeString = `time${time.replace(/:/g, '')}`;

    // Create an object with all the booking info
    const booking = { [timeString]: { name, email, phone, people, time } };

    // Check if the document for the selected date already exists
    const document = await getDoc(doc(db, 'bookings', date));
    if (!document.exists()) {
      // Add a new document with the selected date as an ID, and the booking info as the content
      await setDoc(doc(db, 'bookings', date), booking);
    } else {
      // Add another map for the selected time to the document
      await setDoc(doc(db, 'bookings', date), booking, {merge: true});
    }

    // Display success alert
    BookingSwal.fire({
      icon: 'success',
      iconColor: '#32e1f1',
      color: '#64472E',
      titleText: 'Tu reservación ha quedado registrada. ¡Muchas gracias!',
    });

    // Clear form
    clearForm();
  }


  // When the user clicks on "submit" button, store the contents of the form into the database
  const onSubmit = (event) => {
    // Prevent the form from reloading the page
    event.preventDefault();

    // Stop the function if the user has not filled all of the form fields
    if (!name || !email || !phone || !people) {
      BookingSwal.fire({
        icon: 'error',
        iconColor: '#32e1f1',
        color: '#64472E',
        titleText: 'Por favor rellena todos los campos.',
      });
      return;
    }

    // Stop the function if the user has not selected a time
    if (!time) {
      BookingSwal.fire({
        icon: 'error',
        iconColor: '#32e1f1',
        color: '#64472E',
        titleText: 'Por favor selecciona una hora para reservar.',
      });
      return;
    }

    // Display alert asking user if they really want to book the selected date and time
    BookingSwal.fire({
      icon: 'warning',
      iconColor: '#32e1f1',
      color: '#64472E',
      text: `Has seleccionado el día ${date} a las ${time}.`,
      titleText: '¿Deseas hacer tu reservación?',
      showCancelButton: true,
      confirmButtonText: 'Sí, reservar una mesa',
      cancelButtonText: 'No',
    }).then((result) => {
      // If user clicks on "yes", store the booking in the database
      if (result.isConfirmed) {
        try {
          // Store form contents into database
          storeBooking();
        } catch (error) {
          console.error(error);
          // Display error alert
          BookingSwal.fire({
            icon: 'error',
            iconColor: '#32e1f1',
            color: '#64472E',
            titleText: 'Ocurrió un error al registrar tu reservación. Por favor inténtalo más tarde.',
          });
        }
      }
    });

  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <hr />
            <h3 className="text-center my-5">Paso 3: Ingresa tus datos para hacer tu reservación</h3>
            {/* CONTACT FORM */}
            <div className="row mb-5">
              <div className="col bg-yellow dash-border rounded-custom p-5 booking-form fs-5">
                {/* FORM START */}
                <form onSubmit={onSubmit}>
                  <div className="bg-yellow mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="bg-yellow mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="bg-yellow mb-3">
                    <label className="form-label">Teléfono</label>
                    <input
                      type="text"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="bg-yellow mb-3">
                    <label className="form-label">Cantidad de personas</label>
                    <input
                      type="number"
                      className="form-control"
                      value={people}
                      onChange={(e) => setPeople(e.target.value)}
                    />
                  </div>
                  <div className="bg-yellow text-center mt-5">
                    <button type='submit' className="btn booking-btn">Reservar una mesa</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
