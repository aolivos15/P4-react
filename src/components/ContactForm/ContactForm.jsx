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
  }

  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-sm-12 bg-yellow p-5 dash-border rounded-custom">
            {/* CONTACT TEXT */}
            <div className="row bg-yellow mb-4 contact-text">
              <h2 className="resp-title mb-4 text-center">Contacto</h2>
              <p className="resp-p mb-4">¿Tienes alguna pregunta, sugerencia o comentario? Escríbenos y nos pondremos en contacto contigo a la brevedad.</p>
            </div>
            {/* CONTACT FORM */}
            <div className="row bg-yellow">
              <div className="col bg-aqua dash-border rounded-custom p-5 contact-form fs-5">
                {/* FORM START */}
                <form onSubmit={onSubmit}>
                  <div className="bg-aqua mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="bg-aqua mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="bg-aqua mb-3">
                    <label className="form-label">Teléfono</label>
                    <input
                      type="text"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="bg-aqua mb-3">
                    <label className="form-label">Mensaje</label>
                    <input
                      type="text"
                      className="form-control"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div className="bg-aqua text-center mt-5">
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
