import React, { useContext, useState } from "react";
import { Box, Button, Input, Spacer, Text, Title } from "../../styles";
import { StatusBar } from "expo-status-bar";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppContext } from "../../contexts/app";

export function SignIn({ navigation: { navigate, replace } }) {
  const { setUser: setUserContext } = useContext(AppContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const requestLogin = async () => {
    if (user.email?.length === 0 || user.password?.length === 0) {
      alert("Fill all field.");
      return false;
    }
    try {
      const { data: users } = await api.get("/users", {
        params: {
          email: user.email?.toLowerCase(),
          password: user.password,
        },
      });

      const [loggedUser] = users;
      if (!loggedUser) {
        alert("User not found");
        return false;
      }

      await AsyncStorage.setItem("@user", JSON.stringify(loggedUser));
      setUserContext(loggedUser);
      replace("Feed");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <StatusBar style="dark" />
      <Box background="light" justify="center" align="center" hasPadding>
        <Title bold variant="big">
          LOOKAPP
        </Title>
        <Spacer size="50px" />
        <Title bold>SignIn my account.</Title>

        <Spacer size="50px" />
        <Input
          placeholder="E-mail"
          value={user.email}
          onChangeText={(email) => setUser({ ...user, email })}
        />
        <Spacer />
        <Input
          placeholder="Password"
          secureTextEntry
          value={user.password}
          onChangeText={(password) => setUser({ ...user, password })}
        />
        <Spacer size="50px" />

        <Button onPress={() => requestLogin()}>
          <Text color="light">SignIn into my account</Text>
        </Button>
        <Spacer size="20px" />
        <Text underline onPress={() => navigate("SignUp")}>
          Create new account
        </Text>
      </Box>
    </>
  );
}
