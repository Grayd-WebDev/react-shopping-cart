import React from "react";
import {formatCurrency} from "../../utils.js";

const ProductListItem = ({product}) => {
  return (
    <li className="product-list__item">
      {product.title}
      <div className="product">
        <a href={"#" + product._id}>
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
};

export default ProductListItem;
