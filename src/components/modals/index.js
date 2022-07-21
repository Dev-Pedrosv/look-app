import React from "react";
import { Box, Button, Cover, Spacer, Text, Title } from "../../styles";

import checkCircle from "../../../assets/check-circle.png";
export function ModalCongrats() {
  return (
    <Box
      hasPadding
      background="light"
      justify="center"
      align="center"
      style={{
        position: "absolute",
        zIndex: 9999,
        width: "100%",
        height: "100%",
      }}
    >
      <Cover
        background="transparent"
        source={checkCircle}
        width="200px"
        height="200px"
      />
      <Spacer size="50px" />

      <Title>Congratulations!</Title>
      <Spacer />
      <Text>Your items are on the way and should arrive shortly</Text>
      <Spacer size="50px" />

      <Button block>
        <Text color="light">Confirmation</Text>
      </Button>
    </Box>
  );
}
