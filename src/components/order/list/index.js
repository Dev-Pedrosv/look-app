import React from "react";
import { Order } from "..";

import { ScrollView } from "../../../styles";

export function OrderList({ orders }) {
  return (
    <ScrollView background="light" hasPadding>
      {orders?.map((order) => (
        <Order order={order} />
      ))}
    </ScrollView>
  );
}
