import React from "react";
import { Product } from "..";

import { ScrollView } from "../../../styles";

const IMAGE =
  "https://i.pinimg.com/564x/f2/4e/a7/f24ea73f94c7342e61cd640ea17c62ae.jpg";

export function ProductList() {
  return (
    <ScrollView
      fluid
      style={{
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      {Array.from(Array(20))?.map((item) => (
        <Product
          cover={IMAGE}
          brand="Raf Simons"
          title="Large striped cardigan"
          price="$1080"
        />
      ))}
    </ScrollView>
  );
}
