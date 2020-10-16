import { Component } from "react";
import data from "../../data.json";

export default class ProductService extends Component {
  _DATA_ = data;

  getProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this._DATA_.products);
      }, 700);
    });
  }
}
