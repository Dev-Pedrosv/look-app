import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/SimpleLineIcons";

import { Header } from "../../components/header";
import { CategoriesList } from "../../components/category/list";

import { Touchable } from "../../styles";
import api from "../../services/api";
import { Empty } from "../../components/empty";

export function Marketplace({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/categories");
      setTimeout(() => {
        setCategories(data);
        setLoading(false);
      }, 2000);
    } catch (err) {
      setLoading(false);
      alert(err.message);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getCategories();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <Header
        title="Categories"
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
      {!loading && <CategoriesList categories={categories} />}
    </>
  );
}
