import React, { useState, useContext } from "react";
import { AppContext } from "../../contexts/app";

import { PaymentForm } from "../../components/form/payment";
import { Empty } from "../../components/empty";
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
  const { cart, DISCOUNT_PERCENTAGE, DELIVERY_TAX } = useContext(AppContext);
  const [tab, setTab] = useState("Cart");
  const [showContrates, setShowContrates] = useState(false);
  const cartIsEmpty = cart?.length === 0;

  const orderPrice = cart?.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  const totalDiscount = (orderPrice * DISCOUNT_PERCENTAGE).toFixed(2);
  const totalOrder = (orderPrice + DELIVERY_TAX - totalDiscount).toFixed(2);

  return (
    <>
      {showContrates && <ModalCongrats />}
      <Header title="Cart" goBack />
      {cartIsEmpty && <Empty message="Cart is empty" />}
      {!cartIsEmpty && (
        <>
          <Tabs
            tabs={[
              { label: "Cart", value: "Cart" },
              { label: "Payment", value: "Payment" },
            ]}
            active={tab}
            onChange={(value) => setTab(value)}
          />

          <ScrollView hasPadding background="light">
            <Spacer size="20px" />
            <Title variant="small">Order number is 458765432</Title>
            <Spacer size="20px" />
            {tab === "Cart" && (
              <>
                {cart?.map((product, index) => (
                  <Product key={index} product={product} selected />
                ))}
                <Spacer size="30px" />
                <Box row width="100%" height="30px" justify="space-between">
                  <Text color="dark">Order:</Text>
                  <Text color="dark">${orderPrice}</Text>
                </Box>
                <Box row width="100%" height="30px" justify="space-between">
                  <Text color="dark">Discount:</Text>
                  <Text color="success">$-{totalDiscount}</Text>
                </Box>
                <Box row width="100%" height="30px" justify="space-between">
                  <Text color="dark">Delivery:</Text>
                  <Text color="dark">${DELIVERY_TAX.toFixed(2)}</Text>
                </Box>
                <Box row width="100%" height="30px" justify="space-between">
                  <Text color="dark" bold>
                    Total order:
                  </Text>
                  <Text color="dark" bold>
                    ${totalOrder}
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
                  onChange={(creditCardData) => console.log(creditCardData)}
                />
                <Spacer size="20px" />

                <Button block onPress={() => setShowContrates(true)}>
                  <Text color="light">Confirmation</Text>
                </Button>
                <Spacer size="50px" />
              </>
            )}
          </ScrollView>
        </>
      )}
    </>
  );
}
