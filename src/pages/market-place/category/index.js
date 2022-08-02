import React, { useEffect, useState } from "react";
import api from "../../../services/api";

import Icon from "react-native-vector-icons/SimpleLineIcons";
import { Empty } from "../../../components/empty";
import { Header } from "../../../components/header";
import { ProductList } from "../../../components/product/list";
import { Touchable } from "../../../styles";

export function Category({ navigation, route }) {
  const { category } = route?.params;
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`/products`, {
        params: {
          categoryId: category?.id,
        },
      });
      setTimeout(() => {
        setProducts(data);
        setLoading(false);
      }, 2000);
    } catch (err) {
      setLoading(false);
      alert(err.message);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getProducts();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <Header
        title={category?.title}
        goBack
        right={() => (
          <Touchable
            hasPadding
            width="70px"
            onPress={() => navigation.navigate("Cart")}
          >
            <Icon name="bag" size={20} />
          </Touchable>
        )}
      />
      {loading && <Empty loading />}
      {!loading && <ProductList products={products} />}
    </>
  );
}
