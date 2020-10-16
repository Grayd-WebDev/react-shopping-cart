import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsServiceProvider } from "./components/products-service-context";
import ProductService from "./services/productService";

const productService = new ProductService();

ReactDOM.render(
  <React.StrictMode>
    <ProductsServiceProvider value={productService}>
      <App />
    </ProductsServiceProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
