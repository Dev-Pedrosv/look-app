import React from "react";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

import { Box, Title, Touchable } from "../../styles";
import { colors } from "../../styles/theme.json";

export function Header({ title = "Explore", right = null, goBack = false }) {
  const navigation = useNavigation();

  return (
    <Box
      row
      fluid
      height="80px"
      align="center"
      justify="space-between"
      border={`1px solid ${colors.muted}50`}
    >
      <Touchable
        width="70px"
        justify="center"
        hasPadding
        align="center"
        onPress={() => navigation[!goBack ? "openDrawer" : "goBack"]()}
      >
        <Icon name={!goBack ? "menu" : "arrow-left"} size={20} />
      </Touchable>
      <Box justify="center" align="center">
        <Title>{title}</Title>
      </Box>
      {right ? (
        right()
      ) : (
        <Touchable width="70px" hasPadding justify="center" align="center" />
      )}
    </Box>
  );
}
