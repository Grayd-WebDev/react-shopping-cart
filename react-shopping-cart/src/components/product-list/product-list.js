import React, { Component } from "react";
import "./products-list.css";
import {formatCurrency} from "../../utils.js";

export default class ProductList extends Component {
  render() {
    const { products } = this.props;

    return (
      <ul className="product-list">
        {products.map((product) => {
          return (
            <li className="product-list__item" key={product._id}>
              {product.title}
              <div className="product">
                <a href={"#"+product._id}>
                  <img src={product.image} alt={product.title} />
                  <p className="product__title">{product.title}</p>
                </a>
                <div className="product__price">
                  <div>{formatCurrency(product.price)}</div>
                  <button className="product__btn btn btn-primary">Add To Cart</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
