import React from 'react';
import './PruductTable.css';
import ProductRow from './ProductRow';

function generateId() {
  return Math.random().toString();
}

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
            <ProductRow products={product} key={generateId()} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
