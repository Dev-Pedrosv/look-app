import React from "react";
import { Box, ScrollView } from "../../styles";
import { Header } from "../../components/header";
import { StoryList } from "../../components/stories/list";
import { PostList } from "../../components/post/list";
import { StatusBar } from "expo-status-bar";

export function Feed() {
  return (
    <>
      <StatusBar style="dark" />

      <Box background="light">
        <Header title="Explore" />
        <ScrollView>
          <StoryList />
          <PostList />
        </ScrollView>
      </Box>
    </>
  );
}
