import './productCard.css';

export const ProductCard = ( { img, name } ) => {
  return (
    <>
      <div className='col'>
        <div className='card product-card'>
          <img className='card-img-top card-img' src={img} alt={name} />
            <div className='card-body'>
              <h5 className='card-title'>{name}</h5>
              {/* <p class='card-text'>{desc}</p> */}
            </div>
        </div>
      </div>
    </>
  )
}