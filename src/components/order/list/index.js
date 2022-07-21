import React from "react";
import { Order } from "..";

import { ScrollView } from "../../../styles";

export function OrderList() {
  return (
    <ScrollView background="light" hasPadding>
      {Array.from(Array(20))?.map((item) => (
        <Order />
      ))}
    </ScrollView>
  );
}
