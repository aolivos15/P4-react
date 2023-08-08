import './footer.css';

export const Footer = () => {
  return (
    <>
      <hr />
      <div className="container footer fs-5">
        {/* ICONS */}
        <div className="row mx-4">
          <div className='col-md-8 footer-text'>
            <span>Síguenos en nuestras redes sociales:</span>
          </div>
          <div className='col-lg-4 col-md-4 footer-icons'>
            <a className="me-4" target="_blank" rel="noopener noreferrer" href="#"><i className="fa-brands fa-instagram"></i></a>
            <a className="me-4" target="_blank" rel="noopener noreferrer" href="#"><i className="fa-brands fa-facebook"></i></a>
            <a className="me-4" target="_blank" rel="noopener noreferrer" href="#"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
        <hr />
        {/* COLUMNS */}
        <div className="d-flex flex-row justify-content-center mt-4">
          <div className="col-lg-6 col-md-8 text-center">
            <p><i className="fa-solid fa-location-dot me-3"></i>Las Abejas 1234, Talca, Región del Maule, Chile</p>
            <p><i className="fa-solid fa-phone me-3"></i>+56 9 1234 5678</p>
            <p><i className="fa-solid fa-envelope me-3"></i>contacto@nubesdeazucar.cl</p>
          </div>
        </div>
        <hr />
        {/* CREDITS */}
        <div className="row text-center mt-4">
          <p>2023 © Nubes de Azúcar. Página ficticia para fines académicos.</p>
          <p className='mb-4'>~ Desarrollada por <a target="_blank" rel="noopener noreferrer" href="https://github.com/aolivos15/">Andrea Olivos</a> ~</p>
        </div>
      </div>
    </>
  );
}
