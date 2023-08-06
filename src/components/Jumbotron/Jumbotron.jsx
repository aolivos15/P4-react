import './jumbotron.css';
import jumbotron_bg from '../../assets/img/jumbotron-bg.jpg';

export const Jumbotron = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
              <img className="img-fluid rounded" src={jumbotron_bg} alt="Cupcakes verde menta sobre una mesa rosada" />
          </div>
          <div className="col-md-5 p-5">
            <h2 className='resp-title mb-4'>Nubes de Azúcar</h2>
            <p className='resp-p mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button className="btn jumbotron-btn resp-btn">Haz tu pedido ahora</button>
          </div>
        </div>
      </div>
    </>
  );
}
