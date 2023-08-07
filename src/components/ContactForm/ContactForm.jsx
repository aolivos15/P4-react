import { useState } from 'react';
import './contactForm.css';

export const ContactForm = () => {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ message, setMessage ] = useState('');

  return (
    <>
      <div className="container mb-4">
        <div className="row">
          <div className="col-sm-12 bg-yellow p-5 dash-border rounded-custom">
            {/* CONTACT TEXT */}
            <div className="row bg-yellow mb-4">
              <h2 className="resp-title mb-4">Contacto</h2>
              <p className="resp-p mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam labore consectetur ut quod voluptatibus, omnis impedit?</p>
              <p className="resp-p">Teléfono: +56 9 1234 5678</p>
              <p className="resp-p">Email: contacto@nubesdeazucar.cl</p>
            </div>
            {/* CONTACT FORM */}
            <div className="row bg-yellow">
              <div className="col bg-aqua dash-border rounded-custom p-5 contact-form">
                {/* FORM START */}
                <form onSubmit=''>
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
