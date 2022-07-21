import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { Home } from "./src/pages/home";
import { SignIn } from "./src/pages/signin";
import { SignUp } from "./src/pages/signup";
import { Feed } from "./src/pages/feed";
import { Marketplace } from "./src/pages/market-place";
import { Orders } from "./src/pages/orders";
import { Category } from "./src/pages/market-place/category";
import { Product } from "./src/pages/market-place/product";
import { Cart } from "./src/pages/cart";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import util from "./src/utils/util";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { Title } from "./src/styles";
import { colors } from "./src/styles/theme.json";

function CustomDrawerComponent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Title bold color="light" variant="big" hasPadding>
        LOOKAPP
      </Title>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function DrawerComponent() {
  return (
    <Drawer.Navigator
      initialRouteName="Feed"
      drawerContent={(props) => <CustomDrawerComponent {...props} />}
      drawerContentOptions={{
        activeBackgroundColor: util.toAlpha(colors.primary, 60),
        activeTintColor: colors.light,
        inactiveTintColor: util.toAlpha(colors.light, 60),
        style: {
          backgroundColor: colors.black,
        },
      }}
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => <Icon name="people" color={color} />,
        }}
        name="Feed"
        component={Feed}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => <Icon name="tag" color={color} />,
        }}
        name="Marketplace"
        component={Marketplace}
      />

      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => <Icon name="tag" color={color} />,
        }}
        name="Orders"
        component={Orders}
      />
    </Drawer.Navigator>
  );
}

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={(props) => <Home {...props} />}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignIn"
          component={(props) => <SignIn {...props} />}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={(props) => <SignUp {...props} />}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Feed"
          component={DrawerComponent}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Category"
          component={Category}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Product"
          component={Product}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Cart"
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
