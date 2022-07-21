import React from "react";
import Icon from "react-native-vector-icons/SimpleLineIcons";

import { Header } from "../../../components/header";
import { ProductList } from "../../../components/product/list";
import { Touchable } from "../../../styles";

export function Category() {
  return (
    <>
      <Header
        title="Categoria X"
        goBack
        right={() => (
          <Touchable hasPadding width="70px">
            <Icon name="bag" size={20} />
          </Touchable>
        )}
      />
      <ProductList />
    </>
  );
}
