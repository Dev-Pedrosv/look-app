import React from "react";
import { Category } from "..";

import { ScrollView } from "../../../styles";

export function CategoriesList({ categories }) {
  return (
    <ScrollView
      fluid
      style={{
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      {categories?.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </ScrollView>
  );
}
