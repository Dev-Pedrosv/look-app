import React, { useContext, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";
import { Title, Text, Button, Box, Spacer } from "../../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppContext } from "../../contexts/app";

export function Home({ navigation: { navigate, replace } }) {
  const [loading, setLoading] = useState(true);
  const { setUser } = useContext(AppContext);

  const checkLogged = async () => {
    setLoading(true);

    const loggedUser = await AsyncStorage.getItem("@user");
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
      replace("Feed");
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkLogged();
  }, []);
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
          <Spacer />
          {loading && (
            <>
              <Spacer />
              <ActivityIndicator size="large" />
            </>
          )}
        </Box>

        {!loading && (
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
        )}
      </Box>
    </>
  );
}
