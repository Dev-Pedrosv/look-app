import React from "react";
import { Box, Cover, Text, Touchable } from "../../styles";
import { colors } from "../../styles/theme.json";
import moment from "moment";

export function Story({ story }) {
  return (
    <Touchable
      background="black"
      radius="10px"
      height="190px"
      spacing="0px 10px 0px"
      width="150px"
    >
      <Cover width="100%" height="100%" image={story?.cover}>
        <Box
          fluid
          hasPadding
          background={`${colors.dark}50`}
          justify="space-between"
        >
          <Cover
            circle
            width="40px"
            height="40px"
            border={`1px solid ${colors.light}`}
            image={story?.owner?.photo}
          />

          <Box height="50px" justify="flex-end">
            <Text bold color="light">
              {story?.owner?.username}
            </Text>
            <Text variant="small" color="light">
              {moment(story?.createdAt).fromNow()}
            </Text>
          </Box>
        </Box>
      </Cover>
    </Touchable>
  );
}
