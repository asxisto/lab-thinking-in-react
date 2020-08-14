import React from 'react';

function SearchBar(props) {
  return (
    <div>
      <form action="">
        <label htmlFor="searchBar">Search </label>
        <input
          id="searchBar"
          name="searchBar"
          type="text"
          placeholder="Search product"
          value={props.searchItem}
          onChange={props.newSearch}
        />
        <br />
        <input
          type="checkbox"
          id="productStock"
          name="productStock"
          value="productStock"
          onChange={props.onlyStockedProducts}
        />
        <small>
          <label htmlFor="productStock"> Only show product on stock</label>
        </small>
      </form>
    </div>
  );
}

export default SearchBar;
