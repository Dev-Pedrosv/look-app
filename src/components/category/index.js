import React from "react";
import { useNavigation } from "@react-navigation/native";

import util from "../../utils/util";
import { Box, Cover, Spacer, Text, Title, Touchable } from "../../styles";
import { colors } from "../../styles/theme.json";

export function Category({ category }) {
  const { navigate } = useNavigation();

  return (
    <Touchable
      onPress={() => navigate("Category", { category })}
      width="100%"
      height="180px"
      radius="10px"
      spacing="10px 0px"
    >
      <Cover width="100%" height="100%" image={category?.cover}>
        <Box
          width="100%"
          justify="center"
          align="center"
          hasPadding
          background={util.toAlpha(colors.black, 70)}
        >
          <Title color="light">{category?.title}</Title>
          <Spacer />
          <Text color="light">{category?.items} ITEMS</Text>
        </Box>
      </Cover>
    </Touchable>
  );
}
