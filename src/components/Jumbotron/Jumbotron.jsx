import './jumbotron.css';
import jumbotron_bg from '../../assets/img/jumbotron-img.jpg';

export const Jumbotron = () => {
  return (
    <>
      <div className="container mb-4">
        <div className="row">
          <div className="col-lg-7">
              <img className="img-fluid rounded-custom" src={jumbotron_bg} alt="Cupcakes verde menta sobre una mesa rosada" />
          </div>
          <div className="col-lg-5 p-4">
            <h2 className='resp-title mb-4'>Un rincón acogedor donde los sabores se entrelazan con sonrisas</h2>
            <p className='resp-p mb-4'>Descubre nuestro rincón lleno de dulzura y cariño, donde cada mordisco es un recuerdo y cada sorbo te invita a saborear la vida. Ven a comenzar tus días con una sonrisa y a relajarte en nuestras acogedoras mesas al final de cada jornada.</p>
            <button className="btn jumbotron-btn resp-btn">Reserva tu momento especial</button>
          </div>
        </div>
      </div>
    </>
  );
}
