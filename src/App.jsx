import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import data from './data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.products = data.data;
    this.state = {
      currentProducts: data.data,
      search: '',
      showStock: false,
    };
  }

  handleNewSearch = (event) => {
    const value = event.target.value;
    this.setState({
      search: value,
    });
  };

  filteredList = () => {
    const searchTerm = this.state.search.toLowerCase();
    return this.state.currentProducts.filter((product) => {
      if (this.state.showStock && !product.stocked) {
        return '';
      }
      return product.name.toLowerCase().includes(searchTerm);
    });
  };

  handleStockedProducts = () => {
    this.setState({
      showStock: !this.state.showStock,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar
          searchItem={this.state.search}
          newSearch={this.handleNewSearch}
          onlyStockedProducts={this.handleStockedProducts}
        />
        <ProductTable products={this.filteredList()} />
        {/* {console.log(this.state.showStock)}; */}
      </div>
    );
  }
}

export default App;
