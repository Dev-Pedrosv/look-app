import React from "react";
import Icon from "react-native-vector-icons/SimpleLineIcons";

import { Header } from "../../components/header";
import { CaregoryList } from "../../components/category/list";

import { Text, Touchable } from "../../styles";

export function Marketplace() {
  return (
    <>
      <Header
        title="Categories"
        right={() => (
          <Touchable hasPadding width="70px">
            <Icon name="bag" size={20} />
          </Touchable>
        )}
      />
      <CaregoryList />
    </>
  );
}
