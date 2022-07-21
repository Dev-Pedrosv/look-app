import React from "react";
import { Box, Cover, Text, Touchable } from "../../styles";
import { colors } from "../../styles/theme.json";

const IMAGE = "https://github.com/Dev-Pedrosv.png";

export function Story() {
  return (
    <Touchable
      background="black"
      radius="10px"
      height="190px"
      spacing="0px 10px 0px"
      width="150px"
    >
      <Cover width="100%" height="100%" image={IMAGE}>
        <Box
          fluid
          hasPadding
          background={`${colors.dark}50`}
          justify="space-between"
        >
          <Cover
            circle
            width="40px"
            height="40px"
            border={`1px solid ${colors.light}`}
            image={IMAGE}
          />

          <Box height="50px" justify="flex-end">
            <Text bold color="light">
              @Pedro_dev
            </Text>
            <Text variant="small" color="light">
              2 mins ago
            </Text>
          </Box>
        </Box>
      </Cover>
    </Touchable>
  );
}
