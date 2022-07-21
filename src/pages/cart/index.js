import React, { useState } from "react";
import { PaymentForm } from "../../components/form/payment";

import { Header } from "../../components/header";
import { ModalCongrats } from "../../components/modals";
import { Product } from "../../components/product";
import { Tabs } from "../../components/tabs";
import {
  Box,
  Button,
  Divider,
  ScrollView,
  Spacer,
  Text,
  Title,
} from "../../styles";

export function Cart() {
  const IMAGE =
    "https://i.pinimg.com/564x/f2/4e/a7/f24ea73f94c7342e61cd640ea17c62ae.jpg";

  const [tab, setTab] = useState("Cart");

  const [showContrats, setShowContrats] = useState(false);
  return (
    <>
      {showContrats && <ModalCongrats />}
      <Header title="Cart" goBack />
      <Tabs
        tabs={[
          { label: "Cart", value: "Cart" },
          { label: "Payment", value: "Payment" },
        ]}
        active={tab}
        onChange={(value) => setTab(value)}
      />

      <ScrollView hasPadding backgorund="light">
        <Spacer size="20px" />
        <Title variant="small">Order number is 458765432</Title>
        <Spacer size="20px" />
        {tab === "Cart" && (
          <>
            {Array.from(Array(3))?.map((item) => (
              <Product
                cover={IMAGE}
                brand="Raf Simons"
                title="Large striped cardigan"
                price="$1080"
                selected
              />
            ))}
            <Spacer size="30px" />
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark">Order:</Text>
              <Text color="dark">$445.00</Text>
            </Box>
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark">Discount:</Text>
              <Text color="success">$-44.50</Text>
            </Box>
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark">Delivery:</Text>
              <Text color="dark">$10.00</Text>
            </Box>
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark" bold>
                Total order:
              </Text>
              <Text color="dark" bold>
                $410.50
              </Text>
            </Box>
            <Spacer size="30px" />
            <Button block onPress={() => setTab("Payment")}>
              <Text color="light">Place Order</Text>
            </Button>
            <Spacer size="30px" />
          </>
        )}

        {tab === "Payment" && (
          <>
            <Spacer size="20px" />
            <Box row width="100%" justify="space-between">
              <Text color="dark" bold>
                Shipping address
              </Text>
              <Text color="danger">Change</Text>
            </Box>
            <Divider spacing="15px 0px 0px 0px" border />
            <Spacer size="30px" />
            <Text color="dark">
              Tiana Rosser, 4517 Washington Ave Manchester, Kentucky 39495
              United States
            </Text>
            <Spacer size="30px" />

            <Box row width="100%" justify="space-between">
              <Text color="dark" bold>
                Delivery details
              </Text>
              <Text color="danger">Change</Text>
            </Box>
            <Divider spacing="15px 0px 0px 0px" border />
            <Spacer size="20px" />
            <Text color="dark">Standard Delivery</Text>
            <Text color="dark">Saturday 27 - Tuesday 30</Text>
            <Text color="dark">Cost: $10</Text>

            <Spacer size="30px" />
            <PaymentForm
              onChange={(creaditCardData) => console.log(creaditCardData)}
            />
            <Spacer size="20px" />

            <Button block onPress={() => setShowContrats(true)}>
              <Text color="light">Confirmation</Text>
            </Button>
            <Spacer size="50px" />
          </>
        )}
      </ScrollView>
    </>
  );
}
