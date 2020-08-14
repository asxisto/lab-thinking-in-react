import React from 'react';
import './PruductTable.css';
import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <ProductRow {...product} key={product.name} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
