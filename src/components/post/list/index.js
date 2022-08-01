import React from "react";
import { Post } from "..";
import { Box, Text, ScrollView } from "../../../styles";

export function PostList({ posts }) {
  return (
    <Box style={{ minWidth: "100%" }} hasPadding>
      {posts?.map((post) => (
        <Post post={post} />
      ))}
    </Box>
  );
}
