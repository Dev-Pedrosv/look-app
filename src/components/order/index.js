import moment from "moment";
import React from "react";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { Box, Spacer, Text, Title } from "../../styles";
import { colors } from "../../styles/theme.json";
import util from "../../utils/util";

export function Order({ order }) {
  const stepEnum = {
    waiting: {
      icon: "clock",
      color: "warning",
    },
    delivered: {
      icon: "check",
      color: "success",
    },
    canceled: {
      icon: "close",
      color: "danger",
    },
  };

  const stepData = stepEnum[order?.step];

  return (
    <Box
      hasPadding
      radius="5px"
      spacing="0px 0px 10px 0px"
      border={`1px solid ${util.toAlpha(colors.muted, 50)}`}
    >
      <Box
        hasPadding
        row
        justify="space-between"
        width="100%"
        style={{
          borderBottomWidth: 1,
          borderBottomColor: util.toAlpha(colors.muted, 50),
        }}
      >
        <Box row align="center">
          <Icon name="check" size={20} color={colors[stepData?.color]} />
          <Text color={stepData?.color} spacing="0px 0px 0px 10px">
            {order?.step?.toUpperCase()}
          </Text>
        </Box>
        <Text>{moment(order?.createdAt).format("DD/MM/YYYY HH:mm")}</Text>
      </Box>
      <Box
        hasPadding
        width="100%"
        style={{
          borderBottomWidth: 1,
          borderBottomColor: util.toAlpha(colors.muted, 50),
        }}
      >
        <Title>Order №{order?.orderNumber}</Title>
        <Spacer />
        <Text>
          Tracking number: <Text color="dark">{order?.trackingNumber}</Text>
        </Text>
      </Box>
      <Box hasPadding row justify="space-between" width="100%">
        <Box>
          <Text>VALUE OF ITEMS</Text>
          <Text color="dark">${order?.totalValue}</Text>
        </Box>
        <Box>
          <Text>QUANTITY</Text>
          <Text color="dark">{order?.totalItems} pairs</Text>
        </Box>
      </Box>
    </Box>
  );
}
