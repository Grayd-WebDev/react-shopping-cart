// feature 1
import React, { Component } from "react";
import Filter from "./components/filter";
import ProductList from "./components/product-list";
import data from "./data.json";

class App extends Component {
  state = {
    products: data.products,
    size: "",
    sort: "",
  };
  onFilter = (event) => {
    const size = event.target.value;
    this.setState(() => {
      return { size };
    });
  };
  onSort = (event) => {
    const sort = event.target.value;
    this.setState(() => {
      return { sort };
    });
  };
  filterProducts(size, products) {
    switch (size) {
      case "":
        return products;
      default:
        return products.filter(
          (product) => product.availableSizes.indexOf(size) >= 0
        );
    }
  }

  orderSort(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a == b) return 0;
  }
  // order by price and id
  orderProducts(order, products) {
    const sortedProducts = products.sort((a, b) => {
      switch (order) {
        case "highest":
          return b.price - a.price;
        case "lowest":
          return a.price - b.price;
        case "latest":
          return parseInt(a._id.match(/\d+/))  - parseInt(b._id.match(/\d+/));
      }
    });

    return sortedProducts;
  }
  // order by price and id

  render() {
    const { orderProducts, filterProducts} = this;
    const { products, sort, size } = this.state;
    const visibleProducts = orderProducts(sort, filterProducts(size, products));
  
    return (
      <div className="grid-container">
        <header className="App-header">
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={visibleProducts.length}
                sort={sort}
                size={size}
                onFilter={this.onFilter}
                onSort={this.onSort}
              />
              <ProductList products={visibleProducts} />
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>All rights are reserved</footer>
      </div>
    );
  }
}

export default App;
