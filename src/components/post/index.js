import React from "react";
import { Box, Text, Cover, Touchable, Spacer } from "../../styles";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { colors } from "../../styles/theme.json";
import moment from "moment";
import { color } from "react-native-reanimated";

const IMAGE = "https://github.com/Dev-Pedrosv.png";
const POST =
  "https://i.pinimg.com/564x/f2/4e/a7/f24ea73f94c7342e61cd640ea17c62ae.jpg";

export function Post({ post }) {
  return (
    <Box hasPadding fluid>
      <Box row align="center">
        <Cover width="40px" height="40px" circle image={post?.owner?.photo} />
        <Box spacing="0px 0px 0px 10px">
          <Text bold color="dark">
            {post?.owner?.username}
          </Text>
          <Text variant="small"> {moment(post?.createdAt).fromNow()}</Text>
        </Box>
        <Touchable height="30px" width="100px" align="flex-end">
          <Icon name="options" size={15} color={colors.muted} />
        </Touchable>
      </Box>

      <Cover
        image={post?.cover}
        width="100%"
        height="190px"
        spacing="10px 0px"
        radius="10px"
      />
      <Box row fluid align="center">
        <Box row fluid align="center">
          {post?.likeInfos?.photos.map((photos) => (
            <Cover
              circle
              width="30px"
              height="30px"
              border={`1px solid ${colors.light}`}
              image={photos}
              spacing="0px -15px 0px 0px"
            />
          ))}
          <Text variant="small" spacing="0px 0px 0px 20px">
            {post?.likeInfos?.description}
          </Text>
        </Box>
        <Box row justify="flex-end">
          <Touchable width="24px" spacing="0px 15px 0px 0px">
            <Icon
              name="heart"
              size={24}
              color={post?.isLiked ? colors.danger : colors.muted}
            />
          </Touchable>
          <Touchable width="24px" spacing="0px 15px 0px 0px">
            <Icon name="bubble" size={24} color={colors.muted} />
          </Touchable>
          <Touchable width="24px">
            <Icon name="share" size={24} color={colors.muted} />
          </Touchable>
        </Box>
      </Box>
      <Spacer />

      <Text color="dark" variant="small">
        {post?.description}
      </Text>
    </Box>
  );
}
