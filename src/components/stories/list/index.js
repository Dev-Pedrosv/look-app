import React from "react";
import { Story } from "..";
import { Box, Text, ScrollView } from "../../../styles";

export function StoryList({ stories }) {
  return (
    <Box fluidheight="260px">
      <Box row fluid justify="space-between" height="60px" hasPadding>
        <Text bold color="dark">
          Stories
        </Text>
        <Text>Show All</Text>
      </Box>
      <ScrollView horizontal style={{ paddingLeft: 20 }}>
        {stories?.map((story, index) => (
          <Story key={index} story={story} />
        ))}
      </ScrollView>
    </Box>
  );
}
