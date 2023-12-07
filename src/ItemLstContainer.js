import React, { useState } from "react";
import "./index.css";
import "./App.css";

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Agua natural", price: 2000, category: "Bebida" },
    { id: 2, name: "Gaseosa", price: 2500, category: "Bebida" },
    { id: 3, name: "Jugo Hit", price: 3000, category: "Bebida" },
    { id: 4, name: "Agua con Gas", price: 2000, category: "Bebida" },
    { id: 5, name: "Energizante", price: 5500, category: "Bebida" },
    { id: 6, name: "Cerveza", price: 3500, category: "Bebida" },
    { id: 7, name: "Pony Malta", price: 2500, category: "Bebida" },
    { id: 8, name: "Limonada", price: 1500, category: "Bebida" },
    { id: 9, name: "Jugo Natural", price: 5000, category: "Bebida" },
    { id: 10, name: "yogurt", price: 4000, category: "Lácteo" },
    { id: 11, name: "Avena", price: 4500, category: "Lácteo" },
    { id: 12, name: "Malteada", price: 6000, category: "Lácteo" },
  ]);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
