import React from "react";
import { Category } from "..";

import { ScrollView, Text } from "../../../styles";

export function CaregoryList() {
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
        <Category title={`Category`} description={"Blabblabla"} />
      ))}
    </ScrollView>
  );
}
