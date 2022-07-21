import React from "react";
import { useNavigation } from "@react-navigation/native";

import util from "../../utils/util";
import { Box, Cover, Spacer, Text, Title, Touchable } from "../../styles";
import { colors } from "../../styles/theme.json";

const IMAGE =
  "https://i.pinimg.com/564x/f2/4e/a7/f24ea73f94c7342e61cd640ea17c62ae.jpg";

export function Category({ title, description }) {
  const { navigate } = useNavigation();

  return (
    <Touchable
      onPress={() => navigate("Category")}
      width="100%"
      height="180px"
      radius="10px"
      spacing="10px 0px"
    >
      <Cover width="100%" height="100%" image={IMAGE}>
        <Box
          width="100%"
          justify="center"
          align="center"
          hasPadding
          background={util.toAlpha(colors.black, 70)}
        >
          <Title color="light">{title}</Title>
          <Spacer />
          <Text color="light">{description}</Text>
        </Box>
      </Cover>
    </Touchable>
  );
}
