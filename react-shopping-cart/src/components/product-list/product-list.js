import React, { Component } from "react";
import "./products-list.css";
import ProductListItem from "../product-list-item";

class ProductList extends Component {
  render() {
    const { products } = this.props;

    return (
      <ul className="product-list">
        {products.map((product) => {
          return (
            <ProductListItem key={product._id} product={product}/>
          );
        })}
      </ul>
    );
  }
}

export default ProductList;
