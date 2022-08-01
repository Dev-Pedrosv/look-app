import React, { useState, useContext } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppContext } from "../../contexts/app";
import api from "../../services/api";

import { Box, Button, Input, Spacer, Text, Title } from "../../styles";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function SignUp() {
  const { setUser: setUserContext } = useContext(AppContext);
  const { navigate, replace } = useNavigation();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const requestSingup = async () => {
    try {
      setLoading(true);
      if (
        user.name?.length === 0 ||
        user.email?.length === 0 ||
        user.password?.length === 0
      ) {
        alert("Fill all field.");
        return false;
      }
      const { data: loggedUser } = await api.post("/users", { ...user });

      if (!loggedUser) {
        setLoading(false);
        alert("Nao foi possivel criar o usuário");
        return false;
      }

      await AsyncStorage.setItem("@user", JSON.stringify(loggedUser));
      replace("Feed");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <StatusBar style="dark" />
      <Box background="light" justify="center" align="center" hasPadding>
        <Title bold>Create new account</Title>
        <Spacer />
        <Text>Enter your details below</Text>

        <Spacer size="50px" />
        <Input
          editable={!loading}
          placeholder="Name"
          value={user.name}
          onChangeText={(name) => setUser({ ...user, name })}
        />
        <Spacer />
        <Input
          editable={!loading}
          placeholder="E-mail"
          value={user.email}
          onChangeText={(email) =>
            setUser({ ...user, email: email.toLowerCase() })
          }
        />
        <Spacer />
        <Input
          editable={!loading}
          placeholder="Password"
          secureTextEntry
          value={user.password}
          onChangeText={(password) => setUser({ ...user, password })}
        />
        <Spacer size="50px" />
        {loading && <ActivityIndicator size="large" />}

        {!loading && (
          <>
            <Button onPress={() => requestSingup()}>
              <Text color="light">Create new account</Text>
            </Button>
            <Spacer size="20px" />
            <Text underline onPress={() => navigate("SignIn")}>
              Back to SingIn
            </Text>
          </>
        )}
      </Box>
    </>
  );
}
