import React from "react";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { Box, Spacer, Text, Title } from "../../styles";
import { colors } from "../../styles/theme.json";
import util from "../../utils/util";

export function Order() {
  return (
    <Box
      hasPadding
      radius="5px"
      spacing="0px 0px 10px 0px"
      border={`1px solid ${util.toAlpha(colors.muted, 50)}`}
    >
      <Box
        hasPadding
        row
        justify="space-between"
        width="100%"
        style={{
          borderBottomWidth: 1,
          borderBottomColor: util.toAlpha(colors.muted, 50),
        }}
      >
        <Box row align="center">
          <Icon name="check" size={20} color={colors.success} />
          <Text spacing="0px 0px 0px 10px">DELIVERED</Text>
        </Box>
        <Text>May 13, 2016 5:08 PM</Text>
      </Box>
      <Box
        hasPadding
        width="100%"
        style={{
          borderBottomWidth: 1,
          borderBottomColor: util.toAlpha(colors.muted, 50),
        }}
      >
        <Title>Order №1947034</Title>
        <Spacer />
        <Text>
          Tracking number: <Text color="dark">IW3475453455</Text>
        </Text>
      </Box>
      <Box hasPadding row justify="space-between" width="100%">
        <Box>
          <Text>VALUE OF ITEMS</Text>
          <Text color="dark">$80.58</Text>
        </Box>
        <Box>
          <Text>QUANTITY</Text>
          <Text color="dark">20 pairs</Text>
        </Box>
      </Box>
    </Box>
  );
}
