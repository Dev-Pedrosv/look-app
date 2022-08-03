import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../contexts/app";
import api from "../../services/api";

import { Header } from "../../components/header";
import { OrderList } from "../../components/order/list";
import { Empty } from "../../components/empty";

export function Orders({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AppContext);

  const getOrders = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`/orders`, {
        params: {
          userId: user?.id,
        },
      });
      setTimeout(() => {
        setOrders(data);
        setLoading(false);
      }, 2000);
    } catch (err) {
      setLoading(false);
      alert(err.message);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getOrders();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <Header title="Orders" />
      {loading && <Empty loading />}
      {!loading && <OrderList orders={orders} />}
    </>
  );
}
