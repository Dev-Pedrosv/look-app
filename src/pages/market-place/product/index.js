import React, { useState, useContext, useEffect } from "react";
import { StretchyScrollView } from "react-native-stretchy";
import Icon from "react-native-vector-icons/SimpleLineIcons";

import { AppContext } from "../../../contexts/app";

import { Header } from "../../../components/header";
import {
  Box,
  Button,
  Divider,
  Spacer,
  Text,
  Title,
  Touchable,
} from "../../../styles";

import util from "../../../utils/util";
import { colors } from "../../../styles/theme.json";
import { Picker } from "../../../components/picker";

export function Product({ navigation, route }) {
  const { addToCard } = useContext(AppContext);
  const [size, setSize] = useState(null);
  const { product } = route?.params;

  useEffect(() => {
    setSize(product?.sizes?.[0]?.value);
  }, [product]);

  return (
    <>
      <Header
        title={product?.title}
        goBack
        right={() => (
          <Touchable
            hasPadding
            width="70px"
            onPress={() => navigation.navigate("Cart")}
          >
            <Icon name="bag" size={20} />
          </Touchable>
        )}
      />
      <StretchyScrollView
        image={{
          uri: product?.cover,
        }}
        imageOverlay={<Box background={util.toAlpha(colors.dark, 40)}></Box>}
        foreground={
          <Box hasPadding justify="flex-end">
            <Title bold color="light" variant="big">
              ${product?.price}
            </Title>
          </Box>
        }
      >
        <Box hasPadding background="light">
          <Text color="black">{product?.type}</Text>
          <Spacer size="20px" />
          <Title color="black">{product?.title}</Title>
          <Spacer size="30px" />
          <Text color="dark">{product?.description}</Text>
          <Divider border size="1px" />
          <Spacer size="30px" />
          <Picker
            title="Size"
            options={product?.sizes}
            initialValue={product?.sizes?.[0]?.value}
            onChange={(value) => setSize(value)}
          />
          <Spacer size="30px" />
          <Button
            block
            onPress={() => {
              addToCard({
                ...product,
                size,
              });
              navigation.navigate("Cart");
            }}
          >
            <Text color="light">Add to Card</Text>
          </Button>
        </Box>
      </StretchyScrollView>
    </>
  );
}
