import { MenuCard } from "../MenuCard/MenuCard";
import "./menu.css";

export const Menu = () => {

  // These should come from database
  const bebidasCalientes = [
    { producto: "Espresso", precio: "$1.600" },
    { producto: "Latte", precio: "$2.400" },
    { producto: "Capuccino", precio: "$2.600" },
    { producto: "Chocolate caliente", precio: "$3.400" },
    { producto: "Té", precio: "$1.200" },
    { producto: "Infusión de hierbas", precio: "$1.400" }
  ];

  const bebidasFrias = [
    { producto: "Bebida", precio: "$2.000" },
    { producto: "Agua mineral", precio: "$2.600" },
    { producto: "Limonada", precio: "$3.200" },
    { producto: "Milkshake", precio: "$4.600" },
    { producto: "Té helado", precio: "$2.600" }
  ];

  const pasteleria = [
    { producto: "Chocolate", precio: "$4.000" },
    { producto: "Mil hojas", precio: "$4.100" },
    { producto: "Tres leches", precio: "$4.100" },
    { producto: "Merengue-lúcuma", precio: "$4.600" },
    { producto: "Panqueque naranja", precio: "$4.500" },
    { producto: "Pie de limón", precio: "$3.000" },
    { producto: "Kuchen de nuez", precio: "$4.200" },
    { producto: "Tarta de durazno", precio: "$3.900" }
  ];

  const cupcakes = [
    { producto: "Limón", precio: "$1.800" },
    { producto: "Chocolate", precio: "$2.000" },
    { producto: "Red velvet", precio: "$2.200" },
    { producto: "Frutos del bosque", precio: "$2.200" },
    { producto: "Vainilla", precio: "$1.800" }
  ];

  const macarons = [
    { producto: "Frambuesa", precio: "$2.000" },
    { producto: "Limón", precio: "$2.000" },
    { producto: "Pistacho", precio: "$2.000" },
    { producto: "Frutilla", precio: "$2.000" },
    { producto: "Vainilla", precio: "$2.000" }
  ];

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-evenly menu-container">
        <MenuCard title="Bebidas calientes" products={bebidasCalientes} />
        <MenuCard title="Bebidas frías" products={bebidasFrias} />
        <MenuCard title="Trozos de torta" products={pasteleria} />
        <MenuCard title="Cupcakes" products={cupcakes} />
        <MenuCard title="Macarons" products={macarons} />
      </div>
    </>
  )
}
