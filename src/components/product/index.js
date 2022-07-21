import React from "react";
import { useNavigation } from "@react-navigation/native";

import util from "../../utils/util";
import { Box, Cover, Spacer, Text, Title, Touchable } from "../../styles";
import { colors } from "../../styles/theme.json";

export function Product({ cover, brand, title, price, selected = "false" }) {
  const { navigate } = useNavigation();

  return (
    <Touchable
      onPress={() => navigate("Product")}
      hasPadding={!selected}
      row
      background="light"
      spacing={selected ? "5px 0" : "0px 0px 1px 0px"}
    >
      <Cover width="80px" height="80px" image={cover} />
      <Box hasPadding style={{ paddingTop: 0, paddingBottom: 0 }}>
        {!selected && <Text color="dark">{brand}</Text>}
        <Text color="dark" bold>
          {title}
        </Text>
        <Spacer />
        {selected && (
          <Box>
            <Text color="dark">Size: M</Text>
          </Box>
        )}
        <Box row width="100%" justify="space-between">
          <Text color="dark">{price}</Text>

          <Text color="danger">{selected ? "Remove" : "Add to cart"}</Text>
        </Box>
      </Box>
    </Touchable>
  );
}
