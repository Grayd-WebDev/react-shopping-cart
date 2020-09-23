// feature 1
import React, { Component } from "react";
import ProductList from "./components/product-list";
import data from "./data.json";

class App extends Component {
  state = {
    products: data.products,
    size: "",
    sort: "",
  };
  render() {
    return (
      <div className="grid-container">
        <header className="App-header">
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <ProductList products={this.state.products}/>
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
