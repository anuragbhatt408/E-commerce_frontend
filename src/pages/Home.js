import React from "react";
import Navbar from "../features/navbar/Navbar";

import ProductList from "../features/product-List/components/ProductList";

const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList />
      </Navbar>
    </div>
  );
};

export default Home;
