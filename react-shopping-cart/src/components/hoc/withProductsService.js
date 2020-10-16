import React from "react";
import { ProductsServiceConsumer } from "../products-service-context";

const withProductService = () => (Wrapped) => {
  return (props) => {
    return (
      <ProductsServiceConsumer>
        {(productService) => {
          return <Wrapped {...props} productService={productService} />;
        }}
      </ProductsServiceConsumer>
    );
  };
};

export {withProductService};
