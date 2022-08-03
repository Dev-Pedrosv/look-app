import React, { useState, useRef, useEffect } from "react";
import SegmentedPicker from "react-native-segmented-picker";
import { Box, Input, Spacer, Text, Title, Touchable } from "../../../styles";

export function PaymentForm({ onChange = (creaditCard) => {} }) {
  const pickerRef = useRef(null);
  const [data, setData] = useState({
    holder_name: "",
    number: "",
    valid_date: "",
    cvv: "",
  });

  const month = [
    {
      label: "Janeiro",
      value: "01",
    },
    {
      label: "Fevereiro",
      value: "02",
    },
    {
      label: "Março",
      value: "03",
    },
    {
      label: "Abril",
      value: "04",
    },
    {
      label: "Maio",
      value: "05",
    },
    {
      label: "Junho",
      value: "06",
    },
    {
      label: "Julho",
      value: "07",
    },
    {
      label: "Agosto",
      value: "08",
    },
    {
      label: "Setembro",
      value: "09",
    },
    {
      label: "Outubro",
      value: "10",
    },
    {
      label: "Novembro",
      value: "11",
    },
    {
      label: "Dezembro",
      value: "12",
    },
  ];

  const year = [
    {
      label: "2022",
      value: "2022",
    },
    {
      label: "2023",
      value: "2023",
    },
    {
      label: "2024",
      value: "2024",
    },
    {
      label: "2025",
      value: "2025",
    },
    {
      label: "2026",
      value: "2026",
    },
    {
      label: "2027",
      value: "2027",
    },
    {
      label: "2028",
      value: "2028",
    },
    {
      label: "2029",
      value: "2029",
    },
    {
      label: "2030",
      value: "2030",
    },
  ];

  useEffect(() => {
    onChange(data);
  }, [data]);

  return (
    <>
      <SegmentedPicker
        ref={pickerRef}
        onConfirm={(validDate) => {
          setData({
            ...data,
            valid_date: `${validDate.month}/${validDate.year}`,
          });
        }}
        options={[
          {
            key: "month",
            items: month,
          },
          {
            key: "year",
            items: year,
          },
        ]}
      />
      <Box>
        <Title variant="small">Select and enter your payment details</Title>
        <Spacer />
        <Text>
          By continuing you agree to our <Text color="danger">Terms</Text>
        </Text>
        <Spacer size="20px" />
        <Input
          placeholder="Holder Name"
          value={data.holder_name}
          onChangeText={(holder_name) =>
            setData({
              ...data,
              holder_name,
            })
          }
        />
        <Spacer />
        <Input
          placeholder="Credit Card Number"
          value={data.number}
          onChangeText={(number) =>
            setData({
              ...data,
              number,
            })
          }
        />
        <Spacer />
        <Touchable fluid onPress={() => pickerRef.current.show()}>
          <Input
            value={data.valid_date}
            pointerEvents="none"
            placeholder="09/2025"
            editable={false}
          />
        </Touchable>
        <Spacer />
        <Box row align="center">
          <Box spacing="0px 10px 0px 0px">
            <Input
              placeholder="CVV"
              value={data.cvv}
              onChangeText={(cvv) =>
                setData({
                  ...data,
                  cvv,
                })
              }
            />
          </Box>
          <Box>
            <Text variant="small">
              3 or 4 digits usually found on the signature strip
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
