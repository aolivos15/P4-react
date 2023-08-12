import { addDoc, collection } from '@firebase/firestore';
import { useState } from 'react';
import { db } from '../../config/firebase'
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import './contactForm.css';

export const ContactForm = () => {

  // Constants to store the contents of the form
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ message, setMessage ] = useState('');

  // Alert to show when contact message is sent successfully
  const ContactSwal = withReactContent(Swal.mixin({
    customClass: {
      confirmButton: 'btn alert-btn',
    },
    buttonsStyling: false
  }));

  // Using database collection 'contact'
  const messageCollectionRef = collection(db, 'messages');

  // Function to clear the form after a message is stored in the database
  const clearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  }

  // When the user clicks on "submit" button, store the contents of the form into the database
  const onSubmit = async (event) => {
    // Prevent the form from reloading the page
    event.preventDefault();

    // Stop the function if the user has not filled all of the form fields
    if (!name || !email || !phone || !message) {
      BookingSwal.fire({
        icon: 'error',
        iconColor: '#32e1f1',
        color: '#64472E',
        titleText: 'Por favor rellene todos los campos.',
      });
      return;
    }

    // Store form contents into database
    await addDoc( messageCollectionRef, { name, email, phone, message } );
    // Display alert
    ContactSwal.fire({
      icon: 'success',
      iconColor: '#32e1f1',
      color: '#64472E',
      titleText: 'Su mensaje ha sido enviado.',
    });

    clearForm();
  }

  return (
    <>
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 bg-yellow p-5 dash-border rounded-custom">
            {/* CONTACT TEXT */}
            <div className="row bg-yellow mb-4 contact-text">
              <h2 className="resp-title text-center">Contacto</h2>
            </div>
            {/* CONTACT FORM */}
            <div className="row bg-yellow">
              <div className="col-lg-11 bg-aqua dash-border rounded-custom p-5 contact-form fs-5">
                {/* FORM START */}
                <form onSubmit={onSubmit}>
                  <div className="bg-aqua mb-3">
                    {/* <label className="form-label">Nombre</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder='Nombre'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="bg-aqua mb-3">
                    {/* <label className="form-label">Email</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder='Correo electrónico'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="bg-aqua mb-3">
                    {/* <label className="form-label">Teléfono</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder='Teléfono'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="bg-aqua mb-3">
                    {/* <label className="form-label">Mensaje</label> */}
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder='Escribe aquí tu mensaje...'
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div className="bg-aqua text-center">
                    <button type='submit' className="btn contact-btn">Enviar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
