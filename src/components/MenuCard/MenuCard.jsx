import "./menuCard.css";

export const MenuCard = ({ title, products }) => {
  return (
    <>
      <div className='col menu-card-col mb-5'>
        <div className='card menu-card'>
          <div className='card-body'>
            <h5 className='menu-card-title'>{title}</h5>
            <table className="table table-warning table-striped table-hover fs-5">
              <tbody>
                {
                  products.map((product) => (
                    <tr key={product.producto}>
                      <td>
                        <span className="menu-card-text">{product.producto}</span>
                      </td>
                      <td>
                        <span className="menu-card-text">{product.precio}</span>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
