import React from "react";
import ProductDetail from "../features/product-List/components/ProductDetail";
import Navbar from "../features/navbar/Navbar";

const ProductDetailPage = () => {
  return (
    <Navbar>
      <ProductDetail />
    </Navbar>
  );
};

export default ProductDetailPage;
