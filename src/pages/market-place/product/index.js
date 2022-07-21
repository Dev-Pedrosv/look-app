import React from "react";
import { StretchyScrollView } from "react-native-stretchy";
import Icon from "react-native-vector-icons/SimpleLineIcons";

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

const IMAGE =
  "https://i.pinimg.com/564x/f2/4e/a7/f24ea73f94c7342e61cd640ea17c62ae.jpg";

export function Product() {
  return (
    <>
      <Header
        title="striped cardigan"
        goBack
        right={() => (
          <Touchable hasPadding width="70px">
            <Icon name="bag" size={20} />
          </Touchable>
        )}
      />
      <StretchyScrollView
        image={{
          uri: IMAGE,
        }}
        imageOverlay={<Box background={util.toAlpha(colors.dark, 40)}></Box>}
        foreground={
          <Box hasPadding justify="flex-end">
            <Title bold color="light" variant="big">
              $1080
            </Title>
          </Box>
        }
      >
        <Box hasPadding background="light">
          <Text color="black">Shirts</Text>
          <Spacer size="20px" />
          <Title color="black">A.P.C. Collection Spring 2015</Title>
          <Spacer size="30px" />
          <Text color="dark">
            Enjoy the beauty of italian cotton all over your body. This item
            will fit your body and warm you up all over and during spring. This
            item will fit your body and warm you up all over and during spring.
          </Text>
          <Divider border size="1px" />
          <Spacer size="30px" />
          <Picker
            title="Size"
            options={[
              { label: "P", value: "P" },
              { label: "M", value: "M" },
              { label: "G", value: "G" },
              { label: "XG", value: "XG" },
            ]}
            initialValue="M"
            onChange={(value) => alert(value)}
          />
          <Spacer size="30px" />
          <Button block>
            <Text color="light">Add to Card</Text>
          </Button>
        </Box>
      </StretchyScrollView>
    </>
  );
}
