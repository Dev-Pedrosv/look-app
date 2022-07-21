import React from "react";
import { Story } from "..";
import { Box, Text, ScrollView } from "../../../styles";

export function StoryList() {
  return (
    <Box fluidheight="260px">
      <Box row fluid justify="space-between" height="60px" hasPadding>
        <Text bold color="dark">
          Stories
        </Text>
        <Text>Show All</Text>
      </Box>
      <ScrollView horizontal style={{ paddingLeft: 20 }}>
        {Array.from(Array(20))?.map((item) => (
          <Story>Story</Story>
        ))}
      </ScrollView>
    </Box>
  );
}
