import React from "react";
import { Product } from "..";

import { ScrollView } from "../../../styles";

export function ProductList({ products }) {
  return (
    <ScrollView
      fluid
      style={{
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      {products?.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </ScrollView>
  );
}
