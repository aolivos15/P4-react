import { ProductCard } from "../ProductCard/ProductCard"
import chocolate_cake from "../../assets/img/chocolate_cake.jpg";
import macarons from "../../assets/img/macarons.jpg"
import cupcakes from "../../assets/img/cupcakes.jpg"

export const FeaturedProducts = () => {
  return (
    <>
      <div className="container-fluid mb-5 bg-yellow py-5">
        <h2 className="resp-title text-center mb-5">Productos destacados</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-evenly">
            <ProductCard name='Pastel de chocolate' img={chocolate_cake} />
            <ProductCard name='Macarons de frambuesa' img={macarons} />
            <ProductCard name='Cupcakes de limón' img={cupcakes} />
        </div>
      </div>
    </>
  )
}
