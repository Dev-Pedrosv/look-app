import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { Title, Text, Button, Box, Spacer } from "../../styles";

import { AppContext } from "../../contexts/app";

export function Home({ navigation: { navigate } }) {
  const { name } = useContext(AppContext);

  return (
    <>
      <StatusBar style="light" />
      <Box hasPadding align="center" background="dark">
        <Box justify="center" align="center">
          <Title color="light" variant="big" bold>
            LOOKAPP
          </Title>
          <Spacer />
          <Text align="center" spacing="0px 40px">
            Stay on top of the fashion world and buy your favorite looks.
          </Text>
        </Box>

        <Box justify="flex-end" fluid align="center">
          <Button block onPress={() => navigate("SignIn")}>
            <Text color="light">SigIn my account</Text>
          </Button>
          <Spacer underline color="light" size="20px" />
          <Text underline onPress={() => navigate("SignUp")}>
            Create new account
          </Text>
          <Spacer underline color="light" size="70px" />
        </Box>
      </Box>
    </>
  );
}
