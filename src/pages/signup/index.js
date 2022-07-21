import React from "react";
import { Box, Button, Input, Spacer, Text, Title } from "../../styles";
import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";

export function SignUp() {
  const { navigate } = useNavigation();
  return (
    <>
      <StatusBar style="dark" />
      <Box background="light" justify="center" align="center" hasPadding>
        <Title bold>Create new account</Title>
        <Spacer />
        <Text>Enter your details below</Text>

        <Spacer size="50px" />
        <Input placeholder="Name" />
        <Spacer />
        <Input placeholder="E-mail" />
        <Spacer />
        <Input placeholder="Password" secureTextEntry />
        <Spacer size="50px" />

        <Button onPress={() => navigate("Feed")}>
          <Text color="light">Create new account</Text>
        </Button>
        <Spacer size="20px" />
        <Text underline onPress={() => navigate("SignIn")}>
          Back to SingIn
        </Text>
      </Box>
    </>
  );
}
