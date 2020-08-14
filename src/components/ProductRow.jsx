import React from 'react';

function ProductRow(props) {
  return (
    <tr>
      <td>{props.products.name}</td>
      <td>{props.products.price}</td>
    </tr>
  );
}

export default ProductRow;
