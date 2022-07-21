import React from "react";
import { Header } from "../../components/header";
import { OrderList } from "../../components/order/list";

export function Orders() {
  return (
    <>
      <Header title="Orders" />
      <OrderList />
    </>
  );
}
