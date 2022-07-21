import React from "react";
import { Post } from "..";
import { Box, Text, ScrollView } from "../../../styles";

export function PostList() {
  return (
    <Box hasPadding>
      {Array.from(Array(20))?.map((item) => (
        <Post>Post</Post>
      ))}
    </Box>
  );
}
