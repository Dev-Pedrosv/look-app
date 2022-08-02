import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../../contexts/app";

import { Box, Cover, Spacer, Text, Touchable } from "../../styles";
import { Alert } from "react-native";

export function Product({ product, selected = false }) {
  const { removeToCart } = useContext(AppContext);
  const { navigate } = useNavigation();

  return (
    <Touchable
      onPress={() => {
        if (!selected) {
          navigate("Product", { product });
        } else {
          Alert.alert(
            "Sure about that?",
            "Tis product will be removed from your card",
            [
              { text: "Cancel", style: "cancel" },
              {
                text: "Remove",
                style: "destructive",

                onPress: () => removeFromCard(product?.id),
              },
            ]
          );
          removeToCart(product?.id);
        }
      }}
      hasPadding={!selected}
      row
      background="light"
      spacing={selected ? "5px 0" : "0px 0px 1px 0px"}
    >
      <Cover width="80px" height="80px" image={product?.cover} />
      <Box hasPadding style={{ paddingTop: 0, paddingBottom: 0 }}>
        {!selected && <Text color="dark">{product?.brand}</Text>}
        <Text color="dark" bold>
          {product?.title}
        </Text>
        <Spacer />
        {selected && (
          <Box>
            <Text color="dark">Size:{product?.size}</Text>
          </Box>
        )}
        <Box row width="100%" justify="space-between">
          <Text color="dark">{product?.price}</Text>

          <Text color="danger">{selected ? "Remove" : "Add to cart"}</Text>
        </Box>
      </Box>
    </Touchable>
  );
}
