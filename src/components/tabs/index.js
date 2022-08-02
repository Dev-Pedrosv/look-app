import React, { useEffect, useState } from "react";

import { colors } from "../../styles/theme.json";
import { Box, ScrollView, Text, Touchable } from "../../styles";

export function Tabs({ tabs = [], active, onChange = (value) => {} }) {
  const totalTabs = tabs.length;
  const activeTabStyle = {
    borderBottomWidth: 3,
    borderBottomColor: colors.danger,
  };

  return (
    <ScrollView
      style={{ maxHeight: 70, backgroundColor: colors.light }}
      horizontal
    >
      {tabs?.map((tab, index) => (
        <Touchable
          key={index}
          hasPadding
          style={[
            {
              width: 198,
              alignItems: "center",
            },
            active === tab.value ? activeTabStyle : {},
          ]}
          onPress={() => onChange(tab?.value)}
        >
          <Text color={active === tab.value ? "primary" : ""}>{tab.label}</Text>
        </Touchable>
      ))}
    </ScrollView>
  );
}
